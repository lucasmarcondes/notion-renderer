<template>
	<nav class="menu-bar">
		<div>Title</div>
		<span class="link-container"><div class="menu-item" v-for="link in links">{{ link.title }}</div></span>
	</nav>
</template>

<script setup>
	const links = [
		{ title: "Item 1" },
		{ title: "Item 2" },
		{ title: "Item 3" },
	]
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
</style>