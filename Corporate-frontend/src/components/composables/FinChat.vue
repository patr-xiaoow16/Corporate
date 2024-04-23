<template>
    <div class="chat-title">
        Chat View
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
import { ref } from 'vue';
import axios from 'axios';
// import { useStore } from '@/stores/main';

// const store = useStore();

const userInput = ref('');
const messages = ref([]);

const sendQuestion = async () => {
    if (userInput.value.trim()) {
        const question = userInput.value;
        messages.value.push({ sender: 'user', content: question });
        userInput.value = '';  // Clear the input after sending
        try {
            const response = await axios.post('http://127.0.0.1:5000/ask', { question });
            if (response.data.texts) {
                messages.value.push({ sender: 'bot', content: response.data.texts });
            } else {
                messages.value.push({ sender: 'bot', content: 'No response received.' });
            }
        } catch (error) {
            console.error('Error sending the question:', error);
            messages.value.push({ sender: 'bot', content: 'Error communicating with the server.' });
        }
    }
}

// const sendQuestion = async () => {
//     if (userInput.value.trim()) {
//         const question = userInput.value;
//         store.addMessage({ sender: 'user', content: question });
//         userInput.value = '';

//         const currentQuestion = store.questions[store.currentQuestionIndex];
//         store.addMessage({ sender: 'bot', content: currentQuestion.response });
//         store.nextQuestion();
//     }
// }
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
</style>
