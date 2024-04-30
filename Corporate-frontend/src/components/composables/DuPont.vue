<template>
    <div class="card">
        <div id="container" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import G6 from '@antv/g6';

// 自定义节点
G6.registerNode('root', {
    draw: (cfg, group) => {
        const size = [100, 30];
        const keyShape = group.addShape('rect', { //矩形键，矩形的宽高、位置、填充颜色、和边角半径
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
        group.addShape('text', { //百分比文本
            attrs: {
                text: `${cfg.ratio}%`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: 10 - size[0] / 2,
                y: 3,
            },
            draggable: true,
            name: 'ratio-shape'
        });
        group.addShape('text', { //标签文本，数据名
            attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 9,
                x: -6,
                y: 0,
            },
            draggable: true,
            name: 'label-shape'
        });
        group.addShape('line', { //分割线
            attrs: {
                x1: -6,
                x2: 35,
                y1: 2,
                y2: 2,
                stroke: 'rgba(255, 255, 255, 0.85)',
                lineWidth: 0.6
            },
            draggable: true,
            name: 'divider-shape'
        });
        group.addShape('text', { //副标签文本，收入的数据
            attrs: {
                text: `${cfg.subLabel}`,
                fill: 'rgba(255, 255, 255, 0.65)',
                fontSize: 6,
                x: -6,
                y: 10,
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
        const size = [60, 40];  // 调整大小以适应内容
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
                y: -6,
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
                y: 6,
                fontWeight: 800,
                textAlign: 'center'
            },
            draggable: true,
            name: 'sublabel-shape'
        });
        group.addShape('rect', {
            attrs: {
                x: -12,
                y: 8,
                width: 25,
                height: 8,
                radius: 4,
                fill: cfg.increase ? 'rgb(127, 193, 193)' : 'rgb(220, 124, 125)'
            },
            draggable: true,
            name: 'ratio-box',
        });
        group.addShape('text', {
            attrs: {
                text: `${cfg.ratio}%`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: 0,
                y: 9,
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: true,
            name: 'ratio-shape'
        });

        // 有条件地添加运算符形状
        if (cfg.operator) {
            group.addShape('rect', {
                attrs: {
                    x: -8,
                    y: 27,
                    width: 16,
                    height: 16,
                    lineWidth: 0.6,
                    stroke: '#aaa',
                    lineDash: [2, 1],
                    opacity: 0
                },
                name: 'operator-box'
            });z
            group.addShape('circle', {
                attrs: {
                    r: 6,
                    x: 140, //修改
                    y: 4, //修改
                    fill: 'rgba(240, 90, 109, 0.15)'
                },
                name: 'operator-circle'
            });
            group.addShape('text', {
                attrs: {
                    text: cfg.operator,
                    x: 0,
                    y: 34,
                    fontSize: 12,
                    fill: 'rgba(240, 90, 109, 0.85)',
                    textAlign: 'center',
                    textBaseline: 'middle'
                },
                name: 'operator-symbol'
            });
        }

        // group.addShape('line', {
        //     attrs: {
        //         x1: 0, // 位于节点的右侧中点
        //         y1: size[1] / 2, // 位于节点顶部中点
        //         x2: 0, // 向上延伸
        //         y2: size[1] / 2 + 6, // 位于节点顶部中点向上6个单位
        //         lineWidth: 0.6,
        //         stroke: 'rgb(19, 33, 92)',
        //     },
        //     name: 'edge-line'
        // });
        // group.addShape('circle', {
        //     attrs: {
        //         r: 1.2,
        //         x: 0, // 与线相同的 x 坐标
        //         y: size[1] / 2 + 6, // 与线的结束 y 坐标相同
        //         fill: 'rgb(19, 33, 92)',
        //     },
        //     name: 'edge-circle'
        // });


        return keyShape;
    },
    update: undefined,
}, 'rect');



// other node
G6.registerNode('othernode', {
    draw: (cfg, group) => {
        const size = [80, 30];
        const keyShape = group.addShape('rect', { //矩形键，包含宽度、高度、位置、填充颜色和圆角。
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
        group.addShape('text', { //主标签文本
            attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: 10 - size[0] / 2,
                y: -2,
                textAlign: 'left'
            },
            draggable: true,
            name: 'label-shape'
        });
        group.addShape('text', { //副标签文本
            attrs: {
                text: `${cfg.subLabel}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 8,
                fontWeight: 800,
                x: 10 - size[0] / 2,
                y: 8,
                textAlign: 'left'
            },
            draggable: true,
            name: 'sublabel-shape'
        });
        group.addShape('rect', { //状态框
            attrs: {
                x: 12,
                y: -4,
                width: 25,
                height: 8,
                radius: 4,
                fill: cfg.increase ? 'rgb(127, 193, 193)' : 'rgb(220, 124, 125)'
            },
            draggable: true,
            name: 'ratio-box'
        })
        group.addShape('text', { //百分比
            attrs: {
                text: `${cfg.ratio}%`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: 18,
                y: -3,
                textAlign: 'left',
                textBaseline: 'top'
            },
            draggable: true,
            name: 'ratio-shape'
        });
        if (cfg.operator) {
            group.addShape('rect', { //加减乘除，如果 cfg.operator 存在，则添加额外的图形元素（矩形、圆、文本），用来表示特定的操作符或标记。这包括一个半透明的圆和居中的文本，显示操作符。
                attrs: {
                    x: -8,
                    y: 27,
                    width: 16,
                    height: 16,
                    lineWidth: 0.6,
                    stroke: '#aaa',
                    lineDash: [2, 1],
                    opacity: 0
                },
                name: 'operator-box'
            });
            group.addShape('circle', { //圆
                attrs: {
                    r: 6,
                    x: 0,
                    y: 35,
                    fill: 'rgba(240, 90, 109, 0.15)'
                },
                name: 'operator-circle'
            });
            group.addShape('text', { //加减乘除符号
                attrs: {
                    text: cfg.operator,
                    x: 0,
                    y: 34,
                    fontSize: 12,
                    fill: 'rgba(240, 90, 109, 0.85)',
                    textAlign: 'center',
                    textBaseline: 'middle'
                },
                name: 'operator-symbol'
            });
        }

        // group.addShape('line', {
        //     attrs: {
        //         x1: 0,
        //         y1: size[1] / 2,
        //         x2: 0,
        //         y2: size[1] / 2 + 6,
        //         lineWidth: 0.6,
        //         stroke: 'rgb(19, 33, 92)',
        //     },
        //     name: 'edge-line'
        // });
        // group.addShape('circle', {
        //     attrs: {
        //         r: 1.2,
        //         x: 0,
        //         y: size[1] / 2 + 6,
        //         fill: 'rgb(19, 33, 92)',
        //     },
        //     name: 'edge-circle'
        // });

        return keyShape;
    },
    update: undefined
}, 'rect')

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

// const initGraph = () => {
//     const width = document.getElementById('container').scrollWidth;
//     const height = (document.getElementById('container').scrollHeight || 500) - 30;
//     const graph = new G6.TreeGraph({
//         container: 'container',
//         width,
//         height,
//         fitView: true,
//         layout: {
//             type: 'compactBox',
//             direction: 'LR', //左到右
//             getHGap: function getVGap() {
//                 return 5;
//             },
//         },
//         defaultEdge: {
//             type: 'round-poly',
//             sourceAnchor: 0,
//             targetAnchor: 1,
//             style: {
//                 radius: 8,
//                 stroke: 'rgb(19, 33, 92)',
//                 lineWidth: 0.6 // 设置默认边的粗细为0.6像素
//             }
//         },
//         defaultNode: {
//             anchorPoints: [
//                 [0.9, 0.5],
//                 [0, 0.5]
//             ]
//         },
//         nodeStateStyles: {
//             hover: {
//                 fill: '#fff',
//                 shadowBlur: 30,
//                 shadowColor: '#ddd',
//             },
//             operatorhover: {
//                 'operator-box': {
//                     opacity: 1
//                 }
//             }
//         },
//         modes: {
//             default: ['zoom-canvas', 'drag-canvas', 'collapse-expand']
//         }
//     });

//     graph.on('node:mouseenter', e => {
//         if (e.target.get('name')?.includes('operator')) {
//             graph.setItemState(e.item, 'operatorhover', true);
//         } else {
//             graph.setItemState(e.item, 'hover', true);
//         }
//     });
//     graph.on('node:mouseleave', e => {
//         graph.setItemState(e.item, 'operatorhover', false);
//         graph.setItemState(e.item, 'hover', false);
//     });

//     graph.data(data);
//     graph.render();
// };

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
            getHGap: function () {
                return 100; // 水平间距
            },
            getVGap: function () {
                return 30; // 垂直间距
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