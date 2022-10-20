<template>
  <div class="cards">
    <NuxtLink v-for="(card, index) in cards" :key="index" :to="card.link">
      <SCard :options="getCardOptions(index)">
        <span class="card-icon" :class="getIconfont(card.icon)"></span>
        <span class=":uno: truncate card-title">{{ card.title }}</span>
      </SCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
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
  return {
    width: 330,
    height: 80,
    backgroundImage: cards[index].backgroundImage,
    mode: '3d' as const,
  }
}
const getIconfont = (icon: string) => {
  return ['iconfont', icon]
}
</script>

<style lang="less" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;

  :deep(.card) {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 37px;

    .card-icon {
      font-size: 22px;
      margin-right: 10px;
    }

    .card-title {
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>
