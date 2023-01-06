<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class=":uno: h-100% bg-[rgba(255,255,255,0.3)]">
      <div class=":uno: relative h-inherit p-20">
        <div
          class=":uno: opacity-60 bg-no-repeat bg-contain"
          :style="bgStyle"
        ></div>
        <title
          class=":uno: ellipsis-5 transform-font absolute top-20 text-justify c-#fff text-55 lh-[1.3]"
          :style="titleStyle"
        >
          {{ titleContent }}
        </title>
        <ChangeColorArticleLargeCardInfo
          v-if="infoOptions"
          :options="infoOptions"
          class=":uno: absolute bottom-40"
        ></ChangeColorArticleLargeCardInfo>
      </div>
    </div>
  </ChangeColorArticleCard>
</template>

<script setup lang="ts">
import { toRem } from '@/utils/style'
import { ArticleCardOptions } from '@/components/types/cardProps'
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleBigCardProps'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const imgOptions = props.contentOptions!.img
const titleOptions = props.contentOptions!.title
const infoOptions = props.contentOptions!.info

const imgWidth = toRem(imgOptions!.width)
const imgHeight = toRem(imgOptions!.height)
const imgSource = imgOptions!.source

const bgStyle = reactive<CSSProperties>({
  width: imgWidth,
  height: imgHeight,
  'background-image': imgSource ? `url('${imgSource}')` : undefined,
})

const titleWidth = toRem(titleOptions!.width)
const titleContent = ref(titleOptions!.content)

const titleStyle = reactive<CSSProperties>({
  width: titleWidth,
})
</script>
