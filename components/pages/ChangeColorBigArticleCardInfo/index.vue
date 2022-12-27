<template>
  <div class="info">
    <div class="tag">{{ options.tag }}</div>
    <nuxt-img
      class="head-portrait"
      :src="options.headSource"
      width="30"
      height="30"
    />
    <div class="info-detail">
      <span>{{ options.username }}</span>
      <span>•</span>
      <span>{{ options.publishTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticleInfo } from '@/components/types/pages/articles/articleBigCardProps'
import type { PropType } from 'vue'
const props = defineProps({
  options: Object as PropType<ArticleInfo>,
})

const options = props.options!
</script>
<style lang="less" scoped>
.info {
  display: flex;
  align-items: center;
  column-gap: 12px;

  .tag {
    padding: 8px 14px;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #d62164;
    border-radius: 12px;
    display: inline-block;
    color: #fff;
  }

  .head-portrait {
    border-radius: 50%;
  }

  .info-detail {
    display: flex;
    column-gap: 5px;
    color: #fff;
    font-size: 14px;
  }
}
</style>
