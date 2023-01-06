<template>
  <div class=":uno: flex flex-wrap justify-around col-gap-20">
    <change-color-big-cards></change-color-big-cards>
    <change-color-small-cards></change-color-small-cards>
  </div>
</template>

<script setup lang="ts">
import changeColorBigCards from './modules/changeColorBigCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
</script>
