<template>
    <div class="chat-title">
        <span class="pr-3">对话框</span>
        <select v-model="selectedUserType" class="user-type-select">
            <option disabled value="">选择用户类型</option>
            <option value="财务专家">财务专家</option>
            <option value="普通投资者">普通投资者</option>
        </select>
    </div>
    <div id="app" class="chat-container">
        <div class="chat-box">
            <div v-for="(message, index) in messages" :key="index"
                :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
                <p>{{ message.content }}</p>
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
import { ref, nextTick } from 'vue';
import axios from 'axios';
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();

const userInput = ref('');
const selectedUserType = ref('');
const messages = ref([]);

// const sendQuestion = async () => {
//     if (userInput.value.trim() && selectedUserType.value) {
//         const question = userInput.value;
//         const userType = selectedUserType.value;
//         const userMessage = { sender: 'user', content: question };
//         messages.value.push(userMessage);
//         userInput.value = '';

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/ask', { question, user_type: userType });
//             console.log('Response data:', response.data);

//             let insightText = 'No insightful response received.';

//             if (response.data.json_data) {
//                 if (response.data.json_data.insight) {
//                     insightText = response.data.json_data.insight;
//                 } else {
//                     insightText = JSON.stringify(response.data.json_data);
//                 }
//                 messages.value.push({ sender: 'bot', content: insightText });
//             } else if (response.data.texts) {
//                 messages.value.push({ sender: 'bot', content: response.data.texts });
//             } else {
//                 messages.value.push({ sender: 'bot', content: 'No insightful response received.' });
//             }

//             if (response.data.chart_json) {
//                 store.addChartJson(response.data.chart_json);
//                 console.log('Response chart_json:', response.data.chart_json);
//             }
//         } catch (error) {
//             console.error('Error sending the question:', error);
//             messages.value.push({ sender: 'bot', content: 'Error communicating with the server.' });
//         }
//     } else {
//         messages.value.push({ sender: 'bot', content: 'Please enter a question and select your user type.' });
//     }
//     scrollToBottom();
// }

const sendQuestion = async () => {
    if (userInput.value.trim() && selectedUserType.value) {
        const question = userInput.value;
        const userType = selectedUserType.value;
        const userMessage = { sender: 'user', content: question };
        messages.value.push(userMessage);
        userInput.value = '';

        try {
            const response = await axios.post('http://127.0.0.1:5000/ask', { question, user_type: userType });
            console.log('Response data:', response.data);

            let insightText = 'No insightful response received.';

            if (response.data.json_data && response.data.json_data.insight) {
                insightText = response.data.json_data.insight;
            } else if (response.data.texts) {
                insightText = response.data.texts;
            }

            messages.value.push({ sender: 'bot', content: insightText });

            if (response.data.chart_json) {
                store.addChartJson(response.data.chart_json);
                console.log('Response chart_json:', response.data.chart_json);
            }
        } catch (error) {
            console.error('Error sending the question:', error);

            if (messages.value.length === 0 || messages.value[messages.value.length - 1].sender === 'user') {
                messages.value.push({ sender: 'bot', content: 'Error communicating with the server.' });
            }

            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request data:', error.request);
            } else {
                // Something happened in setting up the request
                console.error('Error message:', error.message);
            }
        }
    } else {
        messages.value.push({ sender: 'bot', content: 'Please enter a question and select your user type.' });
    }
    scrollToBottom();
}



function scrollToBottom() {
    nextTick(() => {
        const wrapper = document.querySelector('.chat-box');
        if (wrapper) {
            wrapper.scrollTop = wrapper.scrollHeight;
        }
    });
}
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 53vh;
    justify-content: center;
    background-color: #f5f5f5;
    width: 350px;
    margin-left: 5px;
}

.chat-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
    width: 350px;
    margin-left: 5px;
}

.user-type-select {
    padding: 2px 4px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s;
    background-color: white;
}

.user-type-select:focus {
    border-color: #1a73e8;
}

.chat-box {
    width: 320px;
    height: 335px;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    scroll-behavior: smooth;
}

.input-area {
    display: flex;
    justify-content: space-between;
    width: 320px;
}

.input-box {
    flex-grow: 1;
    padding: 1px 20px;
    border: 2px solid #ccc;
    border-radius: 12px;
    width: 80%;
    outline: none;
    transition: border-color 0.3s;
}

.input-box:focus {
    border-color: #1a73e8;
}

.send-button {
    padding: 6px 10px;
    background-color: #1a73e8;
    color: white;
    border: none;
    border-radius: 12px;
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
    margin-bottom: 15px;
    align-self: flex-start;
    margin-left: 10px;
}
</style>
