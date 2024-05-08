<template>
  <div class="card">
    <div class="card-header">
      Data Visualization
    </div>
    <div class="vega-chart-wrapper">
      <div v-for="chart in allCharts" :key="chart.id" :ref="setRef(chart.id)" class="vega-chart-container">

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useMainStore } from '@/stores/main';
import { toRaw } from 'vue';
import vegaEmbed from 'vega-embed';
import { useChartsStore } from '@/stores/chartsStore';
import { useContentStore } from '@/stores/contentStore';

// const store = useMainStore();

const mainStore = useMainStore();
const chartsStore = useChartsStore();
const contentstore = useContentStore();
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
    scrollToBottom(); // 添加完毕后滚动到底部
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
        addDeleteButton(result.view.container(), chart.id); // 添加删除按钮
        addToggleButton(chartRefs.value[chart.id], chart.id); // 添加文段展示按钮
      }
    })
    .catch((error) => {
      console.error(`Error embedding chart ${chart.id}:`, error);
    });
}

// 添加删除按钮到容器
function addDeleteButton(container, chartId) {
  const button = document.createElement('button');
  button.className = 'delete-button';
  button.textContent = '删除';
  button.onclick = () => removeChart(chartId);  // 设置按钮的点击事件，以调用 removeChart 函数
  container.appendChild(button);
}

// 添加洞察按钮
function addToggleButton(container, chartId) {
  const button = document.createElement('button');
  button.className = 'toggle-text-button';
  button.textContent = '洞察';
  button.onclick = () => toggleText(chartId);
  container.appendChild(button);
  console.log(`Button for chart ${chartId} added.`); // 显示按钮添加信息

  // 找到对应图表的洞察数据
  const textDiv = document.createElement('div');
  textDiv.className = 'chart-text';
  textDiv.style.display = 'none'; // 初始化为不显示
  container.appendChild(textDiv);
  console.log(`Text div for chart ${chartId} prepared and hidden.`); // 显示文本区域准备完毕

  // 创建列表显示所有洞察
  const chart = allCharts.value.find(c => c.id === chartId);
  // console.log("--------------chart----------------", chart);
  if (chart && chart.json && chart.json.insights) {
    // console.log("--------------chart insight----------------", chart.json.insights);
    const ul = document.createElement('ul');
    console.log(`Found ${chart.json.insights.length} insights for chart ${chartId}.`); // 显示找到的洞察数量
    chart.json.insights.forEach(insight => {
      const li = document.createElement('li');
      li.textContent = `${insight.year}: ${insight.describe}`;
      ul.appendChild(li);
    });
    textDiv.appendChild(ul);
  } else {
    console.log(`No insights found for chart ${chartId}.`); // 如果没有找到洞察数据
  }
}

// 控制文本显示的函数
function toggleText(chartId) {
  const container = chartRefs.value[chartId];
  const textDiv = container.querySelector('.chart-text');
  if (textDiv.style.display === 'none') {
    textDiv.style.display = 'block';
    // 确保只添加一次按钮
    if (!textDiv.querySelector('.send-insights-button')) {
      addSendInsightsButton(textDiv, chartId);  // 将按钮添加到内容框中
    }
  } else {
    textDiv.style.display = 'none';
  }
}

// 删除图表
function removeChart(id) {
  if (vegaViews.value[id]) {
    vegaViews.value[id].finalize(); // 清理和销毁 Vega 视图
    delete vegaViews.value[id];
  }
  if (chartRefs.value[id]) {
    chartRefs.value[id].remove(); // 从 DOM 中删除元素
    delete chartRefs.value[id];
    scrollToBottom(); // 删除后滚动到底部
  }
  console.log(`Chart ${id} removed successfully.`);
}

// 添加发送洞察按钮到容器，修改为加入特定的内容框内部
function addSendInsightsButton(container, chartId) {
  const button = document.createElement('button');
  button.className = 'send-insights-button';
  button.textContent = '增添';
  button.onclick = () => sendInsightsToTimeline(chartId);  // 设置按钮的点击事件
  container.appendChild(button);
}

// 用于发送洞察到时间轴
function sendInsightsToTimeline(chartId) {
  const chart = allCharts.value.find(c => c.id === chartId);
  if (chart && chart.json && chart.json.insights) {
    const insightsTexts = chart.json.insights.map(insight => `${insight.year}: ${insight.describe}`).join('\n');
    // 发送事件或更新全局状态
    contentstore.setTimelineDetails(chartId, insightsTexts);
    console.log(`Insights for chart ${chartId} sent.`);
    console.log("-------------insighttext---------------", insightsTexts);
  }
}

// 首次加载时渲染所有图表
function renderAllCharts() {
  allCharts.value.forEach(chart => {
    renderOrUpdateChart(chart);
  });
}

// 滚动到容器底部
function scrollToBottom() {
  nextTick(() => {
    const wrapper = document.querySelector('.vega-chart-wrapper');
    if (wrapper) {
      wrapper.scrollTop = wrapper.scrollHeight;
    }
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
  justify-content: flex-start;
  /* 将项目对齐到行的开头 */
  align-items: flex-start;
  /* 对齐每行中的项目 */
  overflow-y: auto;
  /* 添加垂直滚动条 */
  height: 330px;
  /* 设置最大高度 */
  width: 100%;
}

.vega-chart-container {
  position: relative; /* 确保容器是相对定位 */
  width: 50%;
  height: 280px;
  margin-bottom: 20px;
  background-color: #fff;
  /* 添加白色背景 */
  border: 1px solid #eee;
  /* 更细且更浅的边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加阴影 */
  border-radius: 4px;
  /* 添加圆角 */
  box-sizing: border-box;
  /* 包括边框和内边距在内的宽度和高度计算*/
}

.delete-button {
  position: absolute;
  /* 绝对定位 */
  left: 1px;
  /* 从右侧10px */
  bottom: 1px;
  padding: 1px 2px;
  font-size: 11px;
  /* 调整字体大小 */
  background-color: #ff7875;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ffc3c2;
}

.toggle-text-button {
  position: absolute;
  right: 1px;
  bottom: 1px;
  padding: 1px 2px;
  font-size: 11px;
  background-color: #aecda0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-text-button:hover {
  background-color: #c7e37e;
}

.chart-text {
  padding: 10px;  /* 提供更多空间 */
  font-size: 12px; /* 提高可读性 */
  color: #333; /* 使用高对比度的颜色 */
  background: #f0f2f5; 
  border: 1px solid #ccc; /* 更精细的边框 */
  border-radius: 8px; /* 圆角 */
  margin: 5px;
  width: calc(100% - 20px); /* 适应父容器宽度 */
  box-sizing: border-box;
  height: auto;  /* 高度自适应内容 */
  display: none; /* 默认不显示，由 JavaScript 控制 */
  transition: all 0.3s ease-in-out; /* 添加平滑的过渡效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
  height: 140px;
}

.send-insights-button {
  position: absolute;  /* 使用绝对定位 */
  bottom: -30px;            /* 距离容器顶部5px */
  right: 20px;          /* 距离容器右侧5px */
  padding: 1px 2px;
  font-size: 11px;
  background-color: #99bdf1;  
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-insights-button:hover {
  background-color: #c6daf7; 
}

</style>
