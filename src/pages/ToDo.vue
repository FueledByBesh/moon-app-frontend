<script setup>
import TaskCard from '@/components/TaskCard.vue'
import ShowDate from '@/components/ShowDate.vue'
import FilterBy from '@/components/FilterBy.vue'
import ListTitle from '@/components/ListTitle.vue'
</script>

<template>
  <div id="wrapper" class="relative w-full h-full">
    <div id="content" class="flex flex-col mx-auto mt-15 w-[600px] h-[400px]">
      <div id="content-header" class="flex gap-4 w-full h-15">
        <show-date></show-date>
        <list-title></list-title>
        <filter-by></filter-by>
      </div>
      <div id="content-body"></div>
      <!-- <task-card></task-card> -->
    </div>
  </div>
</template>

<style></style>
