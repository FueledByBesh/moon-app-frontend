<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: String,
  sideBarOpened: Boolean,
  icon: Function,
})
</script>

<template>
  <div id="item" class="flex size-fit mx-auto">
    <div id="icon-wrapper" class="flex size-9 mx-auto rounded-xl hover:bg-slate-300 cursor-pointer">
      <component :is="icon" class="size-6 m-auto" />
    </div>
    <span id="item-title" class="" v-show="sideBarOpened">{{ title }}</span>
  </div>
</template>
