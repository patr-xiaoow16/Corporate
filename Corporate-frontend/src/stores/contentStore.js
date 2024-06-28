// contentStore.js
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useContentStore = defineStore('contentStore', () => {
    const state = reactive({
        timelineDetails: {}
    });

    // 增加时间线内容
    function setTimelineDetails(chartId, details) {
        state.timelineDetails[chartId] = details;
        console.log(`Timeline details for ${chartId} updated.`);
    }

    // 删除时间线内容
    function removeTimelineDetail(chartId) {
        if (state.timelineDetails[chartId]) {
            delete state.timelineDetails[chartId];
            console.log(`Timeline detail for ${chartId} removed.`);
        }
    }

    return { state, setTimelineDetails, removeTimelineDetail };
});
