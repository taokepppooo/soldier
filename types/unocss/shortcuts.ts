/*
 * @Author: taoke
 * @Date: 2022-06-21 13:53:57
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-28 16:43:55
 * @Description:
 * @FilePath: \soldier\types\unocss\shortcuts.ts
 */
import type { UserShortcuts } from '@unocss/core'
export const shortcuts = {
  'sc-flex-xy': 'flex items-center justify-center',
  'sc-flex-center-xy': 'items-center justify-center', // 上下左右居中
  'sc-flex-center-y-start-x': 'flex items-center justify-start', // 上下居中，居左
  'sc-web-main': 'min-w-1280 w-80% m-a', // 网站默认宽度和样式
} as UserShortcuts<{}>
