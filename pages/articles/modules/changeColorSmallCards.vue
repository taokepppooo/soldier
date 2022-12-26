<template>
  <template v-for="(option, index) in cardOptionsArr" :key="index">
    <ChangeColorSmallArticleCard
      :card-options="option.cardOptions"
      :content-options="option.contentOptions"
    >
    </ChangeColorSmallArticleCard
  ></template>
</template>

<script setup lang="ts">
import type { ArticleCardOptions } from '@/components/types/cardProps'
import type { ArticleCardContentOptions } from '@/components/types/pages/articleBigCardProps'

const cardOptionsArr = reactive([
  {
    cardOptions: reactive<ArticleCardOptions>({
      width: 550,
      height: 550,
    }),
    contentOptions: reactive<ArticleCardContentOptions>({
      title: {
        label:
          '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
        content:
          '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
      },
      info: {
        tag: '文章',
        headSource:
          'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
        username: 'MacDown',
        publishTime: '2021-03-27 11:24:12',
      },
    }),
  },
])
</script>
<style lang="less" scoped></style>
