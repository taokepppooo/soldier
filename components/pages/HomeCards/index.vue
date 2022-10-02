<template>
  <div class="cards">
    <NuxtLink v-for="(card, index) in cards" :key="index" :to="card.link">
      <SCard :options="getCardOptions(index)">
        <span :class="getIconfont(card.icon)"></span>
        <span class="card-title">{{ card.title }}</span>
      </SCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// TODO 接口获取
const cards = reactive([
  {
    icon: 'icon-icon_wangye',
    title: '',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#7fe496,#6edf8f)',
  },
  {
    icon: '&#xeb8c;',
    title: '',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#fe9078,#f1b87f)',
  },
  {
    icon: '&#xeb8c;',
    title: '',
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#6cacfd,#93c8ff)',
  },
  {
    icon: '&#xeb8c;',
    title: '',
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
    transition: 'all 0.3s ease-in-out',
  }
}
const getIconfont = (icon: string) => {
  return ['font-minxin-iconfont', icon]
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
  }
}
</style>
