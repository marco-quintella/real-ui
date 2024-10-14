import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setTheme } from '../../src'
import App from './App.vue'

import '../../src/styles/theme.sass'
import '../../src/styles/main.sass'

setTheme('real-theme-light')

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
