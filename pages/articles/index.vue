<template>
  <div class="flex justify-between">
    <div class="mb-20 sm: w-1 md:w-1 lg:w-1/2 xl:w-3/8">
      <change-color-large-cards></change-color-large-cards>
    </div>
    <div class="mb-20 sm: w-1 md:w-1 lg:w-1/2 xl:w-14.5/24">
      <change-color-small-cards></change-color-small-cards>
    </div>
  </div>
  <div>
    <div class="mt-30 sm: w-1 md:w-1 lg:w-1/2 xl:w-5/8">
      <article-list></article-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import changeColorLargeCards from './modules/changeColorLargeCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
import articleList from './modules/articleList.vue'
</script>
