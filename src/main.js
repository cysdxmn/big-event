import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index.js'   // 正常是@/router/index.js，因为是index.js【默认调用的就是这个js文件】，所以可以省略

import { createPinia } from 'pinia';    // 引入 Pinia 状态管理库

import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
