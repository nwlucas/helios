import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const root = {
	path: '/',
	component: () => import('@/features/dashboard/pages/Dashboard.vue'),
	meta: { layout: 'DefaultLayout' }
}
// const routes = setupLayouts(generatedRoutes)
const routes = generatedRoutes
routes.push(root)

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
