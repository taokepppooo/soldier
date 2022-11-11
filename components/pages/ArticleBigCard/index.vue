<template>
  <ArticleCard :options="props.options"> </ArticleCard>
</template>

<script setup lang="ts">
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardsOptions>,
})
</script>
<style lang="less" scoped></style>
