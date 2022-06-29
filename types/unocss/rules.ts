import { CSS_CONSTANT } from './constant'
import type { Rule } from '@unocss/core'
export const rules = [
  ['cr-color-main', { color: CSS_CONSTANT.COLOR_MAIN }],
  ['cr-fill-color-main', { fill: CSS_CONSTANT.COLOR_MAIN }],
  [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': `${d}` })],
] as Rule<{}>[]
