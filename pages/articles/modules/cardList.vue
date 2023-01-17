<template>
  <list-card
    v-for="(articleCard, index) in articleCardList"
    :key="index"
    :article-card="articleCard"
  ></list-card>
</template>

<script setup lang="ts">
import ListCard from './ListCard.vue'
import type { ArticleListOptions } from '@/composables/article/articleList'

const articleCardList = reactive<ArticleListOptions[]>([
  {
    img: {
      src: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      title: 'aaa',
      info: {
        tag: '文章',
      },
    },
  },
])
</script>
