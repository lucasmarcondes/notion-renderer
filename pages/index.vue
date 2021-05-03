<template>
	<div>
		<b-jumbotron header="Hey! I'm Nicolas," lead="come study with me :)">
			<p>{{ convertedTime1 }} - {{ convertedTime2 }} ({{ userTimeZone }})</p>
		</b-jumbotron>
		<notion-renderer :blockMap="blockMap" fullPage />
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
			const blockMap = await $notion.getPageBlocks('98e9e058eebc47a4bc38070c05ff2d8f')
			return { blockMap }
		},
	}
</script>
