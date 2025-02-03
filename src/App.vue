<script setup>
import Header from './components/Header.vue'
import NavigationBar from './components/NavigationBar.vue'
import ToDo from './pages/ToDo.vue'
</script>

<template>
  <header>
    <!-- <Header></Header> -->
  </header>

  <main id="main" class="relative flex w-full h-full bg-white p-4 gap-4">
    <div class="relative w-fit h-full min-w-[60px]">
      <navigation-bar></navigation-bar>
    </div>
    <div id="content" class="bg-zinc-300 flex-1 rounded-xl">
      <to-do></to-do>
    </div>
  </main>
</template>

<style scoped></style>
