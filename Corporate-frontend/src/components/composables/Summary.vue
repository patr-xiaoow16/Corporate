<template>
    <div class="summary-card">
      <h2 class="title">Data Summary</h2>
      <button @click="fetchSummary" class="send-button">
        <i class="fas fa-sync-alt"></i> Generate Summary
      </button>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="summaryResult" class="summary-result">
        <pre>{{ summaryResult }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const summaryResult = ref(null);
  const loading = ref(false);
  
  const fetchSummary = async () => {
    loading.value = true;
    summaryResult.value = null; // 清除之前的结果
    try {
      const response = await axios.post('http://127.0.0.1:5000/summarize');
      console.log("----------------response---------------", response);
      summaryResult.value = JSON.stringify(response.data, null, 2);
      console.log("----------------summaryResult.value---------------", summaryResult.value);
    } catch (error) {
      console.error('Error fetching summary:', error);
      summaryResult.value = 'Error communicating with the server.';
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style scoped>
  .summary-card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 100%;
      margin: 20px auto;
      text-align: center;
  }
  
  .title {
      color: #2c3e50;
      margin-bottom: 20px;
  }
  
  .input-box {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
  }
  
  .send-button {
      width: 60%;
      padding: 10px;
      color: white;
      background-color: #007BFF;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin: 0 auto; /* 将按钮水平居中 */
  }
  
  .send-button:hover {
      background-color: #0056b3;
  }
  
  .summary-result {
      margin-top: 20px;
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      text-align: left;
      overflow-y: auto; /* 如果内容超出，显示滚动条 */
  }
  
  .loading {
      font-size: 16px;
      color: #007BFF;
  }
  </style>
  