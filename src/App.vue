<template>
	<Header @page-change="setNotionPage"/>
	<NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>
<script setup>
	import Header from "./Header.vue"
	import { NotionRenderer, getPageBlocks } from "vue3-notion"
	import { ref, onMounted, watch } from "vue"
	import { pages } from "../config"
	
	const data = ref()
	
	onMounted(async () => {
		const homepage = pages.find( item => item.homepage)
		setNotionPage(homepage)
	})

	const setNotionPage = async page => {
		data.value = await getPageBlocks(page.id)
		document.getElementById("pageTitle").innerHTML = page.title
	}

</script>