<template>
  <div>
    <ArticleBigCard :options="options"></ArticleBigCard>
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  width: 550,
  height: 550,
})
</script>
