<template>
  <div class="card-header">
    <p>上传数据</p>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in csvData" :key="index">
          <td v-for="header in headers" :key="header">{{ row[header] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();
const { csvData } = storeToRefs(store);

const headers = computed(() => {
  if (csvData.value.length > 0) {
    return Object.keys(csvData.value[0]);
  }
  return [];
});
</script>

<style scoped>
.card-header {
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
}
</style>