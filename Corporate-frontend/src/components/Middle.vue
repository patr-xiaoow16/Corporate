<template>
  <div class="inline-block flex flex-col w-1/2 h-screen max-h-screen p-2">
    <VisView></VisView>
    <!-- <Milestone></Milestone> -->
    <!-- <DuPont></DuPont> -->
    <DuPontTest></DuPontTest>
    
  </div>
</template>
<script setup>
import VisView from './composables/VisView.vue';
// import Milestone from './composables/Milestone.vue';
// import DuPont from './composables/DuPont.vue';
import DuPontTest from './composables/DuPontTest.vue';

</script>