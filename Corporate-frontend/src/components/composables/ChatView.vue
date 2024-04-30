<template>
    <div class="chat-title">
        Chat View
    </div>
    <div id="app" class="chat-container">
        <div class="chat-box">
            <div v-for="(message, index) in messages" :key="index"
                :class="messageClass(message)">
                <p v-if="!message.isTask" @click="message.isTask ? selectExecutedTask(message.content) : null">
                  {{ message.content }}
                </p>
                <!-- <button v-else @click="selectDecomposedTask(message.content)" class="task-button">
                  {{ message.content }}
                </button> -->
                <button v-else @click="selectDecomposedTask(message.content)" class="task-button">
                  <div class="task-content">{{ message.content }}</div>
                  <div class="task-details">
                    <div class="task-description">{{ message.description }}</div>
                    <div class="task-score">Score: {{ message.score }}</div>
                  </div>
                </button>
            </div>
        </div>
        <div class="input-area">
            <input v-model="userInput" placeholder="Type your message..." @keyup.enter="sendQuestion"
                class="input-box" />
            <button @click="sendQuestion" class="send-button">Send</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userInput = ref('');
const messages = ref([]);
const currentTask = ref(null);  // 用于记录当前选择的任务
const decomposedTasks = ref([]);  // 用于存储分解后的任务
const taskDecomposed = ref(false); // 用于跟踪任务是否已经分解

const messageClass = (message) => {
  return {
    'user-message': message.sender === 'user',
    'bot-message': message.sender === 'bot',
    'task-message': message.isTask
  };
};

const sendQuestion = async () => {
    if (userInput.value.trim()) {
        const question = userInput.value;
        messages.value.push({ sender: 'user', content: question, isTask: false });
        userInput.value = ''; // 发送后清除输入
        // 假设检测到目标设定语句并提供任务
        if (question.includes("我的目标是")) {

            // 添加任务
            const taskMessages = [
              { sender: 'bot', content: "任务一：年度综合财务表现评估", isTask: true },
              { sender: 'bot', content: "任务二：流动性和偿债能力分析", isTask: true },
              { sender: 'bot', content: "任务三：同比和环比增长分析", isTask: true }
            ];
            messages.value.push(...taskMessages);
            return;

        }
        // try {
        //     const response = await axios.post('http://127.0.0.1:5000/ask', { question });
        //     if (response.data.texts) {
        //         messages.value.push({ sender: 'bot', content: response.data.texts, isTask: false });
        //     } else {
        //         messages.value.push({ sender: 'bot', content: 'No response received.', isTask: false });
        //     }
        // } catch (error) {
        //     console.error('Error sending the question:', error);
        //     messages.value.push({ sender: 'bot', content: 'Error communicating with the server.', isTask: false });
        // }
    }
};

// const selectDecomposedTask = async (task) => {
//     messages.value = messages.value.filter(m => !m.isTask);
//     messages.value.push({ sender: 'user', content: task, isTask: false });
//     console.log("--------------messages.value---------------",messages.value);
//     try {
//         const response = await axios.post('http://127.0.0.1:5000/decompose', { task });
//         // if (response.data.record && response.data.record.json_data) {
//         //     messages.value.push(...response.data.map(item => ({ sender: 'bot', content: item, isTask: true })));
//         // } else {
//         if (response.data.tasks) {
//             response.data.tasks.forEach(task => {
//                 messages.value.push({ sender: 'bot', content: task.task_name, description: task.description, score: task.score, isTask: true });
//             });
//         } else {
//             messages.value.push({ sender: 'bot', content: 'No response received.', isTask: false });
//         }
//     } catch (error) {
//         console.error('Error sending task:', error);
//         messages.value.push({ sender: 'bot', content: 'Error communicating with the server.', isTask: false });
//     }
// };

