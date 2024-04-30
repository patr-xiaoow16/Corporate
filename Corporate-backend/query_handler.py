# query_handler.py
import re
from util import save_chat_history, generate_unique_id,load_txt
from time import strftime, gmtime
import time
import json
from llm import LLM

# 初始化LLM，创建LLM实例，上传文件并基于文件创建助理和线程
llm_instance = LLM()

def init_llm():
    file_id = llm_instance.upload_file("uploaded_files/target.csv")
    assistant_id = llm_instance.create_assistant("您是一名个人数据分析师。回答有关数据表的问题。")
    thread_id = llm_instance.create_thread()
    return thread_id, assistant_id

# 发送问题，从LLM的响应中解析文本和JSON数据
def query(prompt, thread_id,assistant_id):
     
    time_start=time.time()
    
    # 发送prompt
    message = llm_instance.client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=prompt
    )

    print("query in")
    run = llm_instance.client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=assistant_id,
        instructions="Please address the user as Yuheng. The user has a premium account."
    )
    
    # 等待任务完成
    print("=====")
    while run.status != "completed":
        run = llm_instance.client.beta.threads.runs.retrieve(
            thread_id=thread_id,
            run_id=run.id
        )

    # 获取线程的所有消息
    messages = llm_instance.client.beta.threads.messages.list(
        thread_id=thread_id
    )
    
    
    # tasks =[]
    # text_contents = []
    # json_data = None
    # chart_json = None
    # python_codes = ""
    
    for message in messages.data:
        tasks =[]
        text_contents = []
        json_data = None
        chart_json = None
        python_codes = ""
        content =  messages.data[0].content[0]
        if hasattr(content, 'text') and hasattr(content.text, 'value'):
            text = content.text.value
            text_contents.append(text)

            # 解析Python代码和图表JSON
            if '```python' in text:
                start = text.find("```python\n") + len("```python\n")
                end = text.rfind("```")
                if start >= 0 and end > start:
                    python_codes = text[start:end].strip().replace("```python", "").replace("```", "").strip()

            # 解析JSON数据
            if 'json' in text:
                start = text.find("```json\n") + len("```json\n")
                end = text.rfind("```")
                if start >= 0 and end > start:
                    json_str = text[start:end].strip()
                    try:
                        json_data = json.loads(json_str.replace("True", "true").replace("False", "false").replace("None", "null"))
                    except json.JSONDecodeError as e:
                        print("JSON parsing error:", e)
                        
            # print("------------", message.content[0].text.value)
            # 解析任务和评分
            # 正则表达式以匹配维持原任务和任意子任务描述
            # 正则表达式以匹配维持原任务和子任务一、二、三的描述
            task_pattern = re.compile(
                r'### (维持原任务|子任务[一二三])[:：]?\s*(.+?)\n'
                r'- \*\*内容\*\*：\s*(.+?)\s*\n'
                r'- \*\*评分\*\*：\s*(\d+)\s*',
                re.DOTALL
            )
            tasks =[]

            for match in task_pattern.finditer(text):
                task_type = match.group(1).strip()  # 任务类型：维持原任务或子任务一/二/三
                task_name = match.group(2).strip()  # 任务名称，如果直接跟在类型后面则会被捕捉
                content = match.group(3).strip()   # 任务内容
                score = int(match.group(4).strip()) # 任务评分
                tasks.append({
                    'task_type': task_type,
                    'task_name': task_name if task_name else "未指定任务名称",  # 如果没有特定名称则指定默认值
                    'description': content,
                    'score': score
                })

    # 确保text_contents不为空
    if text_contents:
        last_text = text_contents[-1]
    else:
        last_text = "No text content available."

    print(json_data)
    time_end=time.time()           
    runtime=time_end-time_start    
    runtime=strftime("%H:%M:%S", gmtime(runtime)) 
    print('runtime',runtime)
    save_chat_history(thread_id, messages)
    
    return {"texts": last_text, "json_data": json_data, "chart_json":chart_json, "python_codes":python_codes, "tasks": tasks}