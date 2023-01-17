<template>
  <ArticleListCard
    v-for="(articleCard, index) in articleCardList"
    :key="index"
    :article-card="articleCard"
    class="mb-10"
  ></ArticleListCard>
</template>

<script setup lang="ts">
import type { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'

const articleCardList = reactive<ArticleCardContentOptions[]>([
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label: 'bbb',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label:
        '阿三大苏打撒旦阿三打撒打撒打撒大山东撒旦阿斯顿撒大苏打阿斯顿撒旦阿三阿三大苏打阿斯顿大山东阿斯顿阿斯顿啊实打实  ',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label:
        '阿三大苏打撒旦阿三打撒打撒打撒大山东撒旦阿斯顿撒大苏打阿斯顿撒旦阿三阿三大苏打阿斯顿大山东阿斯顿阿斯顿啊实打实  ',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label:
        '阿三大苏打撒旦阿三打撒打撒打撒大山东撒旦阿斯顿撒大苏打阿斯顿撒旦阿三阿三大苏打阿斯顿大山东阿斯顿阿斯顿啊实打实  ',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label:
        '阿三大苏打撒旦阿三打撒打撒打撒大山东撒旦阿斯顿撒大苏打阿斯顿撒旦阿三阿三大苏打阿斯顿大山东阿斯顿阿斯顿啊实打实  ',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
  {
    img: {
      source: 'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/006-1.jpg',
    },
    article: {
      label:
        '阿三大苏打撒旦阿三打撒打撒打撒大山东撒旦阿斯顿撒大苏打阿斯顿撒旦阿三阿三大苏打阿斯顿大山东阿斯顿阿斯顿啊实打实  ',
    },
    info: {
      tag: '文章',
      headSource:
        'https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg',
      username: 'MacDown',
      publishTime: '2021-03-27 11:24:12',
    },
  },
])
</script>
