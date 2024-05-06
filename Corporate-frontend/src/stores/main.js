// // src/stores/main.js
// import { defineStore } from 'pinia';

// export const useMainStore = defineStore('main', {
//     state: () => ({
//         chartsJson: [],
//     }),
//     actions: {
//         addChartJson(json) {
//             const id = `chart-container-${this.chartsJson.length + 1}`;
//             this.chartsJson.push({ id, json });
//             console.log('Chart JSON added to store:', { id, json });  // 打印添加的数据
//         },
//     },
// });

// export const useMainStore = defineStore('main', {
//     state: () => ({
//         chartJson: null,
//     }),
//     actions: {
//         setChartJson(data) {
//             console.log('----------Setting chartJson:---------', data); 
//             this.chartJson = data;
//         },
//     },
// });

// export const useMainStore = defineStore('main', {
//     state: () => ({
//         chartsJson: [],
//     }),
//     actions: {
//         addChartJson(json) {
//             this.chartsJson.push(json);
//             console.log('Chart JSON added to store:', json);
//         },
//     },
// });

import { defineStore } from 'pinia';
import { generateChartId } from './generateId';

export const useMainStore = defineStore('main', {
    state: () => ({
        chartsJson: [],
    }),
    actions: {
        addChartJson(json) {
            const id = generateChartId();
            this.chartsJson.push({ id, json });
            console.log('Chart JSON added to main store:', { id, json });
        },
    },
});