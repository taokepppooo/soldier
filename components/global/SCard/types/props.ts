import type { PropType } from 'vue'

export interface Scale3D {
  x: number
  y: number
  z: number
}

export interface RotateX {
  v: number
}

export interface RotateY {
  v: number
}

export interface Perspective {
  v: number
}

export interface Transition {
  scale3d?: Scale3D
  rotateX?: RotateX
  rotateY?: RotateY
  perspective?: Perspective
}

export interface Options {
  width: string | number
  height: string | number
  transition?: Transition
}

export const cardProps = {
  options: {
    type: Object as PropType<Options>,
    require: true,
  },
}
