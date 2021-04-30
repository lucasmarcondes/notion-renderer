<template>
	<div>
		<notion-renderer :blockMap="blockMap" fullPage />
	</div>
</template>

<script>
	import { NotionRenderer, getPageBlocks } from 'vue-notion'

	export default {
		components: { NotionRenderer },
		data: () => ({ blockMap: null }),
		async created() {
			// get Notion blocks from the API via a Notion pageId
			this.blockMap = await getPageBlocks('abe8da9f693f431c88207ee143fa89be', 'https://notion-api.splitbee.io/v1')
		},
	}
</script>

<style>
	@import 'vue-notion/src/styles.css'; /* optional Notion-like styles */
</style>
