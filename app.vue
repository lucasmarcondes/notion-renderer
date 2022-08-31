<template>
	<Header />
	<NotionRenderer :blockMap="data" fullPage prism />
</template>

<script setup lang="ts">
	import { pages } from "./config"

	const pageId = pages.find(p => p.homepage)?.id
	const { $notion } = useNuxtApp()
	const { data } = await useAsyncData("notion", () => $notion.getPageBlocks(pageId))
</script>