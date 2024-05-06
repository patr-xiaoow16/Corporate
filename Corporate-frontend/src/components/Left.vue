<template>
  <div class="inline-block flex flex-col w-1/4 h-fit min-h-screen p-2 bg-slate-200">
    <!-- <TableLens></TableLens> -->
    <!-- <HeatMap></HeatMap> -->
    <!-- <Summary></Summary> -->
    <!-- <DuPontClick></DuPontClick> -->
    <!-- <Timeline></Timeline> -->
    <TimelineCard></TimelineCard>
    <PredictionCard></PredictionCard>
  </div>
</template>

<script setup>
// import TableLens from "./composables/TableLens.vue";
// import HeatMap from "./composables/HeatMap.vue";
// import Summary from "./composables/Summary.vue";
// import DuPontClick from './composables/DuPontClick.vue';
// import Timeline from './composables/Timeline.vue';
import TimelineCard from './composables/TimelineCard.vue';
import PredictionCard from './composables/PredictionCard.vue';
</script>