<template>
	<div>
		<notion-renderer :blockMap="blockMap" fullPage />
	</div>
</template>
<script>
	export default {
		async asyncData({ $notion }) {
			const blockMap = await $notion.getPageBlocks('67c04921ccce4267a72013a1b28cb946')
			return { blockMap }
		},
	}
</script>
