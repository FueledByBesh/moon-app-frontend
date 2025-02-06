<script setup>
import { FunnelIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import autoAnimate from '@formkit/auto-animate'
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// const options = ref(
//   new Map([
//     [1, 'Create Date'],
//     [2, 'Priority'],
//     [3, 'Anything else'],
//   ]),
// )

const selectedOption = ref('Create Date')

const open = ref(false)

function openSelect(a) {
  open.value = a
  console.log(open.value)
}
</script>

<template>
  <div
    id="wrapper"
    class="flex flex-col w-fit mt-[10px] rounded-xl bg-white cursor-pointer z-1000 duration-300"
    :class="open ? 'h-[140px]' : 'h-10'"
    v-click-outside="() => openSelect(false)"
  >
    <div id="filter" class="relative flex w-fit h-10 gap-2" @click="openSelect(true)">
      <FunnelIcon class="ml-2 size-5 my-auto" />
      <label for="options" class="flex-1 w-fit my-auto rounded-xl font-bold z-[-1]">
        {{ selectedOption }}
      </label>
      <ChevronDownIcon
        class="size-4 my-auto mr-2 duration-500"
        :class="open ? '-rotate-180' : '-rotate-0'"
      />
    </div>
    <select
      id="options"
      name="options"
      class="flex-1 w-full bg-white rounded-xl h-fit border-none outline-none appearance-none a"
      size="4"
      v-model="selectedOption"
      v-show="open"
      @click="openSelect(false)"
    >
      <option value="Create Date" selected>Create Date</option>
      <option value="Priority">Priority</option>
      <option value="Anything else">Anything else</option>
    </select>
  </div>
</template>

<!-- <template>
  <div id="wrapper" class="relative flex flex-col size-fit my-auto rounded-xl">
    <div
      id="filter"
      class="flex w-fit h-10 bg-white rounded-xl px-2 gap-2 cursor-pointer"
      @click="changeOption"
    >
      <FunnelIcon class="size-5 my-auto" />
      <div id="by" class="flex-1 h-fit my-auto">
        <b>{{ options.get(currOption) }}</b>
      </div>

      <ChevronDownIcon class="size-4 my-auto" />
    </div>
    <div
      id="options"
      v-if="choose"
      class="absolute flex-1 w-full h-15 top-12 bg-white z-15 rounded-xl opacity-50"
    >
      <div :v-for="([key, value]) in options.value" :key="key">
        <input :id="key" name="option" type="radio" />
        <label :for="key" :data-txt="value"></label>
      </div>
    </div>
  </div>
</template> -->

<style scoped>
option {
  border-radius: 5px;
  height: 25px;
  background-color: white;
  margin-block: 3px;
  padding-inline: 8px;
  cursor: pointer;
}

option:hover {
  background-color: rgb(176, 176, 176);
}
</style>
