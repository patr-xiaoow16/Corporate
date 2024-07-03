# analysiscn_test_2llm.py
from openai import OpenAI
import openai
from util import save_chat_history, generate_unique_id, load_txt, save_communication_to_file, save_history_to_file
from time import strftime, gmtime
import pandas as pd
import ast
import importlib
import numpy as np
import uuid
import time
import json
import os
import altair as alt
from query_handler_2llm import query, init_llms

# 初始化LLM实例
(main_llm_instance, judge_llm_instance), (main_assistant_id, judge_assistant_id), (main_thread_id, judge_thread_id) = init_llms()

data_introduction = load_txt('./prompts/output_introduction_cn.txt')

def get_globals_dict(code_string, data):
    tree = ast.parse(code_string)
    imported_modules = []
    for node in tree.body:
        if isinstance(node, ast.Import):
            for alias in node.names:
                module = importlib.import_module(alias.name)
                imported_modules.append((alias.name, alias.asname, module))
        elif isinstance(node, ast.ImportFrom):
            module = importlib.import_module(node.module)
            for alias in node.names:
                obj = getattr(module, alias.name)
                imported_modules.append(
                    (f"{node.module}.{alias.name}", alias.asname, obj)
                )

    globals_dict = {}
    for module_name, alias, obj in imported_modules:
        if alias:
            globals_dict[alias] = obj
        else:
            globals_dict[module_name.split(".")[-1]] = obj

    ex_dicts = {"pd": pd, "data": data, "np": np}
    globals_dict.update(ex_dicts)
    
    return globals_dict

def preprocess_text(text):
    if isinstance(text, list):
        text = " ".join(text)  # 将列表转换为字符串
    start_idx = text.find("1. **数据点**:")
    if start_idx != -1:
        text = text[start_idx:]

    text = text.replace("**", "").replace("\n   - ", " - ").replace("\n\n", "\n").replace("\n", " ")

    text = text.replace("1. 数据点:", "1. 数据点: -")
    text = text.replace("2. 计算结果:", "2. 计算结果: -")
    text = text.replace("3. 原因分析:", "3. 原因分析: -")

    return text

