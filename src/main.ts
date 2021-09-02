import { createApp } from 'vue'
import router from '@/code/router'
import './index.css'
import App from './App.vue'
import uiState from '@/code/ui-state'

router.beforeEach((to, from, next) => {
    if (!uiState.isLoggedIn.value && to.meta.requiresAuth) next({ name: 'Login' })
    else next()
})

console.log('Routes: ', router.getRoutes())

createApp(App).use(router).mount('#app')
