<template>
  <render-card
    ref="target"
    class="inline-block overflow-hidden radius-10"
    :options="options"
  >
    <slot></slot>
  </render-card>
</template>

<script setup lang="tsx">
import { getRandomValueFromObject } from '@/utils/random'
import { colors } from '@/types/constant/card-colors'
import RenderCard from './renderers'
import type { RenderCardInstance } from './renderers'
import type { ArticleCardOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardOptions>,
})

const target = ref<RenderCardInstance>()

const backgroundAngle = props.options!.backgroundAngle
  ? `${props.options!.backgroundAngle},`
  : ''

let defaultScale = '1.05'

if (props.options!.scale) {
  defaultScale = props.options!.scale
}

const options = reactive<ArticleCardOptions>({
  ...(props.options as ArticleCardOptions),
  background: `linear-gradient(${backgroundAngle}${getRandomValueFromObject(
    colors
  )})`,
  transform: `scale(${defaultScale}) translateZ(0)`,
  layout: 'vertical' as const,
  transition: 'all 0.3s ease-in-out' as const,
  hoverTarget: target,
})
</script>
