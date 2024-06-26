# analysiscn.py
from openai import OpenAI
import openai
from util import save_chat_history, generate_unique_id,load_txt
from time import strftime, gmtime
from query_handler import query, init_llm
import pandas as pd
import ast
import importlib
import numpy as np  
import uuid
import time
import json
import os
import altair as alt

# 使用 query_handler.py 初始化 LLM
thread_id, assistant_id = init_llm()

data_introduction = load_txt('./prompts/output_introduction_cn.txt')



def get_globals_dict(code_string, data):
    # 将代码字符串解析为AST（抽象语法树）对象
    tree = ast.parse(code_string)
    # 提取导入模块的名称及其别名
    imported_modules = []
    # 遍历 AST 中的每个节点
    for node in tree.body:
        if isinstance(node, ast.Import):   # 如果节点是 ast.Import 类型，表示代码中出现了类似 import module 的导入语句
            for alias in node.names:   # 遍历 node.names 列表，它包含了导入的模块名称及别名信息
                module = importlib.import_module(alias.name)
                imported_modules.append((alias.name, alias.asname, module))
        elif isinstance(node, ast.ImportFrom):   # 如果节点是 ast.ImportFrom 类型，表示代码中出现了类似 from module import something 的导入语句
            module = importlib.import_module(node.module)
            for alias in node.names:
                obj = getattr(module, alias.name)   # getattr 函数来获取模块中的对象
                imported_modules.append(   # 将模块信息存储到 imported_modules 列表中，包括了模块名、别名以及对象
                (f"{node.module}.{alias.name}", alias.asname, obj)
            )

  # 将所需的模块导入字典
    globals_dict = {}
    for module_name, alias, obj in imported_modules:
        if alias:
            globals_dict[alias] = obj
        else:
            globals_dict[module_name.split(".")[-1]] = obj

        ex_dicts = {"pd": pd, "data": data, "np": np}
        globals_dict.update(ex_dicts)
        
    return globals_dict 


