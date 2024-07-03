# query_handler_2llm.py
import re
from util import save_chat_history, generate_unique_id, load_txt, save_communication_to_file, save_history_to_file
from time import strftime, gmtime
import time
import json
from llm import LLM

# 初始化两个LLM实例
def init_llms():
    main_llm = LLM()
    judge_llm = LLM()
    
    file_id = main_llm.upload_file("uploaded_files/output.csv")
    judge_file_id = judge_llm.upload_file("uploaded_files/output.csv")
    
    main_assistant_id = main_llm.create_assistant("您是一名财务分析专家。回答有关数据表的问题。")
    judge_assistant_id = judge_llm.create_assistant("您是一个评审助理，请评估生成的内容是否有误导。")
    
    main_thread_id = main_llm.create_thread()
    judge_thread_id = judge_llm.create_thread()
    
    return (main_llm, judge_llm), (main_assistant_id, judge_assistant_id), (main_thread_id, judge_thread_id)


# 发送问题，从LLM的响应中解析文本和JSON数据
def query(prompt, main_llm, judge_llm, main_thread_id, main_assistant_id, judge_thread_id, judge_assistant_id):
    time_start = time.time()

    # 发送prompt到主LLM
    message = main_llm.client.beta.threads.messages.create(
        thread_id=main_thread_id,
        role="user",
        content=prompt
    )

    print("query in")
    run = main_llm.client.beta.threads.runs.create(
        thread_id=main_thread_id,
        assistant_id=main_assistant_id,
        instructions="Please address the user as Yuheng. The user has a premium account."
    )

    # 等待任务完成
    print("=====")
    while run.status != "completed":
        run = main_llm.client.beta.threads.runs.retrieve(
            thread_id=main_thread_id,
            run_id=run.id
        )

    # 获取主线程的所有消息
    messages = main_llm.client.beta.threads.messages.list(
        thread_id=main_thread_id
    )

    # 解析响应中的文本和JSON数据
    tasks = []
    text_contents = []
    json_data = None
    chart_json = None
    python_codes = ""

    for message in messages.data:
        content = message.content[0]
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
            if '```json' in text:
                start = text.find("```json\n") + len("```json\n")
                end = text.rfind("```")
                if start >= 0 and end > start:
                    json_str = text[start:end].strip()
                    try:
                        json_data = json.loads(json_str.replace("True", "true").replace("False", "false").replace("None", "null"))
                    except json.JSONDecodeError as e:
                        print("JSON parsing error:", e)

            # 解析任务和评分
            task_pattern = re.compile(
                r'### (维持原任务|子任务[一二三])[:：]?\s*(.+?)\n'
                r'- \*\*内容\*\*：\s*(.+?)\s*\n'
                r'- \*\*评分\*\*：\s*(\d+)\s*',
                re.DOTALL
            )

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


    # 将主LLM的生成内容发送给评审助理
    judge_prompt = "请评估以下内容是否存在误导：\n\n" + last_text
    judge_message = judge_llm.client.beta.threads.messages.create(
        thread_id=judge_thread_id,
        role="user",
        content=judge_prompt
    )

    judge_run = judge_llm.client.beta.threads.runs.create(
        thread_id=judge_thread_id,
        assistant_id=judge_assistant_id,
        instructions="Please evaluate if the provided content is misleading."
    )

    # 等待评审任务完成
    while judge_run.status != "completed":
        judge_run = judge_llm.client.beta.threads.runs.retrieve(
            thread_id=judge_thread_id,
            run_id=judge_run.id
        )

    # 获取评审线程的所有消息
    judge_messages = judge_llm.client.beta.threads.messages.list(
        thread_id=judge_thread_id
    )

    # 解析评审助理的响应
    judge_texts = []
    for message in judge_messages.data:
        content = message.content[0]
        if hasattr(content, 'text') and hasattr(content.text, 'value'):
            judge_texts.append(content.text.value)


    print("json_data", json_data)
    time_end = time.time()           
    runtime = time_end - time_start    
    runtime = strftime("%H:%M:%S", gmtime(runtime)) 
    print('runtime', runtime)
    
    save_chat_history(main_thread_id, messages)
    save_chat_history(judge_thread_id, judge_messages)
    
    # 保存历史记录
    save_history_to_file({"texts": text_contents, "json_data": json_data, "chart_json": chart_json, "python_codes": python_codes, "tasks": tasks, "judge_texts": judge_texts}, cur_id=main_thread_id)
    
    return {"texts": text_contents, "json_data": json_data, "chart_json": chart_json, "python_codes": python_codes, "tasks": tasks, "judge_texts": judge_texts}
