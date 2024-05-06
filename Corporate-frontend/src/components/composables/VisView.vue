<template>
  <div class="card">
    <div class="card-header">
      Data Visualization
    </div>
    <div class="vega-chart-wrapper">
      <div v-for="chart in allCharts" :key="chart.id" :ref="setRef(chart.id)" class="vega-chart-container"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useMainStore } from '@/stores/main';
import { toRaw } from 'vue';
import vegaEmbed from 'vega-embed';
import { useChartsStore } from '@/stores/chartsStore';

// const store = useMainStore();

const mainStore = useMainStore();
const chartsStore = useChartsStore();
let vegaViews = ref({});
let chartRefs = ref({});

// 动态设置引用
// 使用 setRef 功能动态地为每个图表设置引用，然后使用这些引用来操作 DOM
function setRef(id) {
  return el => {
    if (el && !chartRefs.value[id]) {
      chartRefs.value[id] = el;
      console.log(`Ref set for ${id}`);
    }
  };
}

// 从两个 store 中合并图表数据
const allCharts = computed(() => {
  console.log("mainStore.chartsJson", mainStore.chartsJson);
  console.log("chartsStore.chartsJson", chartsStore.chartsJson);
  return [...mainStore.chartsJson, ...chartsStore.chartsJson]
});


onMounted(() => {
  allCharts.value.forEach(chart => {
    renderOrUpdateChart(chart);
  });
});


// 监视图表数据的变化，并相应地更新图表
watch(allCharts, (newCharts, oldCharts) => {
  console.log("------------allCharts------------", allCharts); // 查看当前所有图表的数据
  newCharts.forEach(chart => {
    // console.log("rendered",chart);
    if (!vegaViews.value[chart.id]) {
      renderOrUpdateChart(chart);
    }
  });
}, { deep: true });


// 渲染或更新图表
function renderOrUpdateChart(chart) {
  nextTick(() => {
    // 检查是否已经有为此图表id创建的容器
    if (!chartRefs.value[chart.id]) {
      const newContainer = document.createElement('div');
      newContainer.classList.add('vega-chart-container');
      document.querySelector('.vega-chart-wrapper').appendChild(newContainer);
      setRef(chart.id)(newContainer); // 设置引用并确保新容器被加入到 DOM 中
    }
    embedChart(chartRefs.value[chart.id], chart); // 使用正确的容器引用来嵌入图表
  });
}




// 实际嵌入 Vega 图表
function embedChart(container, chart) {
  const chartData = toRaw(chart.json);
  vegaEmbed(container, chartData, { actions: false })
    .then((result) => {
      if (!vegaViews.value[chart.id]) {
        vegaViews.value[chart.id] = result.view;
        console.log(`Chart ${chart.id} rendered successfully.`);
      }
    })
    .catch((error) => {
      console.error(`Error embedding chart ${chart.id}:`, error);
    });
}

// 首次加载时渲染所有图表
function renderAllCharts() {
  allCharts.value.forEach(chart => {
    renderOrUpdateChart(chart);
  });
}
</script>



<style>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 4px;
  overflow: hidden;
  height: inherit;
}

.card-header {
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.vega-chart-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  justify-content: flex-start; /* 将项目对齐到行的开头 */
  align-items: flex-start; /* 对齐每行中的项目 */
  overflow-y: auto; /* 添加垂直滚动条 */
  height: 330px; /* 设置最大高度 */
  width: 100%; 
}

.vega-chart-container {
  width: 33.3%; 
  height: 280px; 
  margin-bottom: 20px; 
  background-color: #fff; /* 添加白色背景 */
  border: 1px solid #eee; /* 更细且更浅的边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  border-radius: 4px; /* 添加圆角 */
  box-sizing: border-box; /* 包括边框和内边距在内的宽度和高度计算*/
}
</style>
