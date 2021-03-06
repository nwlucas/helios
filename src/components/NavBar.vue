<script lang="ts" setup>
	import uiState from '@/code/ui-state'
	import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
	import {
		CalendarIcon,
		ChartBarIcon,
		BookOpenIcon,
		ServerIcon,
		HomeIcon,
		InboxIcon,
		XIcon
	} from '@heroicons/vue/outline'

	const navigation = [
		{ name: 'Dashboard', href: '/features/dashboard', icon: HomeIcon },
		{ name: 'Tickets', href: '/features/tickets', icon: InboxIcon },
		{ name: 'Nodes', href: '/features/nodes', icon: ServerIcon },
		{ name: 'Wiki', href: '/features/wiki', icon: BookOpenIcon },
		{ name: 'Calendar', href: '/calendar', icon: CalendarIcon },
		{ name: 'Reports', href: '/features/reports', icon: ChartBarIcon }
	]
</script>

<template>
	<TransitionRoot as="template" :show="uiState.isSidebarOpen.value">
		<Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="uiState.toggleSidebarOpen">
			<TransitionChild
				as="template"
				enter="transition-opacity ease-linear duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="transition-opacity ease-linear duration-300"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
			</TransitionChild>
			<TransitionChild
				as="template"
				enter="transition ease-in-out duration-300 transform"
				enter-from="-translate-x-full"
				enter-to="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leave-from="translate-x-0"
				leave-to="-translate-x-full"
			>
				<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
					<TransitionChild
						as="template"
						enter="ease-in-out duration-300"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="ease-in-out duration-300"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<div class="absolute top-0 right-0 -mr-12 pt-2">
							<button
								type="button"
								class="
									ml-1
									flex
									items-center
									justify-center
									h-10
									w-10
									rounded-full
									focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
								"
								@click="uiState.toggleSidebarOpen"
							>
								<span class="sr-only">Close sidebar</span>
								<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
							</button>
						</div>
					</TransitionChild>
					<div class="flex-shrink-0 flex items-center px-4">
						<img class="h-8 w-auto" src="../assets/dtlr-logo.svg" alt="Workflow" />
					</div>
					<div class="mt-5 flex-1 h-0 overflow-y-auto">
						<nav class="px-2 space-y-1">
							<li
								v-for="item in navigation"
								:key="item.name"
								:class="[
									uiState.isCurrentRoute(item.href)
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'group flex items-center px-2 py-2 text-base font-medium rounded-md'
								]"
							>
								<component
									:is="item.icon"
									:class="[
										uiState.isCurrentRoute(item.href)
											? 'text-gray-300'
											: 'text-gray-400 group-hover:text-gray-300',
										'mr-4 flex-shrink-0 h-6 w-6'
									]"
									aria-hidden="true"
								/>
								<router-link :to="item.href">{{ item.name }}</router-link>
							</li>
						</nav>
					</div>
				</div>
			</TransitionChild>
			<div class="flex-shrink-0 w-14" aria-hidden="true">
				<!-- Dummy element to force sidebar to shrink to fit close icon -->
			</div>
		</Dialog>
	</TransitionRoot>

	<!-- Static sidebar for desktop -->
	<div class="hidden md:flex md:flex-shrink-0">
		<div class="flex flex-col w-64">
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			<div class="flex-1 flex flex-col min-h-0">
				<div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
					<img class="h-12 w-auto" src="../assets/DTLR-Logo-White.svg" alt="Workflow" />
				</div>
				<div class="flex-1 flex flex-col overflow-y-auto">
					<nav class="flex-1 px-2 py-4 bg-gray-800 space-y-1">
						<li
							v-for="item in navigation"
							:key="item.name"
							:class="[
								uiState.isCurrentRoute(item.href)
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
							]"
						>
							<component
								:is="item.icon"
								:class="[
									uiState.isCurrentRoute(item.href)
										? 'text-gray-300'
										: 'text-gray-400 group-hover:text-gray-300',
									'mr-3 flex-shrink-0 h-6 w-6'
								]"
								aria-hidden="true"
							/><router-link :to="item.href"> {{ item.name }}</router-link>
						</li>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>
