<template>
  <RenderCard ref="target" class="render-card" :options="options">
    <slot></slot>
  </RenderCard>
</template>

<script setup lang="tsx">
import RenderCard from './renderers'
import type { RenderCardInstance } from './renderers'
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'
import colors from '~~/assets/color-transition/card-colors.json'

const props = defineProps({
  options: Object as PropType<ArticleCardsOptions>,
})

const colorKeysArray = Object.keys(colors)

const target = ref<RenderCardInstance>()

const key = colorKeysArray[Math.floor(Math.random() * colorKeysArray.length)]

const options = reactive<ArticleCardsOptions>({
  ...(props.options as ArticleCardsOptions),
  backgroundImage: `linear-gradient(45deg,${colors[key]})`,
  transform: 'scale(1.05)',
  layout: 'vertical' as const,
  transition: 'all 0.3s ease-in-out' as const,
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
