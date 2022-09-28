import type { PropType } from 'vue'

export interface Options {
  width: string | number
  height: string | number
  backgroundImage?: string
  transform?: string
}

export const cardProps = {
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
}
