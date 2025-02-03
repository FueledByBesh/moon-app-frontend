<script setup>
import { HomeIcon, UserCircleIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import NavBarItem from './NavBarItem.vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div id="nav-bar" class="flex flex-col relative h-100 top-[20%] w-fit">
    <div id="header" class="flex size-fit p-2">
      <div id="logo" @click="open = !open" class="flex size-fit m-1 gap-2 cursor-pointer">
        <img src="/src/assets/asteroid_logo.webp" alt="logo" class="size-9" />
        <span id="logo-title" v-show="open" class="m-auto">Moon App</span>
      </div>
    </div>
    <hr class="mx-1" />
    <div id="content" class="flex-1 flex flex-col py-2 gap-1">
      <nav-bar-item title="To-Do" :side-bar-opened="open" :icon="SparklesIcon"></nav-bar-item>
    </div>
    <hr class="mx-1" />
    <div id="footer" class="h-fit py-2 gap-2 flex flex-col">
      <nav-bar-item></nav-bar-item>
      <div id="user" class="flex size-fit m-auto">
        <UserCircleIcon class="size-12" />
        <span id="user-name" v-show="open" class="m-auto">Fueled By Besh</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
