<template>
  <div>
    <div :style="[baseStyles]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Options } from '../types/props'
// eslint-disable-next-line vue/prefer-import-from-vue
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
})

const baseStyles = reactive<CSSProperties>({
  width: props.options?.width,
  height: props.options?.height,
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
})
</script>
