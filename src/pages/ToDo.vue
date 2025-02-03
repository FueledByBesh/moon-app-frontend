<script setup>
import { ref, reactive } from 'vue'

import TaskCard from '@/components/TaskCard.vue'
import ShowDate from '@/components/ShowDate.vue'
import FilterBy from '@/components/FilterBy.vue'
import ListTitle from '@/components/ListTitle.vue'

import { Task } from '@/models/Task'

import { PaperAirplaneIcon, PlusIcon } from '@heroicons/vue/24/solid'

const task = new Task({ id: 1, title: 'Hellow' })

task.getTaskInfo()

const taskList = ref([
  { id: 1, title: 'Study' },
  { id: 2, title: 'asdfg' },
  { id: 4, title: 'nothing' },
])

const props = defineProps({
  // taskList: Array,
})
</script>

<template>
  <div id="wrapper" class="flex flex-col justify-between relative w-full h-full">
    <div id="content" class="flex flex-col mx-auto mt-15 w-150 h-[60%]">
      <div id="content-header" class="flex gap-4 w-full h-15">
        <show-date></show-date>
        <list-title></list-title>
        <filter-by></filter-by>
      </div>

      <div id="content-body" class="flex flex-col h-100 w-full gap-3 py-3 overflow-auto">
        <TaskCard
          v-for="task in taskList"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          @click="console.log(task)"
        />
      </div>
    </div>

    <div id="taks-adder" class="flex mx-auto bg-white w-150 h-15 mb-10 px-3 gap-2 rounded-xl">
      <PlusIcon class="size-6 my-auto cursor-pointer fill-stone-500" />
      <input type="text" id="input" class="my-auto flex-1 h-fit" placeholder="Fuck this study" />
      <PaperAirplaneIcon class="size-6 my-auto cursor-pointer fill-stone-600" />
    </div>
  </div>
</template>

<style></style>
