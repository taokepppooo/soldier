import type { PropType } from 'vue'
import type { Options } from '.'

export const Props = {
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
}
