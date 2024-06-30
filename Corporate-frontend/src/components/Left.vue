<template>
  <div class="inline-block flex flex-col w-1/4 h-fit min-h-screen p-2 bg-slate-200">
    <!-- <TableLens></TableLens> -->
    <!-- <HeatMap></HeatMap> -->
    <!-- <Summary></Summary> -->
    <!-- <DuPontClick></DuPontClick> -->
    <!-- <Timeline></Timeline> -->
    <!-- <TimelineCard></TimelineCard> -->
    <PredictionCard></PredictionCard>

    <el-switch v-model="switcher" size="small" active-text="Conversation" inactive-text="Data View" />
    <transition name="fade">
      <div v-if="switcher" key="div1">
        <FinChat></FinChat>
      </div>
      <div v-else key="div2">
        <Switcher></Switcher>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// import TableLens from "./composables/TableLens.vue";
// import HeatMap from "./composables/HeatMap.vue";
// import Summary from "./composables/Summary.vue";
// import DuPontClick from './composables/DuPontClick.vue';
// import Timeline from './composables/Timeline.vue';
// import TimelineCard from './composables/TimelineCard.vue';
import PredictionCard from './composables/PredictionCard.vue';
import FinChat from './composables/FinChat.vue';
import Switcher from './composables/Switcher.vue';
// import FinChatTest from './composables/FinChatTest.vue';

const switcher = ref(true)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>