<template>
  <div>
    <div :style="[baseStyles]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardProps } from './types/props'
import { useStyle } from './hooks/useStyle'

const props = defineProps(cardProps)

const baseStyles = useStyle(props)
</script>
