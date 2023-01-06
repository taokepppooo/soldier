import { getCssValue } from '../../../utils/style'
import { CSS_CONSTANT } from './constant'

import type { Rule } from '@unocss/core'

export const rules = [
  ['cr-color-main', { color: CSS_CONSTANT.COLOR_MAIN }],
  ['cr-fill-color-main', { fill: CSS_CONSTANT.COLOR_MAIN }],
  [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': d })],
  [/^col-gap-(\d+)$/, ([, d]) => ({ 'column-gap': `${getCssValue(d)}` })],
  [/^row-gap-(\d+)$/, ([, d]) => ({ 'grid-row-gap': `${getCssValue(d)}` })],
  [/^radius-(\d+)$/, ([, d]) => ({ 'border-radius': `${getCssValue(d)}` })],
  [
    /^ellipsis-(\d+)$/,
    ([, d]) => ({
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': d,
      'text-overflow': 'ellipsis',
      overflow: 'hidden',
      'word-break': 'break-all',
    }),
  ],
  [
    'transform-font',
    () => ({
      transform: 'translate3d(0, 0, 0) perspective(0)',
    }),
  ],
  [/^spacing-(\d+)$/, ([, d]) => ({ 'letter-spacing': `${getCssValue(d)}` })],
] as Rule<{}>[]