// const selectDecomposedTask = async (taskContent) => {
//     if (!currentTask.value) {
//         // 如果当前没有选择任务，说明是第一次选择，进行任务分解
//         currentTask.value = taskContent;
//         messages.value = messages.value.filter(m => !m.isTask);
//         messages.value.push({ sender: 'user', content: taskContent, isTask: false });
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/decompose', { task: taskContent });
//             if (response.data.tasks) {
//                 decomposedTasks.value = response.data.tasks;
//                 response.data.tasks.forEach(task => {
//                     messages.value.push({ sender: 'bot', content: task.task_name, description: task.description, score: task.score, isTask: true });
//                 });
//             } else {
//                 messages.value.push({ sender: 'bot', content: 'No response received.', isTask: false });
//             }
//         } catch (error) {
//             console.error('Error sending task:', error);
//             messages.value.push({ sender: 'bot', content: 'Error communicating with the server.', isTask: false });
//         }
//     } else {
//         // 如果已经选择了任务且进行了分解，说明是第二次选择，执行任务
//         selectExecutedTask(taskContent);
//     }
// };
const selectDecomposedTask = async (taskContent) => {
    if (!taskDecomposed.value) {
        // 如果当前没有选择任务，说明是第一次选择，进行任务分解
        currentTask.value = taskContent;
        messages.value = messages.value.filter(m => !m.isTask);
        messages.value.push({ sender: 'user', content: taskContent, isTask: false });
        try {
            const response = await axios.post('http://127.0.0.1:5000/decompose', { task: taskContent });
            if (response.data.tasks) {
                decomposedTasks.value = response.data.tasks;
                taskDecomposed.value = true;  // 设置任务已分解状态
                response.data.tasks.forEach(task => {
                    messages.value.push({ sender: 'bot', content: task.task_name, description: task.description, score: task.score, isTask: true });
                });
            } else {
                messages.value.push({ sender: 'bot', content: 'No response received.', isTask: false });
            }
        } catch (error) {
            console.error('Error sending task:', error);
            messages.value.push({ sender: 'bot', content: 'Error communicating with the server.', isTask: false });
        }
    } else {
        // 如果任务已经分解，执行任务
        selectExecutedTask(taskContent);
    }
};


const selectExecutedTask = async (taskContent) => {
    // 清空当前任务和消息列表，准备展示执行结果
    currentTask.value = null; // 重置当前任务
    // messages.value = [];
    messages.value.push({ sender: 'user', content: taskContent, isTask: false });
    try {
        const response = await axios.post('http://127.0.0.1:5000/execute_task', { task: taskContent });
        if (response.data.record && response.data.record.json_data) {
            messages.value.push({ sender: 'bot', content: response.data.record.json_data.insight.text, isTask: false });
        } else {
            messages.value.push({ sender: 'bot', content: 'No response received.', isTask: false });
        }
    } catch (error) {
        console.error('Error executing task:', error);
        messages.value.push({ sender: 'bot', content: 'Error communicating with the server.', isTask: false });
    }
};


</script>

<style>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 91vh;
    justify-content: center;
    background-color: #f5f5f5;
}

.chat-title {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    background-color: #f5f5f5;
}

.chat-box {
    width: 320px;
    height: 620px;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.input-area {
    display: flex;
    justify-content: space-between;
    width: 320px;
}

.input-box {
    flex-grow: 1;
    padding: 8px;
    border: 2px solid #ccc;
    border-radius: 20px;
    outline: none;
    transition: border-color 0.3s;
}

.input-box:focus {
    border-color: #1a73e8;
}

.send-button {
    padding: 8px 12px;
    background-color: #1a73e8;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s;
}

.send-button:hover {
    background-color: #0f5ac1;
}

.user-message p {
    background-color: #dcf8c6;
    color: #303030;
    border-radius: 18px 18px 0 18px;
    padding: 10px 15px;
    max-width: 95%;
    word-wrap: break-word;
    margin-bottom: 15px;
    align-self: flex-end;
    margin-right: 10px;
}

.bot-message p {
    background-color: #e5e5ea;
    color: #303030;
    border-radius: 18px 18px 18px 0;
    padding: 10px 15px;
    max-width: 95%;
    word-wrap: break-word;
    margin-bottom: 5px;
    align-self: flex-start;
    margin-left: 10px;
}

.task-button {
    width: 100%;
    padding: 10px;
    text-align: left;
    background-color: #f0f0f0;
    border: none;
    border-radius: 8px;
    margin: 5px 0;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.task-content {
    font-weight: bold;
}

.task-details {
    margin-top: 5px;
    font-size: 0.9em;
}

.task-description {
    color: #666;
}

.task-score {
    color: #333;
    font-weight: bold;
}

</style>
