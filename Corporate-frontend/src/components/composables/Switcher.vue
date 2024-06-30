<template>
    <div class="card">
        <div class="h-1/3 w-full">
            <TableLens></TableLens>
        </div>
        <div class="h-2/3 w-full">
            <Recommend></Recommend>
        </div>
    </div>
</template>

<script setup>
import TableLens from './TableLens.vue';
import Recommend from './Recommend.vue';
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 4px;
  overflow: hidden;
  height: inherit;
}


</style>