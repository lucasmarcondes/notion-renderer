<template>
	<div>
		<streaks-table :data="tableData" />
	</div>
</template>

<script>
	export default {
		async asyncData({ $notion }) {
			// use Notion module to get Notion blocks from the API via a Notion pageId
			const tableData = await $notion.getPageTable('6f15fae64cd04355ad0a71608b0548a1')
			tableData.forEach(item => delete item.id)
			return { tableData }
		},
	}
</script>

<style></style>
