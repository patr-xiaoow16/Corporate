<template>
  <div class="inline-block flex flex-col w-1/2 h-screen max-h-screen p-2">
    <DuPontClick></DuPontClick>
    <VisView></VisView>
    <!-- <VisViewTest></VisViewTest> -->

    
  </div>
</template>
<script setup>
import VisView from './composables/VisView.vue';
// import VisViewTest from './composables/VisViewTest.vue';
import DuPontClick from './composables/DuPontClick.vue';

</script>