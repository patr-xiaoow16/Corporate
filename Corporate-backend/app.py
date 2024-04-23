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
from query_handler import query, thread
# from analysis import generate_insight_by_llm_codes

app = Flask(__name__)
CORS(app)

    
@app.route('/ask', methods=['POST'])
def ask():
    try:
        msg = request.get_json()
        if 'question' in msg:
            free_question = msg['question']
            print("-----------------free_question---------------", free_question)
            record = query(free_question, thread)
            print("-----------------record---------------", record)
            return jsonify(record)
        else:
            return jsonify({"error": "No question provided"}), 400
    except Exception as e:
        print("Error handling request:", e)
        return jsonify({"error": "Internal server error"}), 500


    
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

