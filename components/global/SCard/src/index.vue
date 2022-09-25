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
import type { CSSProperties } from '@vue/runtime-dom'

// props不支持导入ts，vue团队后续会尝试解决此问题
export interface Props {
  options: Options
}

const props = defineProps<Props>()

const baseStyles = reactive<CSSProperties>({
  width: props.options.width,
  height: props.options.height,
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
})
</script>
