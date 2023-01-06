import {
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

import { cssTypes } from './types'
import { shortcuts } from './types/shortcuts'
import { rules } from './types/rules'
import { fonts } from './types/fonts'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

export const unocssConfig = {
  shortcuts,
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts(fonts),
  ],
  transformers: [transformerDirectives()],
  rules,
  preflights: [
    {
      getCSS: () => cssTypes,
    },
  ],
} as UnocssNuxtOptions
