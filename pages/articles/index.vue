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
// TODO 可自定义
const cardOptions = reactive({
  width: 550,
  height: 550,
})
// TODO 可自定义
const contentOptions = reactive({
  img: {
    width: '100%',
    height: 400,
    source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
  },
  title: '',
  articleInfo: '',
})
</script>
