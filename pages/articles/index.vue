<template>
  <div>
    <ArticleBigCard
      :card-options="cardOptions"
      :content-options="contentOptions"
    >
    </ArticleBigCard>
  </div>
</template>

<script setup lang="ts">
const cardOptions = reactive({
  width: 550,
  height: 550,
})
const contentOptions = reactive({
  img: {},
  title: {},
  articleInfo: {},
})
</script>
