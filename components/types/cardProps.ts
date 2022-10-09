import { Options } from '@/components/global/SCard/types/props'
import type { PropType } from 'vue'

export interface ArticleCardsOptions extends Options {
  layout?: 'vertical' | 'horizontal'
}

export const cardProps = {
  options: {
    type: Object as PropType<ArticleCardsOptions>,
    require: true,
  },
}
