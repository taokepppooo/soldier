import { cardProps } from '../types/props'
import type { CSSProperties, ExtractPropTypes } from 'vue'

export const useStyle = (props: ExtractPropTypes<typeof cardProps>) => {
  return reactive<CSSProperties>({
    width: props.options?.width,
    height: props.options?.height,
    transform:
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  })
}
