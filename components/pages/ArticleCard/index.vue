<template>
  <RenderCard ref="target" class="render-card" :options="options">
    <slot></slot>
  </RenderCard>
</template>

<script setup lang="tsx">
import { getRandomValueFromObject } from '@/utils/random'
import { colors } from '@/types/constant/card-colors'
import RenderCard from './renderers'
import type { RenderCardInstance } from './renderers'
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardsOptions>,
})

const target = ref<RenderCardInstance>()

const backgroundAngle = props.options!.backgroundAngle
  ? `${props.options!.backgroundAngle},`
  : ''

const options = reactive<ArticleCardsOptions>({
  ...(props.options as ArticleCardsOptions),
  background: `linear-gradient(${backgroundAngle}${getRandomValueFromObject(
    colors
  )})`,
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
  border-radius: 20px;
}
</style>
