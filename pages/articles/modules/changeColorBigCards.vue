<template>
  <ChangeColorBigArticleCard
    :card-options="cardOptions"
    :content-options="contentOptions"
  >
  </ChangeColorBigArticleCard>
</template>

<script setup lang="ts">
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleBigCardProps'
import type { ArticleCardOptions } from '@/components/types/cardProps'

// TODO 可自定义
const cardOptions = reactive<ArticleCardOptions>({
  width: 550,
  height: 550,
})
// TODO 可自定义
const contentOptions = reactive<ArticleCardContentOptions>({
  img: {
    width: '100%',
    height: 400,
    source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
  },
  title: {
    width: 350,
    content:
      '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
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
