import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const state = reactive({
	isLoggedIn: false,
	isSidebarOpen: false,
	isLoginModalOpen: false
})

const isLoggedIn = computed(() => state.isLoggedIn)

const isCurrentRoute = (path: string): boolean => {
	const route = useRoute()
	return route.path === path
}

const isSidebarOpen = computed(() => state.isSidebarOpen)
const toggleSidebarOpen = (): void => {
	state.isSidebarOpen = !state.isSidebarOpen
}

const uiState = {
	isLoggedIn,
	isCurrentRoute,
	isSidebarOpen,
	toggleSidebarOpen
}

export default uiState
