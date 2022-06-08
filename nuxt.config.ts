/*
 * @Author: taoke
 * @Date: 2022-05-19 18:09:01
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-08 17:03:42
 * @Description:
 * @FilePath: \soldier\nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt'
import { unocssConfig } from './config/unocss'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  // app: {
  //   head: {
  //     script: [
  //       { src: '//cdn.jsdelivr.net/npm/element-plus@2.2.2' }
  //     ],
  //     link: [
  //       { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/element-plus@2.2.2/dist/index.css' }
  //     ]
  //   }
  // },
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
    // optimizeDeps: {
    //   exclude: ['element-plus']
    // }
  },
})
