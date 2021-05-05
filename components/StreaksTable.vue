<template>
	<div>
		<b-table :items="data"></b-table>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				required: true,
				type: null,
			},
		},
	}
</script>
