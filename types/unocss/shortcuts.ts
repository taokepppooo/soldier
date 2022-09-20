import type { UserShortcuts } from '@unocss/core'
export const shortcuts = {
  'sc-flex-xy': 'flex items-center justify-center',
  'sc-flex-center-xy': 'items-center justify-center', // 上下左右居中
  'sc-flex-center-y-start-x': 'flex items-center justify-start', // 上下居中，居左
  'sc-web-main': 'max-w-1410 m-a', // 网站默认宽度和样式
  'sc-main-width': 'max-w-1410',
} as UserShortcuts<{}>
