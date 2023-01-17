<template>
  <div>
    <div ref="target" class="card cursor-pointer" :style="[baseStyles]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardProps } from './types/props'
import { useStyle } from './hooks/useStyle'

const props = defineProps(cardProps)

const target = ref()

const { baseStyles } = useStyle(props, target)
</script>
