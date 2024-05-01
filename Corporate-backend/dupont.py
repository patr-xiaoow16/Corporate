import re
import json
import pandas as pd

from query_handler import query, init_llm

# 初始化LLM
thread_id, assistant_id = init_llm()

def dupont_analysis(thread_id, assistant_id):
    data = pd.read_csv("uploaded_files/dupont.csv", encoding='utf-8')
    prompt = f"""
    你有一个按年份组织的财务数据集，数据已经通过 `pd.read_csv("dupont.csv")` 加载到名为 'data' 的 DataFrame 中。其中包括多种财务指标和时间相关的标记，如“累计”，“同比”，“环比”，“单季”，“单季同比”，“单季环比”。数据集的列可能以字符串形式存储，需要转换为数值类型。
    
    请按以下步骤执行杜邦分析：

    1. 只选择带有“累计”标记的行进行分析。
    2. 确保所有需要进行计算的列都被转换为数值类型。
    3. 忽略没有“累计”数据的年份。
    4. 对于数据集中的每一年，进行如下计算：
        a. 使用或计算净利润：如果存在“净利润”列，则直接使用该值；如果不存在，则计算净利润：净利润 = 营业收入 - 全部成本 + 其他利润 - 所得税费用。
        b. 计算全部成本（如果各组成部分存在）：全部成本 = 营业成本 + 销售费用 + 管理费用 + 财务费用。
        c. 计算流动资产：流动资产 = 货币资金 + 应收账款 + 预付账款 + 存货 + 其他流动资产。
        d. 计算总资产：总资产 = 长期投资或长期股权投资 + 流动资产。
        e. 计算销售净利润率：销售净利润率 = 净利润 ÷ 营业收入（如果净利润和营业收入均可用）。
        f. 计算资产周转率：资产周转率 = 营业收入 ÷ 总资产（如果营业收入和总资产均可用）。
        g. 计算资产净利率：资产净利率 = 销售净利润率 × 资产周转率（如果销售净利润率和资产周转率均可用）。
        h. 计算净资产收益率：净资产收益率 = 资产净利率 × 权益乘数（1.5）。
        i. 为每个年份生成独立的结果条目。
    
    返回格式化的JSON结果，如下所示：
    
    ```json
    {{
        "dupont": [
            {{
                "年份": "2016",
                "结果": [
                    {{"label": "净利润", "value": 计算得到的2016年净利润值}},
                    {{"label": "总资产", "value": 计算得到的2016年总资产值}},
                    {{"label": "销售净利润率", "value": 计算得到的2016年销售净利润率值}},
                    {{"label": "资产周转率", "value": 计算得到的2016年资产周转率值}},
                    {{"label": "资产净利率", "value": 计算得到的2016年资产净利率值}},
                    {{"label": "净资产收益率", "value": 计算得到的2016年净资产收益率值}}
                ]
            }},
            // 同样格式化其它年份的结果
        ]
    }}
    ```
    此外，请确保你的输出与示例格式相匹配，并在生成的洞察后不要添加其他文本。并且不要省略任何年份的结果，全部呈现。
    """
    try:
        records = query(prompt, thread_id, assistant_id)
        return records
    except Exception as e:
        print("Error occurred:", e)

# 使用JSON数据的示例代码
def use_json_data(dupont_data):
    # 遍历每个年份的结果
    for year_data in dupont_data['dupont']:
        print(f"年份: {year_data['年份']}")
        # 检查结果是否为列表，如果不是，将其转换为列表以保持一致性
        results = year_data['结果'] if isinstance(year_data['结果'], list) else [year_data['结果']]
        for result in results:
            print(f"{result['label']}: {result['value']}")
    return dupont_data


if __name__ == "__main__":
    dupont_records = dupont_analysis(thread_id, assistant_id)
    print("--------------dupont records-------------", dupont_records)  # 查看返回的完整记录
        
    if dupont_records and "texts" in dupont_records:
        json_text = dupont_records["texts"]
        print("--------------dupont records texts-------------", json_text)  # 查看texts字段内容
        
        # 使用正则表达式从文本中提取 JSON 部分
        try:
            # 正则表达式找到JSON开始和结束的位置
            json_data = re.search(r'\{.*\}', json_text, re.DOTALL).group(0)
            parsed_data = json.loads(json_data) # 将JSON字符串转换为字典
            dupont_result = use_json_data(parsed_data) # 传递解析后的数据
            print("--------------dupont result-------------", dupont_result)  # 查看dupont result
            print("Results processed successfully.")
        except ValueError as e:
            print("Error finding JSON data:", e)
        except json.JSONDecodeError as e:
            print("JSON decoding failed:", e)
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
    else:
        print("Error: 'texts' key is missing or dupont_records is None.")
