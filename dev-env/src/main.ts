import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setTheme } from '../../packages/ui/src'
import App from './App.vue'

import 'virtual:uno.css'

import 'real-ui-dev/styles/main.scss'
import 'light-theme'

setTheme('real-theme-light')

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
