<template>
  <ArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <el-row :gutter="24" class="p-15">
        <el-col :span="21">
          <title class="ellipsis-1 label--style color-#fff font-bold text-18">
            {{ titleLabel }}
          </title>
          <title
            class="ellipsis-3 label--style color-#ffffff99 text-14 lh-[1.5]"
          >
            {{ titleContent }}
          </title>
        </el-col>
      </el-row>
      <div class="card-wrapper__info"></div>
    </div>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleLargeCardProps'
import type { ArticleCardOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const titleOptions = props.contentOptions!.title

const titleLabel = ref(titleOptions!.label)
const titleContent = ref(titleOptions!.content)
</script>
<style scoped>
.label--style {
  --at-apply: transform-font text-justify mb-10;
}
</style>
