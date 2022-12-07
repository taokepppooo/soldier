import { Options } from '@/components/global/SCard/types/props'
import type { PropType, Ref } from 'vue'

export interface ArticleCardsOptions extends Options {
  backgroundAngle?: string
  layout?: 'vertical' | 'horizontal'
  transform?: string
  hoverTarget?: Ref
}

export const cardProps = {
  options: {
    type: Object as PropType<ArticleCardsOptions>,
    require: true,
  },
}
