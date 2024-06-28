// // src/stores/chartsStore.js
// import { defineStore } from 'pinia';

// export const useChartsStore = defineStore('chartsStore', {
//   state: () => ({
//     chartsJson: []
//   }),
//   actions: {
//     setCharts(charts) {
//       this.chartsJson = charts;
//     }
//   }
// });

// chartStore.js
import { defineStore } from 'pinia';
import { generateChartId } from './generateId';

export const useChartsStore = defineStore('chartsStore', {
    state: () => ({
        chartsJson: []  //chartsJson数组，用于存储图表数据
    }),
    actions: {
        addChart(chart) {
            const chartWithId = {
                ...chart,
                id: chart.id || generateChartId() //生成一个新的id
            };
            chartWithId.timestamp = new Date().toISOString(); // 添加时间戳
            this.chartsJson.push(chartWithId); //将带有id的图表添加到chartsJson
        },
        setCharts(charts) {
            // 添加多个图表
            charts.forEach(chart => {
                this.addChart(chart);
            });
        }
    }
});


