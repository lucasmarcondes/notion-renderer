<template>
	<nav class="menu-bar">
		<div>{{ title }}</div>
		<span class="link-container">
			<div 
				v-for="page in pages" 
				class="menu-item" 
				:class="{ bold: page == currentPage }"
				@click="setCurrentPage(page)"
			>
				{{ page.title }}
			</div>
		</span>
	</nav>
</template>

<script setup lang="ts">
	import { title, pages } from "../config"
	import { useStore } from "../store"
	const { currentPage, setCurrentPage } = useStore()
</script>

<style>
	.menu-bar {
		border: 1px solid rgb(77, 77, 77);
		border-radius: 2.5px;
		display: flex;
		padding: 1em 3em 1em 3em;
		justify-content: space-between;
	}
	.link-container {
		display: flex;
	}
	.menu-item {
		padding-left: 3em;
	}
	.bold {
		font-weight: bold;
	}
</style>