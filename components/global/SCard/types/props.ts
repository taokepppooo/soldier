import type { PropType } from 'vue'

export interface Options {
  width?: string | number
  height: string | number
  minHeight?: string | number
  background?: string
  backgroundImage?: string
  mode?: '3d'
  transition?: string
}

export const cardProps = {
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
}
