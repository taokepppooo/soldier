<template>
  <ArticleCard :options="props.options">
    <nuxt-img
      width="500"
      height="500"
      src="https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/han-8.jpg"
    />
  </ArticleCard>
</template>

<script setup lang="ts">
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  options: Object as PropType<ArticleCardsOptions>,
})
</script>
<style lang="less" scoped></style>
