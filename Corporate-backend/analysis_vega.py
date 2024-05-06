# analysis_vega.py
from openai import OpenAI
import openai
from util import save_chat_history, generate_unique_id,load_txt
from time import strftime, gmtime
from query_handler import queryVega, init_llm
import pandas as pd
import ast
import importlib
import numpy as np  
import uuid
import time
import json
import os


# 使用 query_handler.py 初始化 LLM
thread_id, assistant_id = init_llm()

def generate_insight_by_llm(task, thread ,assistant):
    prompt = f"请为此任务提供洞察：{task}。" "首先，你需要创建一个准确且完整的Vega-Lite JSON规格说明，并写出从中观察到的重要洞察。数据集已经上传，名为target.csv。  \n 其次，洞察应清楚地识别数据的以下方面：类型（如相关性）、参数（描述类型细节，如负、负面、增加、增大）、数据变量（如非流动资产和资产净利率）和数据值（如40,257,239,155）。 \n 你的任务是生成一个包含三个关键元素的JSON对象：'visualization'、'insight'和'error_message'。如果'visualization'和'insight'元素已成功生成，则填充它们。 如果两个元素都成功生成，则将'error_message'设置为'null'。如果在生成任一元素时遇到问题，'error_message'应详细说明失败的具体原因，例如'请求过于复杂，需要多个可视化和洞察'。这将使我能够进一步分析问题并将其分解为可管理的子任务以执行。请确保你对'visualization'和'insight'是否成功生成的判断是准确的，因为后续步骤依赖于这种准确性。\n 你可以逐步思考，但不要写太多关于你的思考过程。以下是你输出的示例结构: ```json\n{\n'visualization': {\n'Vega-Lite specification added here' },\n'insight': {\n'text': '在本企业中，非流动负债合计与负债合计呈现出正相关关系。随着非流动负债合计的增加，负债合计也随之增加，表明企业在负债方面的长期和整体负担同时增加。',\n'type': 'Correlation',\n'parameters': 'negative',\n'data_variables': ['Weight_in_lbs', 'Miles_per_Gallon'],\n'data values': {\n'Weight_in_lbs': '2000 to 5000 lbs',\n'Miles_per_Gallon': '10 to 35 MPG'\n} \n}\n,'error_message':'null'}``` \n  请不要在这个json数据后添加其他句子。"
    json_data = queryVega(prompt, thread_id, assistant_id)
    print("----------------vega record----------------", json_data)
    
    if json_data:
        insight_text = json_data.get('insight', {}).get('text', '无洞察文本')
        vega_json = json_data.get('visualization', '无视图信息')
        print("洞察文本:", insight_text)
        print("视图 JSON:", vega_json)
        return json_data
    else:
        print("未获取到有效的 JSON 数据")
        return None

