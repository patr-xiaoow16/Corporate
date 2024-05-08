<template>
    <div class="card">
        <div class="dupont-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>DuPont analysis</div>

            <a-space style="margin-top: -10px;"> <!-- 调整这里的 margin-top 值以向上移动 -->
                <a-select v-model:value="selectedYear" :style="{ width: '120px' }" @change="handleChange"
                    :options="options" />
            </a-space>
        </div>
        <div id="container" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { computed } from 'vue';
import G6 from '@antv/g6';
import { useChartsStore } from '@/stores/chartsStore';
import { getNodeConfig } from './chartConfigs';
// import { data } from './chartData'; // 杜邦分析数据
import { useSummaryStore } from '@/stores/summaryStore';  // summaryStore
import { storeToRefs } from 'pinia';
import { Select as ASelect, Space as ASpace } from 'ant-design-vue';


const store = useChartsStore();
const summarystore = useSummaryStore();
const { chartData, selectedYear } = storeToRefs(summarystore); // 用storeToRefs

// 使用 computed 来保持响应性
const graphData = computed(() => {
    return chartData.value[selectedYear.value];
});

let graph = null;

const options = [
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' }
];

const handleChange = (value) => {
    console.log(`selected ${value}`);
    selectedYear.value = value;  // 更新 selectedYear 为选中的年份
    loadGraphData();  // 重新加载和渲染图表
};

const loadGraphData = () => {
    if (!document.getElementById('container')) {
        console.warn("Container not ready");
        return;
    }

    const data = graphData.value;

    // 遍历树状数据，添加节点类型和层级信息
    G6.Util.traverseTree(graphData.value, subtree => {
        if (subtree.level === undefined) {
            subtree.level = 0;
        }
        subtree.children?.forEach(child => {
            child.level = subtree.level + 1;
        });
        switch (subtree.level) {
            case 0:
                subtree.type = 'root';
                break;
            case 1:
                subtree.type = 'level1node';
                break;
            default:
                subtree.type = 'othernode';
        }
    });

    if (!graph) {
        // 如果图表实例不存在，则初始化它
        initGraph(data);
    } else {
        // 如果图表实例已存在，直接加载数据
        graph.changeData(data);
    }
};


G6.registerNode('root', {
    draw: (cfg, group) => {
        // 动态计算宽度，以确保宽度适合内容
        const width = Math.max(80, cfg.label.length * 8 + cfg.subLabel.length * 5);
        const size = [width, 30];  // 调整节点的高度为30，根据需要可更改
        const keyShape = group.addShape('rect', {
            attrs: {
                width: size[0],
                height: size[1],
                x: -size[0] / 2,
                y: -size[1] / 2,
                fill: 'rgb(19, 33, 92)',
                radius: 2
            },
            draggable: true,
            name: 'root-keyshape'
        });
        // 标签文本调整到靠近中心位置
        group.addShape('text', {
            attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 9,
                x: -size[0] / 2 + 10,  // 调整x位置，使其距离左边框10像素
                y: 0,  // 调整y位置，使其在节点的上半部分
            },
            draggable: true,
            name: 'label-shape'
        });
        // 分割线位置和长度调整
        group.addShape('line', {
            attrs: {
                x1: -size[0] / 2 + 10,  // 与文本标签对齐
                x2: -size[0] / 2 + size[0] - 10,  // 使其延伸至右侧边框减去10像素
                y1: 2,  // 水平放置在节点中心
                y2: 2,  // 同上
                stroke: 'rgba(255, 255, 255, 0.85)',
                lineWidth: 0.6
            },
            draggable: true,
            name: 'divider-shape'
        });
        // 副标签文本调整位置，放置在节点下半部分
        group.addShape('text', {
            attrs: {
                text: `${cfg.subLabel}`,
                fill: 'rgba(255, 255, 255, 0.65)',
                fontSize: 6,
                x: -size[0] / 2 + 10,  // 与主标签文本对齐
                y: 10,  // 放在分割线下方
            },
            draggable: true,
            name: 'sublabel-shape'
        });
        return keyShape;
    }
});


// level1 node
G6.registerNode('level1node', {
    draw: (cfg, group) => {
        const width = Math.max(60, cfg.label.length * 6 + cfg.subLabel.length * 4); // 动态宽度
        const size = [width, 28];
        // const size = [60, 40];  // 调整大小以适应内容
        const offsetY = 10; // 将方框下移10个单位
        const lineOffset = size[1] / 2 + 10; // 线和圆圈向上移动的距离

        const keyShape = group.addShape('rect', {
            attrs: {
                width: size[0],
                height: size[1],
                x: -size[0] / 2,
                y: -size[1] / 2,
                fill: 'rgb(213, 225, 247)',
                radius: 2
            },
            draggable: true,
            name: 'level1node-keyshape'
        });
        group.addShape('text', {
            attrs: {
                text: cfg.label,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: 0,
                y: -2,
                textAlign: 'center'
            },
            draggable: true,
            name: 'label-shape'
        });
        group.addShape('text', {
            attrs: {
                text: cfg.subLabel,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 8,
                x: 0,
                y: 10,
                fontWeight: 800,
                textAlign: 'center'
            },
            draggable: true,
            name: 'sublabel-shape'
        });
        return keyShape;
    },
    update: undefined,
}, 'rect');


