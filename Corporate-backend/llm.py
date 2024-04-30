# llm.py
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()
my_openai_key = os.getenv("OPENAI_KEY")
client = OpenAI(api_key=my_openai_key)

class LLM:
    def __init__(self):
        self.client = client
        self.assistant_id = None  # 存储助理ID
        self.file_id = None  # 存储文件ID

    def upload_file(self, file_path: str):
        # 上传文件并保存文件ID
        file = self.client.files.create(file=open(file_path, "rb"), purpose='assistants')
        self.file_id = file.id
        return self.file_id

    def create_assistant(self, instructions: str, model: str = "gpt-3.5-turbo"):
        # 根据上传的文件ID创建助理
        assistant = self.client.beta.assistants.create(
            instructions=instructions,
            model=model,
            tools=[{"type": "code_interpreter"}],
            file_ids=[self.file_id]
        )
        self.assistant_id = assistant.id
        return self.assistant_id

    def create_thread(self):
        # 创建交互线程
        thread = self.client.beta.threads.create()
        return thread.id


