<template>
  <ArticleCard
    class="shadow-[0_5rem_7.5rem_hsl(0,0,46%/2%)]"
    :options="options"
  >
    222
  </ArticleCard>
</template>

<script setup lang="ts">
import type { ArticleCardOptions } from '@/components/types/cardProps'

const options = reactive<ArticleCardOptions>({
  height: 173.6,
  customBg: '#fff',
  scale: '1.02',
})
</script>
