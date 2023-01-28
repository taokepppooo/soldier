<template>
  <div>
    <div ref="target" class="card cursor-pointer" :style="[baseStyles]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from './types/props'
import { useStyle } from './hooks/useStyle'

const props = defineProps(Props)

const target = ref()

const { baseStyles } = useStyle(props, target)
</script>
