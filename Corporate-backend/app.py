from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from util import save_chat_history, generate_unique_id,load_txt
import pandas as pd
import os
import csv
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
from analysiscn_test import generate_insight_by_llm_codes, read_field_knowledge
from query_handler_test import query, init_llm
# from query_handler_2llm import init_llms
# from analysiscn_test_2llm import generate_insight_by_llm_codes, self_refine_step, judge_information_step
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

@app.route('/getData', methods=['GET'])
def getData():
    csv_path = './uploaded_files/output.csv'
    data = []
    
    with open(csv_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            data.append(row)
    
    return jsonify(data)




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

