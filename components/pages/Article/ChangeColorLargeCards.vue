<template>
  <ArticleChangeColorLargeCard
    :card-options="cardOptions"
    :content-options="contentOptions"
  >
  </ArticleChangeColorLargeCard>
</template>

<script setup lang="ts">
import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'
import { ArticleCardOptions } from '@/composables/cardProps'

// TODO 可自定义
const cardOptions = reactive<ArticleCardOptions>({
  height: '100%',
})
// TODO 可自定义
const contentOptions = reactive<ArticleCardContentOptions>({
  img: {
    height: 400,
    source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
  },
  article: {
    content:
      '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新阿斯顿撒旦撒旦啊实打实的撒撒打算阿斯顿撒旦撒的撒大苏打撒旦',
  },
  info: {
    tag: '文章',
    headSource:
      'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
    username: 'MacDown',
    publishTime: '2021-03-27 11:24:12',
  },
})
</script>
<style lang="less" scoped></style>
