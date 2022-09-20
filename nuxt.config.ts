import { unocssConfig } from './config/unocss'

export default {
  modules: ['@unocss/nuxt'],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js' },
        { src: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@unocss/reset/normalize.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css',
        },
      ],
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
      {
        path: '~/components/layouts',
        global: true,
      },
    ],
  },
  // unocss
  unocss: unocssConfig,
  // css
  css: ['~/assets/css/index.css'],
  // vite plugins
  vite: {
    optimizeDeps: {
      exclude: ['@unocss/nuxt'],
    },
  },
}
