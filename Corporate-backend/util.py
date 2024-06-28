import os
import json

def load_txt(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_contents = file.read()
        return file_contents
  
def exec_codes(text):
    chart_json = None
    if 'python' in text:
        start = text.find("```python\n") + len("```python\n")
        end = text.rfind("```")
        if start >= 0 and end > start:
            text_str = text[start:end].strip()
        exec(text_str)
    return chart_json
  
def save_history_to_file(history, folder='./logs/history', cur_id=None):
    # Create the folder if it doesn't exist
    os.makedirs(folder, exist_ok=True)
    if cur_id:
        # If debug_id is provided, use it as the history ID and overwrite the existing file
        filename = os.path.join(folder, f'history_{cur_id}.json')
        with open(filename, 'w', encoding='utf-8') as file:
            json.dump(history, file, indent=4, ensure_ascii=False)
        return cur_id
    else:
        # Find the next available history ID
        history_ids = [int(filename.split('_')[1].split('.')[0]) for filename in os.listdir(folder) if filename.startswith('history_')]
        next_id = max(history_ids) + 1 if history_ids else 1
        
        # Generate the filename for the next history entry
        filename = os.path.join(folder, f'history_{next_id}.json')
        with open(filename, 'w', encoding='utf-8') as file:
            print(2222222, history)
            json.dump(history, file, indent=4, ensure_ascii=False)
        return next_id

def save_communication_to_file(history, folder='./logs/communication', cur_id=None):
    # Create the folder if it doesn't exist
    os.makedirs(folder, exist_ok=True)
    file_path = folder+'/history_'+str(cur_id)+'.json'

    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        # 读取现有数据
        with open(file_path, 'r') as file:
            try:
                data = json.load(file)
                if isinstance(data, list):  # 确保是一个列表
                    data.append(history)  # 在列表中追加数据
                else:
                    data = [history]  # 如果不是列表，重新开始一个列表
            except json.JSONDecodeError:
                data = [history]  # 如果读取错误，重新开始一个列表
        # 写回修改后的数据
        with open(file_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=4, ensure_ascii=False)
    else:
        # 文件不存在或为空，创建文件并写入一个包含单个数据的列表
        with open(file_path, 'w', encoding='utf-8') as file:
            json.dump([history], file, indent=4)  # 美化输出

def save_chat_history(thread, messages, chat_log_folder='./logs/chatlog'):
    # Create a folder for chat logs if it doesn't exist
    os.makedirs(chat_log_folder, exist_ok=True)
    
    # Find the next available chat history file number
    chat_history_files = [int(filename.split('_')[1].split('.')[0]) for filename in os.listdir(chat_log_folder) if filename.startswith('thread_')]
    next_file_number = max(chat_history_files) + 1 if chat_history_files else 1
    
    # Generate the filename for the next chat history file
    chat_history_file = os.path.join(chat_log_folder, f'thread_{next_file_number}.txt')
    
    with open(chat_history_file, 'w', encoding='utf-8') as file:
        for message in messages.data:
            file.write(str(message) + '\n')
            
# def generate_unique_id():
#     if not hasattr(generate_unique_id, "current_id"):
#         generate_unique_id.current_id = 0
#     generate_unique_id.current_id += 1
#     return generate_unique_id.current_id

def generate_unique_id(analysis_history):
    max_id = max((node.id for node in analysis_history.nodes), default=0)
    return max_id + 1