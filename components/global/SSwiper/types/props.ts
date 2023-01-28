import type { PropType } from 'vue'
import type { Options, Slide } from '.'

export const Props = {
  slides: Array as PropType<Slide[]>,
  options: Object as PropType<Options>,
}
