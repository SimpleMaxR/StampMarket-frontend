import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import routes from './router/router'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
    .use(Antd)
    .use(pinia)
    .use(routes)
    .mount('#app')
