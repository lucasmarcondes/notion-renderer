<template>
	<NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script>
	export default {
		async asyncData({ $notion }) {
			const blockMap = await $notion.getPageBlocks('abe8da9f693f431c88207ee143fa89be')
			return { blockMap }
		},
	}
</script>

<style>
	@import 'vue-notion/src/styles.css'; /* optional Notion-like styles */
</style>
