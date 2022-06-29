import { defineNuxtConfig } from 'nuxt'
import { unocssConfig } from './config/unocss'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@unocss/runtime' },
        // { src: '//cdn.jsdelivr.net/npm/element-plus@2.2.2' },
      ],
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: '//cdn.jsdelivr.net/npm/element-plus@2.2.2/dist/index.css',
        // },
      ],
    },
  },
  components: {},
  // https://github.com/nuxt/framework/issues/1292
  // build: {
  //   transpile: ['element-plus'],
  // },
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
})
