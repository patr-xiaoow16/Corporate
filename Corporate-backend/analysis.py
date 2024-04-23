# analysis.py
from openai import OpenAI
from util import save_chat_history, generate_unique_id,load_txt
from time import strftime, gmtime
from query_handler import query,thread
import pandas as pd
import ast
import importlib
import numpy as np  
import uuid
import time
import json


data_introduction = load_txt('./prompts/data_introduction_en.txt')

# def preprocess_code(code: str) -> str:
#     return code

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

def generate_insight_by_llm_codes(free_question, thread, data_introduction=data_introduction):
    record = {"json_data":{"insight":None,"error_message":None}, "chart_json":None}
    code_example = """
```python
import altair as alt
import pandas as pd
import re

def plot(data: pd.DataFrame):
    # Rename the columns used
    data = data.rename(columns={
        'Title': 'NumberOfPapers',
    })
    
    # Count papers published each year
    papers_per_year = data.groupby('Year')['NumberOfPapers'].count().reset_index()
    
    chart = alt.Chart(papers_per_year).mark_bar().encode(
        x=alt.X('Year:T', axis=alt.Axis(title='Year', labelAngle=-45)),
        y=alt.Y('NumberOfPapers:Q', axis=alt.Axis(title='Number of papers')),
        color=alt.value('steelblue'),
        tooltip=['Year:T', 'NumberOfPapers:Q']
    ).properties(
        title='Papers Published Each Year'
    )
    
    return chart

```
    """
    data = pd.read_csv("uploaded_files/indicators.csv")
    

    prompt1 = f"for this task: {free_question}, the data summary is {data_introduction} You need to write python codes to analyze the data and solve this task." "The dataset enterprise.csv has been read into a dataframe by pandas.read_csv(). Just use the variable 'data' to refer to this dataframe and do not read another data. After finish the insight analysis, you should continue use altair to generate visualization. Ensure that each generated visualization has a brush function that allows you to select a subset of the data. Please ensure that only one view is generated, no combination of views is required. Please give me the whole codes including data analysis and altair part in a function 'plot(data)'. You only need to give the function definition of plot(data), not execute it.  please write the codes in this structure:```python ```, there is an example" + code_example
 
    record1 = query(prompt1, thread)
    print("----------------record1--------------------",record1)

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
        if 'data' in  chart_json: 
            string = str(uuid.uuid4())
            
            with open(f"uploaded_files/data_{string}.json", 'w') as json_file:
                json.dump(chart_json["datasets"][chart_json["data"]["name"]], json_file, indent=4)
            chart_json["data"]={"url":f"http://127.0.0.1:5000/data/data_{string}.json"}
            del chart_json["datasets"]

    except Exception as e:
        print("Error executing the code:", e)
    # print("chart json 585", chart_json)

    prompt2 = f"Please provide insight for this task: {free_question}. The dataset is already uploaded for you. This is the initial code generates a chart :\n {codes}\n" "Based on previous data transformation process, you need to conduct insight analysis further to report an important insight. Before generating natural language insight text, you need to specify the column names (data variables) and data_values in the data involved in the insight, as well as the insight type. Improve insight text based on these. Note that if data variables are used in insight text, use the original column names directly. \n Here is an example for your output:```json\n \"insight\": {\n\"text\": \"There is a correlation between Weight_in_lb and Miles_per_Gallon, indicating heavier cars generally exhibit lower Miles_per_Gallon.\",\n\"type\": \"Correlation\",\n\"parameters\": \"negative\",\n\"data_variables\": [\"Weight_in_lbs\", \"Miles_per_Gallon\"],\n\"data_values\": {\n\"Weight_in_lbs\": \"2000 to 5000 lbs\",\n\"Miles_per_Gallon\": \"10 to 35 MPG\",\n\"Origin\": \"USA\"\n} \n}\n,\"error_message\":\"null\"}```\n.  Do not add other words after this json data."
    record2 = query(prompt2, thread)

    record = { "json_data": record2["json_data"], "chart_json":chart_json,"codes":codes}
    print(record)
    # record["json_data"]["insight"] =label_insight(record["json_data"]["insight"]["text"]) 
    return record 
