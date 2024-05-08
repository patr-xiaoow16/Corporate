// contentStore.js
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useContentStore = defineStore('contentStore', () => {
    const state = reactive({
        timelineDetails: {}
    });

    function setTimelineDetails(chartId, details) {
        state.timelineDetails[chartId] = details;
        console.log(`Timeline details for ${chartId} updated.`);
    }

    return { state, setTimelineDetails };
});
