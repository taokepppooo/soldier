<template>
  <div class="flex flex-col row-gap-10">
    <ArticleChangeColorSmallCard
      v-for="option in cardOptionsArr"
      :key="option.id"
      :content-options="option.contentOptions"
    >
    </ArticleChangeColorSmallCard>
  </div>
</template>

<script setup lang="ts">
import { ChangeColorCard } from '@/composables/article/changeColor'

const cardOptionsArr = reactive<ChangeColorCard[]>([
  {
    id: 1,
    contentOptions: {
      article: {
        label:
          '苹果发布iOS/iPadOS 14苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
        content: '苹果发布iOS/iPadOS',
      },
      info: {
        tag: '文章',
        headSource:
          'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
        username: 'MacDown',
        publishTime: '2021-03-27 11:24:12',
      },
    },
  },
  {
    id: 2,
    contentOptions: {
      article: {
        label:
          '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
        content:
          '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新22222222222222222222222222222',
      },
      info: {
        tag: '文章',
        headSource:
          'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
        username: 'MacDown',
        publishTime: '2021-03-27 11:24:12',
      },
    },
  },
  {
    id: 3,
    contentOptions: {
      article: {
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
    },
  },
])
</script>
