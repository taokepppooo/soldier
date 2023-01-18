<template>
  <ArticleCard
    class="p-x-15 shadow-[0_0_5rem_hsla(0deg,0%,46%,15%)] hover:shadow-[0_5rem_7.5rem_hsla(0deg,0%,46%,15%)]"
    :options="options"
  >
    <el-row :gutter="24" class="m-y-10">
      <el-col v-if="img" :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
        <nuxt-img
          class="radius-15 ma"
          :src="img.source"
          width="100%"
          height="160"
        />
      </el-col>
      <el-col
        :xs="24"
        :sm="img ? 17 : 24"
        :md="img ? 17 : 24"
        :lg="img ? 17 : 24"
        :xl="img ? 17 : 24"
      >
        <el-row :gutter="24">
          <el-col
            :xs="24"
            :sm="img ? 19 : 20"
            :md="img ? 19 : 20"
            :lg="img ? 19 : 20"
            :xl="img ? 19 : 20"
          >
            <el-link
              class="flex items-start justify-start h-100 text-24 font-bold lh-2"
              :underline="false"
            >
              <span class="ellipsis-2">{{ article.label }}</span>
            </el-link>
          </el-col>
          <!-- TODO -->
          <el-col
            class="relative"
            :xs="0"
            :sm="img ? 5 : 4"
            :md="img ? 5 : 4"
            :lg="img ? 5 : 4"
            :xl="img ? 5 : 4"
          >
            <div class="absolute right-0 break-all pr-10 pt-10">
              111111111111111111111111111111111111111111111111111111111111111
            </div>
          </el-col>
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
  height: '100%',
  minHeight: 203.6,
  customBg: '#fff',
  scale: '1.02',
})
</script>
<style lang="less" scoped>
:deep(.card) {
  display: flex;
  align-items: center;
}
</style>
