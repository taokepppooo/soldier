<template>
  <ArticleCard :options="props.cardOptions">
    <el-row :gutter="24" class="p-15">
      <el-col :span="21">
        <title class="ellipsis-1 label--style color-#fff font-bold text-18">
          {{ titleLabel }}
        </title>
        <title class="ellipsis-3 label--style color-#ffffff99 text-14 lh-[1.5]">
          {{ titleContent }}
        </title>
      </el-col>
      <el-col :span="24">
        <ArticleCardInfo
          v-if="infoOptions"
          :options="infoOptions"
        ></ArticleCardInfo>
      </el-col>
    </el-row>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'
import type { ArticleCardOptions } from '@/composables/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const titleOptions = props.contentOptions!.article
const infoOptions = props.contentOptions!.info

const titleLabel = ref(titleOptions!.label)
const titleContent = ref(titleOptions!.content)
</script>
<style scoped>
.label--style {
  --at-apply: transform-font text-justify mb-10;
}
</style>
