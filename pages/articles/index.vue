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
  img: {
    width: 550,
    height: 550,
    source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
  },
  title: '',
  articleInfo: '',
})
</script>
