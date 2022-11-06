<template>
  <div>
    <ArticleCard :options="options"></ArticleCard>
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  width: 330,
  height: 80,
})
</script>
