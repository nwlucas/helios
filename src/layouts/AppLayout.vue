<script setup lang="ts">
	import DefaultLayout from './stub/DefaultLayout.vue'
	import { markRaw, watch } from 'vue'
	import { useRoute } from 'vue-router'

	const layout = markRaw(DefaultLayout)
	const route = useRoute()

	console.log('Current path: ', route.path)

	watch(
		() => route.meta,
		async (meta) => {
			try {
				const component = await import(`./stub/${meta.layout}.vue`)
				layout.value = component?.default || DefaultLayout
			} catch (e) {
				layout.value = DefaultLayout
			}
		},
		{ immediate: true }
	)
</script>

<template>
	<component :is="layout"> <slot /> </component>
</template>
