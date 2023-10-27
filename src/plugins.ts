import { createPinia } from 'pinia'
import { Quasar, Loading, Notify, Dialog, LocalStorage, type QuasarPluginOptions } from 'quasar'
import type { App } from 'vue'
import router from './router'
import cors from 'cors'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


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
