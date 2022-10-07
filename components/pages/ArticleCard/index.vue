<template>
  <RenderCard :options="options"></RenderCard>
</template>

<script setup lang="tsx">
import RenderCard from './renderers'

const options = reactive({
  width: 330,
  height: 80,
  backgroundImage: 'linear-gradient(45deg,#a682e4,#c1a7e9)',
  transition: 'all 0.3s ease-in-out',
})
</script>
<style lang="less" scoped></style>
