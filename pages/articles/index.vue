<template>
  <div class="top-wrapper">
    <div class="top-wrapper__box">
      <change-color-big-cards></change-color-big-cards>
      <change-color-small-cards></change-color-small-cards>
    </div>
  </div>
</template>

<script setup lang="ts">
import changeColorBigCards from './modules/changeColorBigCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
</script>
<style lang="less" scoped>
.top-wrapper {
  .top-wrapper__box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
