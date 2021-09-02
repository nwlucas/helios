<script setup lang="ts">
	import NavBar from '@/components/NavBar.vue'
	import SearchHeader from '@/components/SearchHeader.vue'
</script>

<template>
	<div class="h-screen flex overflow-hidden bg-gray-100">
		<NavBar />
		<div class="flex flex-col w-0 flex-1 overflow-hidden">
			<SearchHeader />
			<slot />
		</div>
	</div>
</template>