# 视图推荐
def read_view_recommendation(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        view_recommendation_content = file.read()
    return view_recommendation_content

# self_refine
def self_refine_step(prompt, thread_id, assistant_id):
    response = query(prompt, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id)
    if "error" in response or "warning" in response:
        feedback_prompt = f"""
        你生成的结果中包含错误或警告。请根据以下反馈对你的代码进行修正：
        错误/警告: {response}
        """
        refined_response = query(feedback_prompt, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id)
        return refined_response
    return response

# 判断信息
def judge_information_step(info, thread_id, assistant_id):
    judge_prompt = f"""
    以下是生成的金融数据分析信息，请判断这些信息是否误导，并提供具体反馈：
    信息: {info}
    """
    judge_response = query(judge_prompt, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id)
    return judge_response

def generate_insight_by_llm_codes(task, user_type, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id, data_introduction=data_introduction):
    record = {"json_data": {"insight": None, "error_message": None}, "chart_json": None}
    
    view_recommendation_example = read_view_recommendation("./prompts/view_recommendation.txt")
    
    prompt1 = f"""
    请帮助我解决以下金融数据分析任务: {task}
    数据介绍: {data_introduction}
    在绘制视图之前，请先参考以下视图推荐内容：{view_recommendation_example}，并选择合适的视图。
    根据用户问题判断绘制视图的类型，从视图推荐内容中选择一种合适的视图类型，并在生成代码之前输出选择的视图类型及选择理由。你只需要给出选择的视图类型以及原因，不需要生成代码。
    """
    
    view_selection = self_refine_step(prompt1, main_thread_id, main_assistant_id)
    
    view_recommendation_code_example = read_view_recommendation("./prompts/view_recommendation_code.txt")
    
    code_example = """
    ```python
    import pandas as pd
    import numpy as np
    import altair as alt

    def plot(data: pd.DataFrame):
        required_columns = ['日期', '价格', '市场价格']
        missing_columns = [col for col in required_columns if col not in data.columns]
        if missing_columns:
            raise KeyError(f"数据中缺少以下必要列: {', '.join(missing_columns)}")
        
        data['日期'] = pd.to_datetime(data['日期'])
        data['收益率'] = data['价格'].pct_change()
        data['年化收益率'] = ((1 + data['收益率']).cumprod()) ** (252 / len(data)) - 1
        data['移动平均'] = data['价格'].rolling(window=20).mean()
        data['波动率'] = data['收益率'].rolling(window=20).std() * np.sqrt(252)
        data['增长率'] = data['价格'].pct_change(periods=12)
        roll_max = data['价格'].cummax()
        daily_drawdown = data['价格'] / roll_max - 1.0
        max_drawdown = daily_drawdown.cummin()
        data['最大回撤'] = max_drawdown
        cov_matrix = np.cov(data['收益率'][1:], data['市场价格'].pct_change()[1:])
        beta = cov_matrix[0, 1] / cov_matrix[1, 1]
        data['贝塔系数'] = beta
        market_return = data['市场价格'].pct_change().mean() * 252
        risk_free_rate = 0.02
        data['阿尔法系数'] = data['收益率'].mean() * 252 - (risk_free_rate + data['贝塔系数'] * (market_return - risk_free_rate))
        delta = data['价格'].diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
        rs = gain / loss
        data['RSI'] = 100 - (100 / (1 + rs))
        data['VWAP'] = (data['价格'] * data['成交量']).cumsum() / data['成交量'].cumsum()
        data['布林带上轨'] = data['移动平均'] + 2 * data['价格'].rolling(window=20).std()
        data['布林带下轨'] = data['移动平均'] - 2 * data['价格'].rolling(window=20).std()
        data['EMA12'] = data['价格'].ewm(span=12, adjust=False).mean()
        data['EMA26'] = data['价格'].ewm(span=26, adjust=False).mean()
        data['MACD'] = data['EMA12'] - data['EMA26']
        data['信号线'] = data['MACD'].ewm(span=9, adjust=False).mean()
        data['累计收益率'] = (1 + data['收益率']).cumprod() - 1
        data['变异系数'] = data['收益率'].std() / data['收益率'].mean()
        data['收益波动率'] = data['收益率'].rolling(window=20).std() * np.sqrt(252)
        data['信息比率'] = (data['收益率'].mean() - market_return) / data['收益率'].std()
        data['特雷诺比率'] = (data['收益率'].mean() - risk_free率) / beta

        price_chart = alt.Chart(data).mark_line().encode(
            x='日期:T',
            y='价格:Q',
            tooltip=['日期:T', '价格:Q']
        ).properties(
            title='价格走势',
            width='container',
            height='container'
        )
        
        ma_chart = alt.Chart(data).mark_line(color='red').encode(
            x='日期:T',
            y='移动平均:Q',
            tooltip=['日期:T', '移动平均:Q']
        ).properties(
            title='移动平均',
            width='container',
            height='container'
        )
        
        vol_chart = alt.Chart(data).mark_line(color='green').encode(
            x='日期:T',
            y='波动率:Q',
            tooltip=['日期:T', '波动率:Q']
        ).properties(
            title='波动率',
            width='container',
            height='container'
        )
        
        growth_chart = alt.Chart(data).mark_line(color='blue').encode(
            x='日期:T',
            y='增长率:Q',
            tooltip=['日期:T', '增长率:Q']
        ).properties(
            title='增长率',
            width='container',
            height='container'
        )

        drawdown_chart = alt.Chart(data).mark_line(color='purple').encode(
            x='日期:T',
            y='最大回撤:Q',
            tooltip=['日期:T', '最大回撤:Q']
        ).properties(
            title='最大回撤',
            width='container',
            height='container'
        )
        
        rsi_chart = alt.Chart(data).mark_line(color='orange').encode(
            x='日期:T',
            y='RSI:Q',
            tooltip=['日期:T', 'RSI:Q']
        ).properties(
            title='相对强弱指数（RSI）',
            width='container',
            height='container'
        )
        
        chart = alt.layer(price_chart, ma_chart, vol_chart, growth_chart, drawdown_chart, rsi_chart).resolve_scale(
            y='independent'
        ).properties(
            width='container',
            height='container'
        )
        
        return chart
    """

    data = pd.read_csv("uploaded_files/output.csv", encoding='utf-8')

    prompt2 = f"""
    请帮助我解决以下金融数据分析任务: {task}
    数据介绍: {data_introduction}
    视图选择: {view_selection}
    你需要使用 Python 和 Altair 库编写一个名为 'plot' 的函数来分析和可视化数据。你只需要给出函数定义 'plot(data)'，不需要执行它。假设数据已经通过 `pd.read_csv("output.csv")` 加载到名为 'data' 的 DataFrame 中。
    在编写代码前，请先检查数据的列名并确认需要的列是否存在。你可以使用 `data.columns` 来检查列名。

    请确保你的函数符合以下要求：
    - 根据用户问题判断绘制视图的类型，从视图推荐内容中选择合适的视图类型，并在生成代码之前输出选择的视图类型及选择理由。
    - 你要根据选择的视图类型来生成相应视图的代码，以下是你可以参考的视图类型代码示例：{view_recommendation_code_example}
    - 在开始分析前，首先验证数据中是否存在必要的列名，如不存在，请打印出缺失列名的警告。
    - 根据用户问题生成相应的计算代码，例如增长率、收益率、年化收益率、波动率、最大回撤、贝塔系数、阿尔法系数、相对强弱指数（RSI）、成交量加权平均价格（VWAP）、布林带、移动平均收敛散度（MACD）、累计收益率、变异系数、收益波动率、信息比率、特雷诺比率等。
    - 生成一个包含选择功能的可视化，以便选择数据的子集。
    - **请特别注意：**
    - **确保高度和宽度都是 `container`。**
    - **在代码中，明确设置 `width='container'` 和 `height='container'`。**

    以下是你可以参考的代码框架：
    {code_example}
    """

    record2 = self_refine_step(prompt2, main_thread_id, main_assistant_id)

    if "python_codes" in record2 and record2["python_codes"].strip():
        codes = record2["python_codes"]
        chart_json = None
        try:
            ex_locals = get_globals_dict(codes, data)
            exec(codes, ex_locals)
            plot = ex_locals["plot"]
            alt.data_transformers.disable_max_rows()
            chart = plot(data)
            chart_json = chart.to_json()
            chart_json = json.loads(chart_json)
        except KeyError as e:
            print(f"Missing column in data: {e}")
            chart_json = {}
        except Exception as e:
            print(f"Error executing the plot function: {e}")
            chart_json = {}

            if 'data' in chart_json:
                string = str(uuid.uuid4())
                with open(f"uploaded_files/data_{string}.json", 'w') as json_file:
                    json.dump(chart_json["datasets"][chart_json["data"]["name"]], json_file, indent=4)
                chart_json["data"] = {"url": f"http://127.0.0.1:5000/data/data_{string}.json"}
                del chart_json["datasets"]

        prompt3 = f"""
        用户类型：{user_type}。用户提供了一个数据集，并提出了一个特定问题。请根据用户问题中提到的相关维度进行必要的计算，并生成结构化的回答。回答应包含以下结构，避免过于详细的解释，确保每部分不超过两句话：

        1. 数据点：根据用户问题提供关键数据点。
        2. 计算结果：根据数据进行必要的计算，如增长率等。
        3. 原因分析：解释数据变化和计算结果的原因。

        请从以下数据集中提取相关信息：
        {data.to_dict()}
        问题：{task}

        相关维度：请描述问题涉及的具体维度。

        回答示例：
        如果用户类型是普通投资者：
        1. **数据点**:
        - 提供年份、权益乘数增长率等关键数据点，简明扼要。
        2. **计算结果**:
        - 提供简明的计算结果，突出结论。
        3. **原因分析**:
        - 解释数据变化的关键因素，简洁易懂。

        如果用户类型是财务专家：
        1. **数据点**:
        - 提供详细的关键数据点，包含更多数据背景。
        2. **计算结果**:
        - 提供详细的计算结果，强调具体数值。
        3. **原因分析**:
        - 详细解释数据变化的原因，指出关键因素和背景。

        请务必按上述格式返回答案。
        """

        record3 = self_refine_step(prompt3, main_thread_id, main_assistant_id)

        if "texts" in record3:
            record3["texts"] = preprocess_text(record3["texts"])

        judge_response = judge_information_step(record3["texts"], judge_thread_id, judge_assistant_id)
        if "error" in judge_response or "warning" in judge_response:
            feedback_prompt = f"""
            你生成的结果中包含误导信息。请根据以下反馈对你的内容进行修正：
            误导信息反馈: {judge_response}
            """
            record3 = query(feedback_prompt, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id)

        record = {"json_data": record3.get("json_data", None), "chart_json": chart_json, "codes": codes, "texts": record3.get("texts", None)}
    else:
        prompt3 = f"""
        用户类型：{user_type}。用户提供了一个数据集，并提出了一个特定问题。请根据用户问题中提到的相关维度进行必要的计算，并生成结构化的回答。回答应包含以下结构，避免过于详细的解释，确保每部分不超过两句话：

        1. 数据点：根据用户问题提供关键数据点。
        2. 计算结果：根据数据进行必要的计算，如增长率等。
        3. 原因分析：解释数据变化和计算结果的原因。

        请从以下数据集中提取相关信息：
        {data.to_dict()}
        问题：{task}

        相关维度：请描述问题涉及的具体维度。

        回答示例：
        如果用户类型是普通投资者：
        1. **数据点**:
        - 提供年份、权益乘数增长率等关键数据点，简明扼要。
        2. **计算结果**:
        - 提供简明的计算结果，突出结论。
        3. **原因分析**:
        - 解释数据变化的关键因素，简洁易懂。

        如果用户类型是财务专家：
        1. **数据点**:
        - 提供详细的关键数据点，包含更多数据背景。
        2. **计算结果**:
        - 提供详细的计算结果，强调具体数值。
        3. **原因分析**:
        - 详细解释数据变化的原因，指出关键因素和背景。

        请务必按上述格式返回答案。
        """

        record3 = self_refine_step(prompt3, main_thread_id, main_assistant_id)

        if "texts" in record3:
            record3["texts"] = preprocess_text(record3["texts"])

        judge_response = judge_information_step(record3["texts"], judge_thread_id, judge_assistant_id)
        if "error" in judge_response or "warning" in judge_response:
            feedback_prompt = f"""
            你生成的结果中包含误导信息。请根据以下反馈对你的内容进行修正：
            误导信息反馈: {judge_response}
            """
            record3 = query(feedback_prompt, main_llm_instance, judge_llm_instance, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id)

        record = {"json_data": record3.get("json_data", None), "chart_json": {}, "codes": "", "texts": record3.get("texts", None)}

    print("----------------Final Record--------------------", record)
    
    return record