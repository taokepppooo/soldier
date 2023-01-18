<template>
  <ArticleChangeColorCard
    ref="target"
    class="inline-block overflow-hidden radius-10"
    :options="options"
  >
    <slot></slot>
  </ArticleChangeColorCard>
</template>

<script setup lang="ts">
import { getRandomValueFromObject } from '@/utils/random'
import { colors } from '@/types/constant/card-colors'
import type { ArticleCardOptions } from '@/composables/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardOptions>,
})

const target = ref()

const backgroundAngle = props.options!.backgroundAngle
  ? `${props.options!.backgroundAngle},`
  : ''

let defaultScale = '1.05'

if (props.options!.scale) {
  defaultScale = props.options!.scale
}

const options = reactive<ArticleCardOptions>({
  ...(props.options as ArticleCardOptions),
  background: props.options!.customBg
    ? props.options!.customBg
    : `linear-gradient(${backgroundAngle}${getRandomValueFromObject(colors)})`,
  transform: `scale(${defaultScale}) translateZ(0)`,
  layout: 'vertical' as const,
  transition: 'all 0.3s ease-in-out' as const,
  hoverTarget: target,
})
</script>
