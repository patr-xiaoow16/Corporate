<!-- <template>
    <div class="card">
        <div id="timeline"></div>
    </div>
</template> -->
<template>
    <div class="card">

        <div id="timeline"></div>

        <!-- 显示详细信息的容器 -->
        <div v-if="selectedEvent" class="details">
            <h3>{{ selectedEvent.year }}详细信息：</h3>
            <div class="detail-items">
                <p><strong>资产负债率:</strong> {{ selectedEvent.data['资产负债率(%)'] }}%</p>
                <p><strong>每股收益:</strong> {{ selectedEvent.data['每股收益-基本(元/股)'] }}元</p>
            </div>
        </div>
        <div v-if="tooltipContent" class="tooltip"
            :style="{ top: tooltipPosition.y + 'px', left: tooltipPosition.x + 'px' }">
            {{ tooltipContent }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import 'd3-milestones/build/d3-milestones.css';
import milestones from 'd3-milestones';

const selectedEvent = ref(null);
const tooltipContent = ref('');
const tooltipPosition = ref({ x: 0, y: 0 });

// onMounted(() => {
//     const data = [
//         { year: 2022, title: '资产负债率: 67.97%, 每股收益: 2.42元' },
//         { year: 2021, title: '资产负债率: 61.01%, 每股收益: 1.08元' },
//         { year: 2020, title: '资产负债率: 61.2%, 每股收益: 1.34元' },
//         { year: 2019, title: '资产负债率: 61.63%, 每股收益: 0.61元' },
//         { year: 2018, title: '资产负债率: 57.85%, 每股收益: 0.56元' },
//         { year: 2017, title: '资产负债率: 56.78%, 每股收益: 0.71元' },
//         { year: 2016, title: '资产负债率: 48.84%, 每股收益: 0.41元' },
//         { year: 2015, title: '资产负债率: 58.19%, 每股收益: 0.65元' },
//         { year: 2014, title: '资产负债率: 51.5%, 每股收益: 0.43元' }
//     ];

//     // milestones('#timeline')
//     //     .mapping({
//     //         'timestamp': 'year',
//     //         'text': 'title'
//     //     })
//     //     .parseTime('%Y')
//     //     .aggregateBy('year')
//     //     .render(data);




//     const chart = milestones('#timeline')
//         .mapping({
//             'timestamp': 'year',
//             'text': 'title'
//         })
//         .parseTime('%Y')
//         .aggregateBy('year')
//         .labelFormat('%Y') // 将标签格式设置为年份
//         .autoResize(true) // 确保响应式布局的自动调整大小
//     // .orientation('horizontal') // 设置方向，“水平”或“垂直”
//     // .optimize(true) // 启用标签优化器

//     // Optional: 设置自定义URL目标、标签可见性和事件单击处理程序
//     // chart.urlTarget('_blank');
//     // chart.useLabels(true);
//     // chart.onEventClick(function(event) { ... });


//     // 设置事件监听器
//     chart.onEventClick(d => {
//         console.log('click', d);
//         // alert(`${d.text} | ${d.timestamp}\n${JSON.stringify(d.attributes)}`);
//         // 更新选中事件的状态
//         selectedEvent.value = {
//             year: d.year,
//             data: d.title
//         };
//     });

//     chart.onEventMouseOver(d => {
//         console.log('mouseover', d);
//     });

//     chart.onEventMouseLeave(d => {
//         console.log('mouseleave', d);
//     });

//     chart.render(data);
// });


const data = [
    { year: 2022, title: '资产负债率: 67.97%, 每股收益: 2.42元' },
    { year: 2021, title: '资产负债率: 61.01%, 每股收益: 1.08元' },
    { year: 2020, title: '资产负债率: 61.2%, 每股收益: 1.34元' },
    { year: 2019, title: '资产负债率: 61.63%, 每股收益: 0.61元' },
    { year: 2018, title: '资产负债率: 57.85%, 每股收益: 0.56元' },
    { year: 2017, title: '资产负债率: 56.78%, 每股收益: 0.71元' },
    { year: 2016, title: '资产负债率: 48.84%, 每股收益: 0.41元' },
    { year: 2015, title: '资产负债率: 58.19%, 每股收益: 0.65元' },
    { year: 2014, title: '资产负债率: 51.5%, 每股收益: 0.43元' }
];


// 初始化
const initMilestones = () => {
    const chart = milestones('#timeline')
        .mapping({
            'timestamp': 'year',
            'text': 'title'
        })
        .parseTime('%Y')
        .aggregateBy('year')
        .labelFormat('%Y')
        // .optimize(true)
        // .autoResize(true)
        // .orientation('horizontal')
        .onEventClick(d => {
            // 访问带有值的selectedEvent
            selectedEvent.value = {
                year: d.text,
                data: d.timestamp || {}
            };
        })
        .onEventMouseOver(d => {
            tooltipContent.value = `${d.text} | ${d.timestamp}`;
        })
        .onEventMouseLeave(() => {
            tooltipContent.value = '';
        })
        

    chart.render(data);
};

onMounted(() => {
    initMilestones();
});
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    border-radius: 5px;
    background: white;
    height: 280px; /* 设置固定高度为280px */
}

.details {
    margin-top: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    min-height: 10px; /* 设置一个最小高度 */
    max-height: 60px; /* 设置一个最大高度 */
    overflow-y: auto; /* 如果内容超过最大高度，显示垂直滚动条 */
}

.details h3 {
    font-size: 12px;  /* 调整标题字体大小 */
}

.detail-items {
    display: flex;
    /* justify-content: space-between; 两个元素间隔开来 */
    align-items: center; /* 垂直居中 */
    font-size: 12px;  /* 调整详细信息字体大小 */
}

.detail-items p {
    margin: 3px 0; /* 确保段落之间有适当间距 */
}

.tooltip {
    position: fixed;
    padding: 10px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    pointer-events: none;
    /* Ignore mouse events for the tooltip itself */
    opacity: 0.9;
    transition: opacity 0.3s;
}

.tooltip:before {
    content: "";
    position: absolute;
    bottom: 100%;
    /* Above the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    /* Arrow pointing up */
}
</style>