def generate_insight_by_llm_codes(task, thread_id, data_introduction = data_introduction):
    record = {"json_data":{"insight":None,"error_message":None}, "chart_json":None}
    code_example = """
```python
import altair as alt
import pandas as pd
import re

def plot(data: pd.DataFrame):
    # 确保数据中包含月份和年份列
    # 如果年份不是单独的列，则需要从日期数据中提取年份
    # 这里假设你的数据已经包含名为'月份'的列，且包含月份和年份信息，格式如 '2023-01'
    data['年份'] = pd.to_datetime(data['月份']).dt.year
    data['月'] = pd.to_datetime(data['月份']).dt.month

    # 重命名使用的列
    data = data.rename(columns={
        '标题': '论文数量',  # 确保'标题'这一列的名字正确无误
    })
    
    # 基于更改后的列名进行数据分析
    # 这里按照年份和月份进行分组
    每月论文数量 = data.groupby(['年份', '月'])['论文数量'].sum().reset_index()
    
    # 使用 altair 创建图表
    chart = alt.Chart(每月论文数量).mark_bar().encode(
        x=alt.X('月:N', axis=alt.Axis(title='月份'), sort=list(range(1, 13))),  # 使用'N'表示分类数据
        y=alt.Y('论文数量:Q', axis=alt.Axis(title='论文的数量')),
        color=alt.value('steelblue'),
        column=alt.Column('年份:N', header=alt.Header(title='年份')),  # 每个年份一个列
        tooltip=['年份:N', '月:N', '论文数量:Q']
    ).properties(
        title='每月发表的论文数量'
        width='container',  
        height='container'  
    )
    
    return chart

```
    """
    data = pd.read_csv("uploaded_files/output.csv", encoding='utf-8')
    
    # 第一个prompt
    prompt1 = f"""
    请帮助我解决以下数据分析任务: {task}

    数据介绍: {data_introduction}
    你需要使用 Python 和 Altair 库编写一个名为 'plot' 的函数来分析和可视化数据。你只需要给出函数定义 'plot(data)'，不需要执行它。假设数据已经通过 `pd.read_csv("output.csv")` 加载到名为 'data' 的 DataFrame 中。
    在编写代码前，请先检查数据的列名并确认需要的列是否存在。你可以使用 `data.columns` 来检查列名。

    请确保你的函数符合以下要求：
    - 在开始分析前，首先验证数据中是否存在必要的列名，如不存在，请打印出缺失列名的警告。
    - 生成一个包含选择功能的可视化，以便选择数据的子集。
    - 只需要一个单一视图，不需要组合视图。
    - 请注意确保高度和宽度都是container, width='container', height='container'。
    - 所有的日期、时间、年份都是对应的数据集中的年份这一列。


    请提供完整的函数定义，不需要执行它。以下是你可以参考的代码框架：
    {code_example}
    """


 
    record1 = query(prompt1, thread_id, assistant_id)
    print("----------------record1--------------------",record1)
    
    # 执行生成python代码
    if "python_codes" in record1 and record1["python_codes"].strip():  # 确保python_codes存在且不为空

        codes = record1["python_codes"] 
        # codes = preprocess_code(codes)
        print("----------------python_codes-------------------",codes)
        chart_json =None
        try:
            ex_locals = get_globals_dict(codes, data)
            exec(codes,ex_locals)
            
            # print(ex_locals)
            plot = ex_locals["plot"] 
            alt.data_transformers.disable_max_rows()
            
            chart = plot(data)
            chart_json = chart.to_json() 
            chart_json = json.loads(chart_json)
            # print("----------------chart_json--------------------",chart_json)
        except KeyError as e:
            print(f"Missing column in data: {e}")
            chart_json = {}
        except Exception as e:
            print(f"Error executing the plot function: {e}")
            chart_json = {}
            
            if 'data' in  chart_json: 
                string = str(uuid.uuid4())
                
                with open(f"uploaded_files/data_{string}.json", 'w') as json_file:
                    json.dump(chart_json["datasets"][chart_json["data"]["name"]], json_file, indent=4)
                chart_json["data"]={"url":f"http://127.0.0.1:5000/data/data_{string}.json"}
                del chart_json["datasets"]
        
        # 第二个prompt
        prompt2 = f"基于之前的数据分析和可视化结果，请提供对 {task} 的深入洞察。数据集已为你上传。这是生成图表的初始代码:\n{{codes}}\n基于之前的数据转换过程，你需要进一步进行洞察分析，并根据数据按年份报告重要的洞察。例如，若有年份数据，应只描述成特定年份中的最大值、最小值及其变化，如‘2014: 非流动资产最少，为 446,502,826.3 元’，‘2022: 非流动资产最多，为 9,632,486,090.0 元’，以及‘2015: 非流动资产波动最大，从2014年的 446,502,826.3 元增加到 1,156,193,876.0 元，增长率约为 159%’。请确保使用的列名与你的数据集中的列名相匹配。在生成自然语言洞察文本之前，直接使用数据集中的原始列名。注意，如果洞察文本中使用了数据变量，直接使用数据集中的原始列名。请确保你的输出与以下示例格式相匹配，并在生成的洞察后不要添加其他文本：```json\n{{\"insight\": {{\n\"text\": \"公司的债务资产比率分布显示，相当一部分公司的比率在 0.1 到 0.5 之间。\",\n\"type\": \"Distribution\",\n\"parameters\": \"positive\",\n\"data_variables\": [\"TotalLiabilities\", \"TotalAssets\"],\n\"data_values\": {{\n\"TotalLiabilities\": \"不同值\",\n\"TotalAssets\": \"不同值\"\n}}\n}},\n\"error_message\": \"null\"}}"
        


        record2 = query(prompt2, thread_id, assistant_id)
        print("----------------record2--------------------",record2)
        


        record = { "json_data": record2["json_data"], "chart_json":chart_json,"codes":codes}
        # print("----------------Record--------------------",record)
        print("----------------JSON Data----------------", record["json_data"])
        print("----------------Insight Text----------------",record["json_data"]["insight"])
        print("----------------Chart JSON----------------", record["chart_json"])
        # print("----------------Codes----------------", record["codes"])
    else:
        # 没有有效的python_codes，使用text回应
        prompt2 = f"基于之前的数据分析和可视化结果，请提供对 {task} 的深入洞察。你需要进一步进行洞察分析，并根据数据按年份报告重要的洞察。例如，若有年份数据，应只描述成特定年份中的最大值、最小值及其变化，如‘2014: 非流动资产最少，为 446,502,826.3 元’，‘2022: 非流动资产最多，为 9,632,486,090.0 元’，以及‘2015: 非流动资产波动最大，从2014年的 446,502,826.3 元增加到 1,156,193,876.0 元，增长率约为 159%’。请确保使用的列名与你的数据集中的列名相匹配。在生成自然语言洞察文本之前，直接使用数据集中的原始列名。注意，如果洞察文本中使用了数据变量，直接使用数据集中的原始列名。请确保你的输出与以下示例格式相匹配，并在生成的洞察后不要添加其他文本：```json\n{{\"insight\": {{\n\"text\": \"公司的债务资产比率分布显示，相当一部分公司的比率在 0.1 到 0.5 之间。\",\n\"type\": \"Distribution\",\n\"parameters\": \"positive\",\n\"data_variables\": [\"TotalLiabilities\", \"TotalAssets\"],\n\"data_values\": {{\n\"TotalLiabilities\": \"不同值\",\n\"TotalAssets\": \"不同值\"\n}}\n}},\n\"error_message\": \"null\"}}"
        record2 = query(prompt2, thread_id, assistant_id)
        print("----------------record2--------------------", record2)
        
        
        
        record = {"json_data": record2["texts"], "chart_json": {}, "codes": ""}

    print("----------------Final Record--------------------", record)
    return record
