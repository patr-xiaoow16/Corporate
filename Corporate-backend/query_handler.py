# query_handler.py
from openai import OpenAI
from util import save_chat_history
from time import strftime, gmtime
from util import save_chat_history
import time
import json
import os
from dotenv import load_dotenv
load_dotenv()

my_openai_key = os.getenv("OPENAI_KEY")
print(my_openai_key)
client = OpenAI(api_key=my_openai_key)


# 创建一个assistant和一个thread
file_path = "uploaded_files/indicators.csv"  
file = client.files.create(file=open(file_path, "rb"), purpose='assistants')

assistant = client.beta.assistants.create(
    instructions="You are a personal data analyst. Answer questions about the data table.",
    model="gpt-3.5-turbo",
    tools=[{"type": "code_interpreter"}],
    file_ids=[file.id]
)
thread = client.beta.threads.create()


# # Initialize the OpenAI client
# client2 = OpenAI(api_key="")
# # Upload a file with an "assistants" purpose
# file = client2.files.create(
#     file=open(file_path, "rb"),
#     purpose='assistants'
# )

# # Create a new assistant
# assistant = client2.beta.assistants.create(
#     instructions="You are a personal data analyst. When asked a question about a data table, write and run code to answer the question. You do not need to render the vega-lite json. If you cannot parse the required Json output, you can give an empty structure that contains only keys."+ data_introduction,
#     model="gpt-3.5-turbo",
#     tools=[{"type": "code_interpreter"}],
#     file_ids=[file.id]
# )
# # Create a new conversation thread

# thread2 = client2.beta.threads.create()


# # Initialize the OpenAI client
# client3 = OpenAI(api_key="")
# # Upload a file with an "assistants" purpose
# file = client3.files.create(
#     file=open(file_path, "rb"),
#     purpose='assistants'
# )

# # Create a new assistant
# assistant = client3.beta.assistants.create(
#     instructions="You are a personal data analyst. When asked a question about a data table, write and run code to answer the question. You do not need to render the vega-lite json. If you cannot parse the required Json output, you can give an empty structure that contains only keys."+ data_introduction,
#     model="gpt-3.5-turbo",
#     tools=[{"type": "code_interpreter"}],
#     file_ids=[file.id]
# )
# # Create a new conversation thread

# thread3 = client3.beta.threads.create()

# threads = [thread,thread2,thread3]

def query(prompt, thread):
     
    time_start=time.time()
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=prompt
    )

    print("query in")
    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id,
        instructions="Please address the user as Yuheng. The user has a premium account."
    )
    print("=====")
    while run.status != "completed":
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id
        )

    messages = client.beta.threads.messages.list(
        thread_id=thread.id
    )
    text_contents = []
    json_data = None
    content =  messages.data[0].content[0]
    print("content",content)
    
    if hasattr(content, 'text') and hasattr(content.text, 'value'):
        text = content.text.value
        text_contents.append(text)
        if 'json' in text:
            print(text)
            start = text.find("```json\n") + len("```json\n")
            end = text.rfind("```")
            if start >= 0 and end > start:
                json_str = text[start:end].strip()
                json_str = json_str.replace("True", "true").replace("False", "false").replace("None", "null")
                try:
                    json_data = json.loads(json_str)
                except json.JSONDecodeError as e:
                    print("JSON parsing error:", e) 
        chart_json = None
        if '```python' in text:
            
            start = text.find("```python\n") + len("```python\n")
            end = text.rfind("```")
            if start >= 0 and end > start:
                text_str = text[start:end].strip()
                # 移除代码片段开头和结尾的 ```python 和 ```
                text_str = text_str.replace("```python", "").replace("```", "").strip()
                python_codes = text_str
        
        else:
            python_codes='' 

    print(json_data)
    time_end=time.time()           
    runtime=time_end-time_start    
    runtime=strftime("%H:%M:%S", gmtime(runtime)) 
    print('runtime',runtime)
    save_chat_history(thread, messages)
    return {"texts": text_contents[-1], "json_data": json_data, "chart_json":chart_json, "python_codes":python_codes}
