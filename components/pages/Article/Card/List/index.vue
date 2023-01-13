<template>
  <s-card :options="options"> 222 </s-card>
</template>

<script setup lang="ts">
import type { ArticleCardOptions } from '@/components/types/cardProps'

const options = reactive<ArticleCardOptions>({
  height: 173.6,
  scale: '1.02',
})
</script>
