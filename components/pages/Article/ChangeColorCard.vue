<template>
  <SCard :options="props.options" :style="styles" class="s-card">
    <slot></slot>
  </SCard>
</template>

<script setup lang="ts">
import { setStyles } from '@/composables/article/changeColorCard'
import type { ArticleCardOptions } from '@/composables/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardOptions>,
})

const options = reactive<ArticleCardOptions>(props.options!)
const transform = ref(options.transform)

const styles = setStyles(props.options!)
</script>
<style lang="less" scoped>
.s-card {
  transform: scale(1);

  &:hover {
    transform: v-bind(transform);
  }
}
</style>
