import { createApp } from 'vue'
import 'flag-icons/css/flag-icons.min.css';
import './css/app.scss';
import App from '@/App.vue'
import { setupPlugins } from './plugins'

const app = createApp(App)

setupPlugins(app)

app.mount('#app')
