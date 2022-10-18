<template>
  <RenderCard ref="target" class="render-card" :options="options"></RenderCard>
</template>

<script setup lang="tsx">
import RenderCard from './renderers'
import colors from '~~/assets/color-transition/card-colors.json'

const colorKeysArray = Object.keys(colors)

const target = ref()

const key = colorKeysArray[Math.floor(Math.random() * colorKeysArray.length)]

const options = reactive({
  width: 330,
  height: 80,
  backgroundImage: `linear-gradient(45deg,${colors[key]})`,
  transform: 'scale(1.05)',
  transition: 'all 0.3s ease-in-out',
  layout: 'vertical' as const,
  hoverTarget: target,
})
</script>
<style lang="less" scoped>
.render-card {
  display: inline-block;
  overflow: hidden;
  border-radius: 6px;
}
</style>
