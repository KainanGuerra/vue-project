import { createPinia } from 'pinia'
import { Quasar, Loading, Notify, Dialog, LocalStorage, type QuasarPluginOptions } from 'quasar'
import type { App } from 'vue'
import router from './router'
import cors from 'cors'

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css';
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css';
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
