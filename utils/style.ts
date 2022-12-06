import { isNumber } from 'lodash'

export const toPx = (value: number | string): string => {
  return isNumber(value) ? `${value}px` : value
}
