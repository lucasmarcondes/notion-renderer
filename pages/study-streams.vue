<template>
	<div class="streams-container">
		<notion-renderer :blockMap="blockMap" fullPage />
		<p>{{ convertedTime1 }} - {{ convertedTime2 }} ({{ userTimeZone }})</p>
		<streaks-table class="streaks-table" :data="tableData" />
	</div>
</template>

<script>
	import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
	import { set } from 'date-fns'

	export default {
		data() {
			return {
				time1: set(new Date(), { hours: 8, minutes: 0 }),
				time2: set(new Date(), { hours: 11, minutes: 0 }),
				nicolasTz: 'America/Los_Angeles',
			}
		},
		computed: {
			userTimeZone() {
				return Intl.DateTimeFormat().resolvedOptions().timeZone
			},
			convertedTime1() {
				const utcDate = zonedTimeToUtc(this.time1, this.nicolasTz)
				const zonedDate = utcToZonedTime(utcDate, this.userTimeZone)
				return format(zonedDate, 'p')
			},
			convertedTime2() {
				const utcDate = zonedTimeToUtc(this.time2, this.nicolasTz)
				const zonedDate = utcToZonedTime(utcDate, this.userTimeZone)
				return format(zonedDate, 'p')
			},
		},
		async asyncData({ $notion }) {
			const blockMap = await $notion.getPageBlocks('bed0af002ce748309c109a922147ee11')
			let tableData = await $notion.getPageTable('6f15fae64cd04355ad0a71608b0548a1')
			tableData.forEach(item => delete item.id)
			tableData.sort((a, b) => (a.Points != b.Points ? b.Points - a.Points : a.Name.localeCompare(b.Name)))
			return { tableData, blockMap }
		},
	}
</script>

<style>
	.streams-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5px;
	}
	.streaks-table {
		width: 60vw;
		border: 1px solid lightgray;
		border-radius: 5px;
	}
</style>
