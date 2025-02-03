<script setup>
import { FunnelIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div id="filter" class="flex w-fit h-10 my-auto bg-white rounded-xl px-2 gap-2">
    <FunnelIcon class="size-5 my-auto" />
    <div id="by" class="flex-1 h-fit my-auto">
      <b>Create Date</b>
    </div>

    <ChevronDownIcon class="size-4 my-auto" />
  </div>
</template>
