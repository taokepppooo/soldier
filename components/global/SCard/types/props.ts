import type { PropType } from 'vue'

export interface Options {
  width: string | number
  height: string | number
  backgroundImage?: string
  mode?: '3d'
}

export const cardProps = {
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
}
