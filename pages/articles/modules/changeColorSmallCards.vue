<template>
  <div class=":uno: flex flex-col row-gap-10">
    <div v-for="option in cardOptionsArr" :key="option.id">
      <change-color-article-small-card
        :card-options="option.cardOptions"
        :content-options="option.contentOptions"
      >
      </change-color-article-small-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChangeColorCard } from '@/pages/articles/types/changeColor'

const cardOptionsArr = reactive<ChangeColorCard[]>([
  {
    id: 1,
    cardOptions: {
      height: 173.6,
      scale: '1.02',
    },
    contentOptions: {
      title: {
        label:
          '苹果发布iOS/iPadOS 14苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
        content:
          '苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新安全更新iOS/iPadOS 14.4.2 提供重要安全更新苹果发布iOS/iPadOS 14.4.2 提供重要安全更新iOS/iPadOS 14.4.2 提供重要安全更新',
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
    cardOptions: {
      height: 173.6,
      scale: '1.02',
    },
    contentOptions: {
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
    },
  },
  {
    id: 3,
    cardOptions: {
      height: 173.6,
      scale: '1.02',
    },
    contentOptions: {
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
    },
  },
])
</script>
