<template>
  <el-row :gutter="24" class=":uno: m-y-15 cards">
    <el-col
      v-for="(card, index) in cards"
      :key="index"
      class=":uno: mb-15"
      :xs="24"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="6"
    >
      <NuxtLink :to="card.link">
        <SCard :options="getCardOptions(index)">
          <span
            class=":uno: text-22 mr-10"
            :class="getIconfont(card.icon)"
          ></span>
          <span class=":uno: truncate text-18 font-400">{{ card.title }}</span>
        </SCard>
      </NuxtLink>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import { ArticleCardOptions } from '@/components/types/cardProps'

// TODO 接口获取
const cards = reactive([
  {
    icon: 'icon-icon_wangye',
    title: '文章模块',
    link: '/articles',
    backgroundImage: 'linear-gradient(45deg,#7fe496,#6edf8f)',
  },
  {
    icon: 'icon-yuanquyunwei',
    title: '工具模块',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#fe9078,#f1b87f)',
  },
  {
    icon: 'icon-gongnengdingyi1',
    title: '推荐模块',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#6cacfd,#93c8ff)',
  },
  {
    icon: 'icon-gengduo',
    title: '其他模块',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#a682e4,#c1a7e9)',
  },
])

const getCardOptions = (index: number) => {
  const options: ArticleCardOptions = {
    height: 80,
    backgroundImage: cards[index].backgroundImage,
    mode: '3d' as const,
  }
  return options
}
const getIconfont = (icon: string) => {
  return ['iconfont', icon]
}
</script>

<style lang="less" scoped>
.cards {
  :deep(.card) {
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 9.25rem;
  }
}
</style>
