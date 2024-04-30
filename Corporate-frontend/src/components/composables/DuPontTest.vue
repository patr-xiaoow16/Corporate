<template>
    <div ref="d3Chart"></div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import * as d3 from 'd3';

// 存储图表配置的响应对象
const config = reactive({
    container: {
        width: 180,
        height: 60,
        margin: { top: 20, right: 120, bottom: 20, left: 120 }
    },
    node: {
        width: 180,
        height: 60
    }
});

const nodesData = [
    {
        name: '净资产收益率',
        id: '1',
        parent: null
    },
    {
        name: '总资产净利率',
        id: '2',
        parent: '1'
    },
    {
        name: '权益乘数',
        id: '3',
        parent: '1'
    },
    // ... 更多节点
];

const d3Chart = ref(null);

// 绘制杜邦分析图的功能
const drawChart = () => {
    // 将原始数据转换为层级数据结构
    const hierarchyData = d3.stratify()
        .id(d => d.id)  // 设置每个节点的ID
        .parentId(d => d.parent)  // 设置每个节点的父节点ID
        (nodesData);

    // 设置树形布局的大小
    // const treeLayout = d3.tree()
    //     .size([config.container.height, config.container.width]);  // 交换宽高以实现自顶向下的布局
    const treeLayout = d3.tree()
        .size([config.container.height - 100, config.container.width - 100]) // 可以调整这些值看是否改善布局
        .nodeSize([config.node.width, config.node.height + 40]); // 控制节点间的垂直间距

    // 应用树形布局
    const root = treeLayout(hierarchyData);

    // 创建SVG画布
    const svg = d3.select(d3Chart.value).append('svg')
        .attr('width', 600)  // 画布宽度，根据需要调整
        .attr('height', 480)  // 画布高度，根据需要调整
        .append('g')
        .attr('transform', `translate(${config.container.margin.left + 180},${config.container.margin.top + 50})`);
    // const svg = d3.select(d3Chart.value).append('svg')
    //     .attr('width', config.container.width )
    //     .attr('height', config.container.height )
    //     .append('g')
    //     .attr('transform', `translate(${config.container.margin.left},${config.container.margin.top})`);


    // 为每个节点创建一个组，并设置位置
    const nodes = svg.selectAll('g.node')
        // .data(root.descendants(), d => d.id)
        .data(root.descendants())
        .enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.x},${d.y})`);  // 注意交换x和y坐标以适应自顶向下的布局
    // .attr('transform', d => `translate(${d.depth * config.node.width},${d.x})`); // 根据深度计算y坐标
    // .attr('transform', d => `translate(0,${d.x})`); // 设置节点的水平位置为0，即靠左对齐
    


    // 绘制节点矩形
    nodes.append('rect')
        .attr('width', config.node.width)
        .attr('height', config.node.height)
        .attr('x', -config.node.width / 2)
        .attr('y', -config.node.height / 2)
        .attr('fill', 'lightgray');  // 设置节点颜色

    // 在节点中添加文本
    nodes.append('text')
        .attr('dx', -config.node.width / 4)
        .attr('dy', 0)
        .attr('text-anchor', 'start')
        .text(d => d.data.name);  // 显示节点名称

    // nodes.append('text')
    //     .attr('dx', 10)  // 文字与矩形左边缘的距离
    //     .attr('dy', config.node.height / 4)  // 文本在矩形中心的垂直位置
    //     .attr('text-anchor', 'start')  // 文本靠左对齐
    //     .text(d => d.data.name);  // 显示节点名称

    // 为了绘制连接节点的路径，我们可以使用d3.linkVertical()，因为我们需要自顶向下的连接线
    // const links = svg.selectAll('path.link')
    //     .data(root.links(), d => d.target.id)
    //     .enter().append('path')
    //     .attr('class', 'link')
    //     .attr('d', d3.linkVertical()  // 使用垂直连接线
    //         .x(d => d.x)
    //         .y(d => d.y));
};


onMounted(drawChart);
</script>

<style>
.link {
    fill: none;
    stroke: #555;
    stroke-opacity: 0.4;
    stroke-width: 1.5px;
}

.node rect {
    stroke: #fff;
    stroke-width: 1.5px;
}

.node text {
    font: 12px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    fill: #555;
}
</style>