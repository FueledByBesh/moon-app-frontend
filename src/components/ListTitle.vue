<script setup>
import { ListBulletIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div id="list-title" class="flex h-10 flex-1 bg-white rounded-xl my-auto px-2 gap-2">
    <ListBulletIcon class="size-6 my-auto" />
    <div id="title" class="flex-1 h-fit my-auto">
      <b class="my-auto">Task List 1</b>
    </div>
    <ChevronDownIcon class="size-4 my-auto" />
  </div>
</template>
