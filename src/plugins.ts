import { createPinia } from 'pinia'
import { Quasar, Loading, Notify, Dialog, LocalStorage, type QuasarPluginOptions } from 'quasar'
import type { App } from 'vue'
import router from './router'
import cors from 'cors'
export const QuasarOptions: Partial<QuasarPluginOptions> = {
  plugins: {
    Loading,
    Notify,
    Dialog,
    LocalStorage
  }
}
export const setupPlugins = (app: App<Element>) => {
  app.use(cors);
  app.use(Quasar, QuasarOptions);
  app.use(createPinia());
  app.use(router);
}
