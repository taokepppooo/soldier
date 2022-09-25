<template>
  <div>
    <SCard v-for="(card, index) in cards" :key="index" :options="cardOptions">
      <div>1</div>
    </SCard>
  </div>
</template>

<script setup lang="ts">
const cardOptions = {
  width: 330,
  height: 80,
}

// TODO 接口获取
const cards = [{}, {}, {}]
</script>
