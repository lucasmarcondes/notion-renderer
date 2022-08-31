<template>
	<nav class="notion menu-bar">
		<div class="title">{{ title }}</div>
		<span class="menu-item-container">
			<div 
				v-for="(page, index) in pages" 
				class="menu-item" 
				:class="{ bold: index == activeIndex }"
				@click="changePage(page, index)"
			>
				{{ page.title }}
			</div>
		</span>
	</nav>
</template>

<script setup>
	import { ref } from "vue"
	import { title, pages } from "../config"
	const emit = defineEmits(["page-change"])
	const activeIndex = ref(0)
	const changePage = (page, index) => {
		emit("page-change", page)
		activeIndex.value = index
	}
</script>

<style>
	.menu-bar {
		background-color: rgb(228, 228, 228);
		border-radius: 5px;
		display: flex;
		margin: 1em;
		padding: 1em 3em 1em 3em;
		justify-content: space-between;
	}
	.menu-item-container {
		display: flex;
	}
	.menu-item {
		margin-left: 3em;
	}
	.menu-item:hover {
		cursor:pointer
	}
	.title {
		font-size: large;
	}
	.bold {
		font-weight: bold;
	}
</style>