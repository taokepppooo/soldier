<template>
  <ArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class="bg" :style="bgStyle">
        <h5 class="title">苹果发布iOS/iPadOS 14.4.2 提供重要安全更新</h5>
      </div>
      <div>aaa</div>
    </div>
  </ArticleCard>
</template>

<script setup lang="ts">
import { toPx } from '@/utils/style'
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { ArticleCardContentOptions } from '@/components/types/pages/articleBigCardProps'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardsOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const imgOptions = props.contentOptions!.img

const width = toPx(imgOptions!.width)
const height = toPx(imgOptions!.height)
const source = ref(imgOptions!.source)

const bgStyle = reactive<CSSProperties>({
  width,
  height,
  'background-image': source.value ? `url('${source.value}')` : undefined,
})
</script>
<style lang="less" scoped>
@import '~/assets/less/common.less';

.card-wrapper {
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
  padding: 20px;

  .bg {
    background-repeat: no-repeat;
    background-size: contain;
  }

  .title {
    .text-ellipsis-2();
    text-align: justify;
    font-weight: normal;
    color: #ffffff;
    font-size: 55px;
    line-height: 1.3;
  }
}
</style>