G6.registerNode('othernode', {
    draw: (cfg, group) => {
        const size = [65, 30]; // 节点尺寸
        const keyShape = group.addShape('rect', {
            attrs: {
                width: size[0],
                height: size[1],
                x: -size[0] / 2,
                y: -size[1] / 2,
                fill: 'rgb(213, 225, 247)',
                radius: 2
            },
            draggable: true,
            name: 'level1node-keyshape'
        });

        // 主标签文本，水平居中
        group.addShape('text', {
            attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: 0,  // 从节点中心开始绘制文本
                y: -2,  // 调整y位置，使其在上半部分
                textAlign: 'center'  // 文本居中对齐
            },
            draggable: true,
            name: 'label-shape'
        });

        // 副标签文本，水平居中
        group.addShape('text', {
            attrs: {
                text: `${cfg.subLabel}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 8,
                fontWeight: 800,
                x: 0,  // 从节点中心开始绘制文本
                y: 10,  // 调整y位置，使其在下半部分
                textAlign: 'center'  // 文本居中对齐
            },
            draggable: true,
            name: 'sublabel-shape'
        });

        return keyShape;
    },
    update: undefined
}, 'rect');


// edge
G6.registerEdge('round-poly', {
    getControlPoints: (cfg) => {
        const { startPoint, endPoint } = cfg;
        return [
            startPoint,
            {
                x: startPoint.x,
                y: endPoint.y
            },
            endPoint
        ];
    }
}, 'polyline')



const initGraph = (data) => {
    const width = document.getElementById('container').scrollWidth;
    const height = (document.getElementById('container').scrollHeight || 500) - 20;
    graph = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        fitView: true,
        layout: {
            type: 'compactBox',
            direction: 'TB', // 修改方向为从上到下
            getHGap: function (d) {
                return 2 + d.level * 2; // 水平间距，基于层级增加
                // return 2 + (d.children ? d.children.length * 10 : 0);
                // return 8; 
            },
            getVGap: function (d) {
                return 5 + d.level * 2; // 垂直间距，基于层级减少
            },
        },
        defaultEdge: {
            type: 'round-poly',
            style: {
                radius: 8,
                stroke: 'rgb(19, 33, 92)',
                lineWidth: 0.6 // 默认边的粗细
            },
            startArrow: false,
            endArrow: true,
            shape: 'smooth' // 使连线为平滑曲线
        },
        defaultNode: {
            anchorPoints: [
                [0.5, 0], // 上中点
                [0.5, 1] // 下中点
            ]
        },
        nodeStateStyles: {
            hover: {
                fill: '#fff',
                shadowBlur: 30,
                shadowColor: '#ddd',
            },
            operatorhover: {
                'operator-box': {
                    opacity: 1
                }
            },
            clicked: {
                fill: 'rgb(255, 235, 168)', // 当节点被点击时，填充黄色
            }
        },
        modes: {
            default: ['zoom-canvas', 'drag-canvas', 'collapse-expand', 'dblclick']
        }
    });

    graph.on('node:mouseenter', e => {
        if (e.target.get('name')?.includes('operator')) {
            graph.setItemState(e.item, 'operatorhover', true);
        } else {
            graph.setItemState(e.item, 'hover', true);
        }
    });
    graph.on('node:mouseleave', e => {
        graph.setItemState(e.item, 'operatorhover', false);
        graph.setItemState(e.item, 'hover', false);
    });


    graph.on('node:dblclick', e => {
        const node = e.item;
        const model = node.getModel();

        console.log("dblclick");
        const nodeData = e.item.getModel();
        const chartConfig = getNodeConfig(nodeData.label);
        const chartsStore = useChartsStore();

        // 将图表配置设置到状态管理中
        chartsStore.setCharts([{
            json: chartConfig
        }]);


        // 切换节点的 'clicked' 状态的颜色
        const clicked = node.hasState('clicked');
        node.setState('clicked', !clicked); // 切换状态
        console.log("Node current state clicked:", node.hasState('clicked'));

    });


    graph.data(graphData.value);
    graph.render();


};


watch(selectedYear, (newYear) => {
    loadGraphData();
}, { immediate: true });



onMounted(() => {
    // initGraph();
    loadGraphData();  // 加载和渲染图表数据
});
</script>

<style>
.card {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

.dupont-header {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #eee;
}
</style>