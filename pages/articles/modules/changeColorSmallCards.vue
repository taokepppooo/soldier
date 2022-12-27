<template>
  <div class="cards-wrapper">
    <div class="cards-wrapper__cards">
      <div v-for="option in cardOptionsArr" :key="option.id">
        <ChangeColorSmallArticleCard
          :card-options="option.cardOptions"
          :content-options="option.contentOptions"
        >
        </ChangeColorSmallArticleCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChangeColorCard } from '@/pages/articles/types/changeColor'

const cardOptionsArr = reactive<ChangeColorCard[]>([
  {
    id: 1,
    cardOptions: {
      width: 840,
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
    id: 2,
    cardOptions: {
      width: 840,
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
      width: 840,
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
<style lang="less" scoped>
.cards-wrapper {
  .cards-wrapper__cards {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
  }
}
</style>
