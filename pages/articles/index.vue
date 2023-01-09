<template>
  <div class=":uno: flex flex-wrap justify-around col-gap-20">
    <change-color-large-cards></change-color-large-cards>
    <change-color-small-cards></change-color-small-cards>
  </div>
</template>

<script setup lang="ts">
import changeColorLargeCards from './modules/changeColorLargeCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
</script>
