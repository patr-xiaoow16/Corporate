from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from util import save_chat_history, generate_unique_id,load_txt
import pandas as pd
import os
import json
import openai
from openai import OpenAI
from time import strftime
from time import gmtime
import time
# from query_handler import query, init_llm
# from analysiscn import generate_insight_by_llm_codes
import altair as alt
from decompose_task import decompose_task
from util import load_txt
from analysiscn_test import generate_insight_by_llm_codes, read_view_recommendation
from query_handler_test import query, init_llm
# from analysis_vega import generate_insight_by_llm

# from summarize import Summarizer

app = Flask(__name__)
CORS(app)

data_introduction = load_txt('./prompts/target_introduction_cn.txt')


@app.route('/ask', methods=['POST'])
def ask():
    try:
        msg = request.get_json()
        print(f"Request data: {msg}")
        if 'question' in msg:
            free_question = msg['question']
            user_type = msg['user_type']
            thread_id, assistant_id = init_llm()  # 确保LLM已初始化，线程已准备就绪
            print(f"Initialized LLM with thread_id: {thread_id}, assistant_id: {assistant_id}")
            # print("-----------------free_question---------------", free_question)
            # record = generate_insight_by_llm_codes(free_question, thread_id)
            record = generate_insight_by_llm_codes(free_question, user_type, thread_id)
            print("-----------------record---------------", record)
            # 提取图表数据
            chart_json = record["chart_json"]
            print("-----------------chart_json---------------", chart_json)
            
            # print("-----------------free_question record---------------", record)
            return jsonify(record)
        else:
            print("Error: No question provided")
            return jsonify({"error": "No question provided"}), 400
    except Exception as e:
        print("Error handling request:", e)
        return jsonify({"error": "Internal server error"}), 500
    


# @app.route('/task', methods=['POST'])
# def receive_task():
#     try:
#         data = request.get_json()
#         print("----------------data---------------", data)
#         if 'task' in data:
#             task = data['task']
#             thread_id, assistant_id = init_llm()  # 确保LLM已初始化，线程已准备就绪
#             print("-----------------Task Received---------------", task)
#             # 调用GPT
#             # record = generate_insight_by_llm_codes(task, thread_id, assistant_id)
#             # record = data
#             print("-----------------Task Processed---------------", record)
#             return jsonify({'record': record})
#         else:
#             return jsonify({"error": "No task provided"}), 400
#     except Exception as e:
#         print("Error handling task:", e)
#         return jsonify({"error": "Internal server error"}), 500
    
# @app.route('/decompose', methods=['POST'])
# def handle_decompose():
#     data = request.get_json()
#     print("----------------decompose data---------------", data)
#     if 'task' in data:
#         thread_id, assistant_id = init_llm()
#         decompose_record = decompose_task(data['task'], data.get('n', 3), thread_id, assistant_id, data_introduction)
#         print("--------------------decompose record-----------------", decompose_record)
#         print("--------------------tasks-----------------", decompose_record["tasks"])
#         return jsonify(decompose_record)
#     else:
#         return jsonify({"error": "Task not provided"}), 400
    
# @app.route('/execute_task', methods=['POST'])
# def execute_task():
#     data = request.get_json()
#     print("----------------execute data---------------", data)
#     if 'task' in data:
#         thread_id, assistant_id = init_llm()
#         execute_record = generate_insight_by_llm_codes(data['task'], thread_id, assistant_id , data_introduction)
#         print("--------------------execute record-----------------", execute_record)
#         return jsonify({'record': execute_record})
#     else:
#         return jsonify({"error": "Task not provided"}), 400
    

# # 实例化 Summarizer
# summarizer = Summarizer()   
# data_path = "uploaded_files/indicators.csv"
# @app.route('/summarize', methods=['POST'])
# def handle_summarize():
#     try:
#         # 直接从预设路径读取并生成摘要
#         # summary = summarizer.summarize(data_path)
#         print("-----------------summary----------------", summary)
#         return jsonify(summary)
#     except Exception as e:
#         return jsonify({"error": "Internal server error", "message": str(e)}), 500
    
# @app.route('/dataupload', methods=['POST'])
# def upload_file():
#     print('Uploading')
#     if 'file' not in request.files:
#         return 'No file part', 400
#     file = request.files['file']
#     if file.filename == '':
#         return 'No selected file', 400
#     if file:
#         file.save(os.path.join(upload_folder, file.filename))
#         return 'File successfully uploaded', 200


# upload_folder = './system/uploads'
# processed_data_file = './system/processed_data.json'
# os.makedirs(upload_folder, exist_ok=True)
# app.config['UPLOAD_FOLDER'] = upload_folder
# app.config['PROCESSED_DATA'] = processed_data_file


# @app.route('/', methods=['GET'])
# def hello():
#     return 'Hello World'

# @app.route('/dataupload', methods=['POST'])
# def upload_file():
#     print('Uploading')
#     if 'file' not in request.files:
#         return 'No file part', 400
#     file = request.files['file']
#     if file.filename == '':
#         return 'No selected file', 400
#     if file:
#         # 构造安全的文件路径
#         filename = secure_filename(file.filename)
#         filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         file.save(filepath)
#         print('File successfully uploaded')

#         # 读取数据集
#         try:
#             data = pd.read_csv(filepath)
#             data_json = data.to_json(orient='records')
#             with open(app.config['PROCESSED_DATA'], 'w') as file:
#                 file.write(data_json)
#             print("---------------------data------------------------",data)
#             return jsonify({"data": data_json}), 200
#         except Exception as e:
#             # 如果读取失败，返回错误信息
#             return jsonify({"error": str(e)}), 500

# @app.route('/getdata', methods=['GET'])
# def get_data():
#     print('Fetching table data')
#     try:
#         with open(app.config['PROCESSED_DATA'], 'r') as file:
#             data_json = json.load(file)  # 这里使用json模块读取数据
#             # print("---------------------data------------------------", data_json)  
#         return jsonify({"data": data_json}), 200  
#     except FileNotFoundError:
#         return jsonify({"error": "Processed data not found"}), 404

# # 接收来自deep-chat的数据
# @app.route('/chat', methods=['POST'])
# def chat_message():
#     # 解析请求体中的消息
#     data = request.json
#     user_message = data.get('message')

#     # 处理消息（这里仅为示例，实际处理逻辑可能更复杂）
#     reply = "你好，我收到了你的消息：" + user_message

#     # 返回回复消息
#     return jsonify({"message": reply})

if __name__ == '__main__':
    app.run(debug=True)

