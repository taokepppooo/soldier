<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class="bg" :style="bgStyle"></div>
      <title class="title" :style="titleStyle">
        {{ titleContent }}
      </title>
      <ChangeColorBigArticleCardInfo
        v-if="infoOptions"
        :options="infoOptions"
        class="card-info"
      ></ChangeColorBigArticleCardInfo>
    </div>
  </ChangeColorArticleCard>
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
const titleOptions = props.contentOptions!.title
const infoOptions = props.contentOptions!.info

const imgWidth = toPx(imgOptions!.width)
const imgHeight = toPx(imgOptions!.height)
const imgSource = imgOptions!.source

const bgStyle = reactive<CSSProperties>({
  width: imgWidth,
  height: imgHeight,
  'background-image': imgSource ? `url('${imgSource}')` : undefined,
})

const titleWidth = toPx(titleOptions!.width)
const titleContent = ref(titleOptions!.content)

const titleStyle = reactive<CSSProperties>({
  width: titleWidth,
})
</script>
<style lang="less" scoped>
@import '~/assets/less/common.less';

.card-wrapper {
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
  padding: 20px;

  .bg {
    opacity: 0.6;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .title {
    .text-ellipsis(5);
    position: absolute;
    top: 20px;
    text-align: justify;
    color: #ffffff;
    font-size: 55px;
    line-height: 1.3;
  }

  .card-info {
    position: absolute;
    bottom: 40px;
  }
}
</style>
