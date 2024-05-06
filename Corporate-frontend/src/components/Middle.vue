<template>
  <div class="inline-block flex flex-col w-1/2 h-screen max-h-screen p-2">
    <VisView></VisView>
    <!-- <Milestone></Milestone> -->
    <DuPontClick></DuPontClick>
    
  </div>
</template>
<script setup>
import VisView from './composables/VisView.vue';
// import Milestone from './composables/Milestone.vue';
import DuPontClick from './composables/DuPontClick.vue';

</script>