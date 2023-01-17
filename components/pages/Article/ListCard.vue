<template>
  <ArticleCard
    class="p-x-15 shadow-[0_0_5rem_hsla(0deg,0%,46%,5%)] hover:shadow-[0_5rem_7.5rem_hsla(0deg,0%,46%,15%)]"
    :options="options"
  >
    <el-row :gutter="24" class="flex items-center h-full">
      <el-col v-if="img" :span="7">
        <nuxt-img
          class="radius-15"
          :src="img.source"
          width="240"
          height="160"
        />
      </el-col>
      <el-col :span="img ? 17 : 24">
        <el-row :gutter="24">
          <el-col :span="img ? 19 : 20">
            <el-link class="mb-10 text-24 font-bold" :underline="false">
              <span class="ellipsis-2">{{ article.label }}</span>
            </el-link>
          </el-col>
          <!-- TODO -->
          <el-col :span="img ? 5 : 4"> </el-col>
          <el-col>
            <ArticleCardInfo v-if="info" :options="info"></ArticleCardInfo>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElRow, ElCol, ElLink } from 'element-plus'
import type {
  ArticleCardContentOptions,
  ArticleImg,
  ArticleInfo,
  Article,
} from '@/composables/article/articleLargeCardProps'
import type { PropType } from 'vue'
import type { ArticleCardOptions } from '@/composables/cardProps'

const props = defineProps({
  articleCard: Object as PropType<ArticleCardContentOptions>,
})

const article = reactive<Article>(props!.articleCard!.article!)
const img = reactive<ArticleImg>(props!.articleCard!.img!)
const info = reactive<ArticleInfo>(props!.articleCard!.info!)
info.tagStyle = {
  color: '#000',
}

const options = reactive<ArticleCardOptions>({
  height: 203.6,
  customBg: '#fff',
  scale: '1.02',
})
</script>
