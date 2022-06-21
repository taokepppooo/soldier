/*
 * @Author: taoke
 * @Date: 2022-06-21 18:01:20
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-21 18:04:38
 * @Description:
 * @FilePath: \soldier\types\unocss\fonts.ts
 */
import type { WebFontsOptions } from '@unocss/preset-web-fonts'
export const fonts = {
  provider: 'google', // default provider
  fonts: {
    // these will extend the default theme
    sans: 'Roboto',
    mono: [
      'Fira Code',
      {
        name: 'Fira Mono',
        weights: ['400', '700'],
      },
    ],
    roboto: [
      {
        name: 'Roboto',
        weights: ['400'],
      },
    ],
    noto: [
      {
        name: 'Noto Sans Simplified Chinese',
        weights: ['700'],
      },
    ],
    // custom ones
    lobster: 'Lobster',
    lato: [
      {
        name: 'Lato',
        weights: ['400', '700'],
        italic: true,
      },
      {
        name: 'sans-serif',
        provider: 'none',
      },
    ],
  },
} as WebFontsOptions
