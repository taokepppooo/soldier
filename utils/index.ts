/*
 * @Author: taoke
 * @Date: 2022-06-29 16:06:06
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-29 16:06:06
 * @Description:
 * @FilePath: \soldier\utils\index.ts
 */
import type { App, Plugin } from 'vue'
export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as T & Plugin
}
