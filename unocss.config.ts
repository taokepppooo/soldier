import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { cssTypes, shortcuts, rules, fonts } from './config/unocss/types'

export default defineConfig({
  shortcuts,
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        color: 'inherit',
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
    presetWebFonts(fonts),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules,
  preflights: [
    {
      getCSS: () => cssTypes,
    },
  ],
})
