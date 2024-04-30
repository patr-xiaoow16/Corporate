import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        chartJson: null,
    }),
    actions: {
        setChartJson(data) {
            console.log('----------Setting chartJson:---------', data); 
            this.chartJson = data;
        },
    },
});
