<template>
    <div class="card">
        <div class="prediction-header">
            Prediction
        </div>
        <!-- 图表容器 -->
        <section class="wrapper trend-wrapper">
            <!-- 工具提示 -->
            <div v-if="activeTooltipTitle" class="g2-tooltip">
                <div class="g2-tooltip-title">{{ activeTooltipTitle }}</div>
                <!-- 工具提示项目-激活/禁用 -->
                <div class="g2-tooltip-items">
                    <div v-for="(item, idx) in tooltipItems" :key="idx" class="g2-tooltip-item"
                        :class="{ inactive: activeSeriesList.includes(item.series) }"
                        @click="changeActiveSeries(item.series)">
                        <div class="g2-tooltip-item-marker" :style="{ background: colors10[idx] }"></div>
                        <div class="g2-tooltip-item-label">{{ item.series }}</div>
                        <div class="g2-tooltip-item-value">{{ item.value || '-' }}</div>
                    </div>
                </div>
            </div>
            <div ref="chartNodeRef" class="chart-wrapper"></div>
        </section>

        <!-- 分析和建议部分 -->
        

    </div>
</template>

<script setup>
import { Line } from '@antv/g2plot';
import { onMounted, ref, reactive } from 'vue';
import * as _ from '@antv/util';

const chartNodeRef = ref(null);
const chartRef = ref(null);
const state = reactive({
    tooltipItems: [],
    activeTooltipTitle: null,
    activeSeriesList: [],
    colors10: [] // 假设这稍后会初始化
});

onMounted(async () => {
    // const res = await fetch('https://gw.alipayobjects.com/os/antfincdn/3PtP0m%26VuK/trend-data.json');
    const res = await fetch('/formatted_dupont_data.json');
    const data = await res.json();

    // // 假设新的数据格式
    // const newData = [
    //     { Date: '2021-01-01', series: 'Series 1', value: 100 },
    //     { Date: '2021-01-02', series: 'Series 1', value: 110 },
    //     // 更多数据...
    // ];

    const chartDom = chartNodeRef.value;
    const line = new Line(chartDom, {
        data,
        // data: newData,
        autoFit: true,
        xField: 'Date',
        yField: 'value',
        seriesField: 'series',
        // 原始组件中的其他图表选项
    });

    line.render();
    chartRef.value = line;
    // 初始工具提示显示逻辑和事件绑定
});

const changeActiveSeries = (activeSeries) => {
    let newList = state.activeSeriesList.includes(activeSeries)
        ? state.activeSeriesList.filter(s => s !== activeSeries)
        : [...state.activeSeriesList, activeSeries];

    state.activeSeriesList = newList;

    if (chartRef.value) {
        chartRef.value.filter('series', (series) => newList.includes(series) ? false : true);
        chartRef.value.render(true);
        // 状态管理和重新渲染承担更多逻辑
    }
};
</script>

<style scoped>
.card {
    border: 2px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    height: 280px;
}

.prediction-header {
    margin-bottom: 10px;
    padding: 2px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #eee;
}

.trend-wrapper .g2-tooltip {
    position: absolute;
    z-index: 8;
    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    background-color: transparent;
    color: rgb(89, 89, 89);
    padding: 0px 12px;
    margin: 0px;
    overflow-x: auto;
    width: 100%;
    left: 0px;
    top: 0px;
    pointer-events: auto;
}

.trend-wrapper .g2-tooltip-title {
    margin: 10px 0;
    font-weight: 700;
    height: 12px;
    line-height: 12px;
}

.trend-wrapper .g2-tooltip-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
    width: 100%;
}

.trend-wrapper .g2-tooltip-item {
    opacity: 1;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 92px;
    min-width: 92px;
    padding-left: 12px;
    justify-content: space-between;
}

.trend-wrapper .g2-tooltip-item.inactive {
    opacity: 0.25;
}

.trend-wrapper .g2-tooltip-item-marker {
    width: 3px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    height: 48px;
    left: 0px;
}

.trend-wrapper .g2-tooltip-item-label {
    font-size: 14px;
    line-height: 14px;
    margin: 2px 0px 12px;
}

.trend-wrapper .g2-tooltip-item-value {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.65);
    margin: 0px 0px 4px;
}

#container {
    width: 100%;
    height: 100%;
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.wrapper .chart-wrapper {
    position: absolute !important;
    top: 4px;
    bottom: 0px;
    right: 10px;
    left: 10px;
    height: calc(100% - 88px);
}

</style>