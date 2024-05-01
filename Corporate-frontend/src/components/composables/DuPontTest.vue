<template>
    <div class="card">
        <div id="container" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import G6 from '@antv/g6';

// 自定义节点
// G6.registerNode('root', {
//     draw: (cfg, group) => {
//         const width = Math.max(50, cfg.label.length * 10 + cfg.subLabel.length * 6); // 根据文本长度动态计算宽度
//         const size = [width, 30]; // 调整高度以适应内容
//         // const size = [100, 30];
//         const keyShape = group.addShape('rect', { //矩形键，矩形的宽高、位置、填充颜色、和边角半径
//             attrs: {
//                 width: size[0],
//                 height: size[1],
//                 x: -size[0] / 2,
//                 y: -size[1] / 2,
//                 fill: 'rgb(19, 33, 92)',
//                 radius: 2
//             },
//             draggable: true,
//             name: 'root-keyshape'
//         });
//         group.addShape('text', { //标签文本，数据名
//             attrs: {
//                 text: `${cfg.label}`,
//                 fill: 'rgba(255, 255, 255, 0.85)',
//                 fontSize: 9,
//                 x: -6,
//                 y: 0,
//             },
//             draggable: true,
//             name: 'label-shape'
//         });
//         group.addShape('line', { //分割线
//             attrs: {
//                 x1: -6,
//                 x2: 35,
//                 y1: 2,
//                 y2: 2,
//                 stroke: 'rgba(255, 255, 255, 0.85)',
//                 lineWidth: 0.6
//             },
//             draggable: true,
//             name: 'divider-shape'
//         });
//         group.addShape('text', { //副标签文本，收入的数据
//             attrs: {
//                 text: `${cfg.subLabel}`,
//                 fill: 'rgba(255, 255, 255, 0.65)',
//                 fontSize: 6,
//                 x: -6,
//                 y: 10,
//             },
//             draggable: true,
//             name: 'sublabel-shape'
//         });
//         return keyShape;
//     }
// });
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

// other node
// G6.registerNode('othernode', {
//     draw: (cfg, group) => {
//         const size = [60, 30];
//         const keyShape = group.addShape('rect', { //矩形键，包含宽度、高度、位置、填充颜色和圆角。
//             attrs: {
//                 width: size[0],
//                 height: size[1],
//                 x: -size[0] / 2,
//                 y: -size[1] / 2,
//                 fill: 'rgb(213, 225, 247)',
//                 radius: 2
//             },
//             draggable: true,
//             name: 'level1node-keyshape'
//         });
//         group.addShape('text', { //主标签文本
//             attrs: {
//                 text: `${cfg.label}`,
//                 fill: 'rgba(19, 33, 92, 0.65)',
//                 fontSize: 6,
//                 x: 19 - size[0] / 2,
//                 y: -2,
//                 textAlign: 'left'
//             },
//             draggable: true,
//             name: 'label-shape'
//         });
//         group.addShape('text', { //副标签文本
//             attrs: {
//                 text: `${cfg.subLabel}`,
//                 fill: 'rgba(19, 33, 92, 0.65)',
//                 fontSize: 8,
//                 fontWeight: 800,
//                 x: 10 - size[0] / 2,
//                 y: 8,
//                 textAlign: 'left'
//             },
//             draggable: true,
//             name: 'sublabel-shape'
//         });
//         return keyShape;
//     },
//     update: undefined
// }, 'rect')
G6.registerNode('othernode', {
    draw: (cfg, group) => {
        const size = [50, 30]; // 节点尺寸
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

// 图表数据
const data = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '3,283.456',
    ratio: 3,
    children: [{
        id: 'child-a',
        label: '资产净利率',
        subLabel: '9%',
        ratio: 1,
        increase: true,
        operator: 'x',
        children: [{
            id: 'child-a-a',
            label: '销售净利率',
            subLabel: '2,385,124',
            ratio: 17,
            increase: true,
            operator: '-',
            children: [{
                id: 'child-a-a-a',
                label: '销售净利率',
                subLabel: '2,385,124',
                ratio: 17,
                increase: true,
                children: [{
                    id: 'child-a-a-a-a',
                    label: '净利润',
                    subLabel: '123',
                    ratio: 12,
                    increase: true,
                    children: [{
                        id: 'child-a-a-a-a-a',
                        label: '营业收入2',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-a-a-a-b',
                        label: '全部成本',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true,
                        children: [{
                            id: 'child-a-a-a-a-b-a',
                            label: '营业成本',
                            subLabel: '2,385,124',
                            ratio: 17,
                            increase: true
                        }, {
                            id: 'child-a-a-a-a-b-b',
                            label: '销售费用',
                            subLabel: '2,385,124',
                            ratio: 17,
                            increase: true
                        }, {
                            id: 'child-a-a-a-a-b-c',
                            label: '管理费用',
                            subLabel: '2,385,124',
                            ratio: 17,
                            increase: true
                        }, {
                            id: 'child-a-a-a-a-b-d',
                            label: '财务费用',
                            subLabel: '2,385,124',
                            ratio: 17,
                            increase: true
                        }]
                    }, {
                        id: 'child-a-a-a-a-c',
                        label: '其他利润',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-a-a-a-d',
                        label: '所得税费用',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }]
                }, {
                    id: 'child-a-a-a-b',
                    label: '营业收入',
                    subLabel: '123',
                    ratio: 12,
                    increase: true,
                }]
            }, {
                id: 'child-a-a-b',
                label: '销售收入',
                subLabel: '2,385,124',
                ratio: 17,
                increase: true,
            }]
        }, {
            id: 'child-a-b',
            label: '产周转率',
            subLabel: '595,557',
            ratio: 12,
            increase: true,
            children: [{
                id: 'child-a-b-a',
                label: '营业收入1',
                subLabel: '123',
                ratio: 17,
                increase: true,
            }, {
                id: 'child-a-b-b',
                label: '总资产',
                subLabel: '123',
                ratio: 17,
                increase: true,
                children: [{
                    id: 'child-a-b-b-a',
                    label: '长期投资',
                    subLabel: '123',
                    ratio: 17,
                    increase: true,
                }, {
                    id: 'child-a-b-b-b',
                    label: '流动资产',
                    subLabel: '123',
                    ratio: 17,
                    increase: true,
                    children: [{
                        id: 'child-a-b-b-b-a',
                        label: '货币基金',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-b-b-b-b',
                        label: '应收账款',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-b-b-b-c',
                        label: '预付账款',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-b-b-b-d',
                        label: '存货',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }, {
                        id: 'child-a-b-b-b-e',
                        label: '其他流动资产',
                        subLabel: '2,385,124',
                        ratio: 17,
                        increase: true
                    }]
                }]
            }]
        }
        ]
    }, {
        id: 'child-b',
        label: '权益乘数',
        subLabel: '1,789,567',
        ratio: 23,
        increase: true,
    }
    ]
};

// 遍历树状数据，添加节点类型和层级信息
G6.Util.traverseTree(data, subtree => {
    if (subtree.level === undefined) subtree.level = 0;
    subtree.children?.forEach(child => child.level = subtree.level + 1);
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

const initGraph = () => {
    const width = document.getElementById('container').scrollWidth;
    const height = (document.getElementById('container').scrollHeight || 500) - 30;
    const graph = new G6.TreeGraph({
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
            }
        },
        modes: {
            default: ['zoom-canvas', 'drag-canvas', 'collapse-expand']
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

    graph.data(data);
    graph.render();
};

onMounted(() => {
    initGraph();
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
</style>