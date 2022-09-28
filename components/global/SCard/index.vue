<template>
  <div>
    <div ref="target" :style="[baseStyles]">
      <div>{{ mouse.elementX }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardProps } from './types/props'
import { useStyle } from './hooks/useStyle'

const props = defineProps(cardProps)

const target = ref()

const { baseStyles, mouse } = useStyle(props, target)
</script>
