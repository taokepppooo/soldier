<template>
  <div>
    <NuxtLink v-for="(card, index) in cards" :key="index" :to="card.link">
      <SCard :options="cardOptions">
        <div>1</div>
      </SCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const cardOptions = {
  width: 330,
  height: 80,
  'linear-gradient': {
    angle: '45deg',
    points: '#7fe496, #6edf8f',
  },
}

// TODO 接口获取
const cards = [{ link: '/' }, { link: '/' }, { link: '/' }, { link: '/' }]
</script>
