<script setup>
import { Bars2Icon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/24/solid'

import { ref, reactive } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
})
</script>

<template>
  <div
    id="wrapper"
    class="flex w-125 h-12 min-h-12 h9 bg-gray-200 hover:bg-white rounded-xl mx-auto px-2 gap-2"
  >
    <Bars2Icon class="size-3 my-auto" />
    <div id="title" class="my-auto flex-1">
      <span>{{ title }}</span>
    </div>
    <ChevronDoubleRightIcon class="size-4 my-auto" />
  </div>
</template>
