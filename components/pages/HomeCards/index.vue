<template>
  <div>
    <NuxtLink v-for="(card, index) in cards" :key="index" :to="card.link">
      <SCard :options="getCardOptions(index)">
        <div>1</div>
      </SCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// TODO 接口获取
const cards = reactive([
  {
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#7fe496,#6edf8f)',
  },
  {
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#fe9078,#f1b87f)',
  },
  {
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#6cacfd,#93c8ff)',
  },
  {
    link: '/',
    backgroundImage: 'linear-gradient(45deg,#a682e4,#c1a7e9)',
  },
])

const getCardOptions = (index) => {
  return {
    width: 330,
    height: 80,
    backgroundImage: cards[index].backgroundImage,
    mode: '3d' as const,
  }
}
</script>
