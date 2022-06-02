/*
 * @Author: taoke
 * @Date: 2022-06-02 17:54:28
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-02 18:15:58
 * @Description: 
 * @FilePath: \soldier\plugins\element-plus.ts
 */
import { defineNuxtPlugin } from '#app'
import * as ElementPlus from 'element-plus/dist/index.full'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus)
})