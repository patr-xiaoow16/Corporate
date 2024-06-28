// mainStore.js

import { defineStore } from 'pinia';
import { generateChartId } from './generateId';

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        chartsJson: [],
    }),
    actions: {
        addChartJson(json) {
            const chart = {
                id: generateChartId(),
                json,
            };
            chart.timestamp = new Date().toISOString(); // 添加时间戳
            this.chartsJson.push(chart);
            console.log('Chart JSON added to main store:', { id, json });
            console.log('Chart JSON added to main store:', chart); // 记录整个图表对象，包括id和json
        },
    },
});