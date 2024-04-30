<template>
  <div class="card">
    <div class="card-header">
      Data Visualization
    </div>
    <div class="vega-chart-wrapper">
      <div ref="vegaContainer" class="vega-chart-container"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect, toRaw } from 'vue';
import { useMainStore } from '@/stores/main';
import vegaEmbed from 'vega-embed';

const vegaContainer = ref(null);
const store = useMainStore();

onMounted(() => {
  watchEffect(async () => {
    // 将反应式代理转换为原始对象，以避免结构化克隆错误
    const chartData = toRaw(store.chartJson);

    if (chartData) {
      try {
        console.log('Attempting to render chart with JSON:', chartData);
        await vegaEmbed(vegaContainer.value, chartData, { actions: false });
        console.log('Chart rendered successfully.');
      } catch (error) {
        console.error('Error embedding chart:', error);
      }
    } else {
      console.log('store.chartJson is not set.');
    }
  });
});

onUnmounted(() => {
  // 当组件卸载时，清除任何已安装的图表
  if (vegaContainer.value) {
    vegaEmbed.dispose(vegaContainer.value);
  }
});
</script>


<style>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px;
  overflow: hidden;
}

.card-header {
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.vega-chart-container {
  width: 100%;
  height: 400px;
}

.vega-chart-wrapper {
  padding: 10px; /* 内边距 */
  background-color: #f9f9f9; /* 背景色 */
  border-radius: 4px; /* 边框圆角 */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

</style>