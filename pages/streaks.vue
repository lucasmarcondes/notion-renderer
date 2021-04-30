<template>
	<div>
		<streaks-table :data="tableData" />
	</div>
</template>

<script>
	import { getPageTable } from 'vue-notion'

	export default {
		data() {
			return {
				tableData: null,
			}
		},
		async created() {
			this.tableData = await getPageTable('6f15fae64cd04355ad0a71608b0548a1', 'https://notion-api.splitbee.io/v1')
			this.tableData.forEach(item => delete item.id)
		},
	}
</script>

<style></style>
