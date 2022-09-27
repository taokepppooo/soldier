<template>
  <div>
    <SCard v-for="(card, index) in cards" :key="index" :options="cardOptions">
      <div>1</div>
    </SCard>
  </div>
</template>

<script setup lang="ts">
const cardOptions = {
  width: '330px',
  height: '80px',
}

// TODO 接口获取
const cards = [{}, {}, {}]
</script>
