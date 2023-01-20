import vueJsx from '@vitejs/plugin-vue-jsx'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default {
  ssr: true,
  experimental: {
    reactivityTransform: true,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia()`
          'defineStore',
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@nuxtjs/critters',
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0',
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
      {
        path: '~/components/pages',
        global: true,
      },
    ],
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/less/index.less',
    '~/assets/font/iconfont.css',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      vueCompilerOptions: {
        jsxTemplates: true,
        experimentalRfc436: true,
      },
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
    plugins: [
      vueJsx(),
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore nuxt-security is conditional
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        value: {
          'default-src': ["'self'"],
          'base-uri': ["'self'"],
          'connect-src': ["'self'", 'https:', 'http:', 'wss:', 'ws:'],
          'font-src': ["'self'"],
          'form-action': ["'none'"],
          'frame-ancestors': ["'none'"],
          'img-src': ["'self'", 'https:', 'http:', 'data:'],
          'media-src': ["'self'", 'https:', 'http:'],
          'object-src': ["'none'"],
          'script-src': ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", "'unsafe-inline'"],
          'upgrade-insecure-requests': true,
        },
        route: '/**',
      },
    },
    rateLimiter: false,
  },
}
