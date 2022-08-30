import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	ssr: false,
	target: 'static',
	head: {
		title: 'Nicolas Marcondes',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	modules: ['vue-notion/nuxt', 'bootstrap-vue/nuxt'],
	bootstrapVue: {
		icons: true,
	},
	build: {
		babel: {
			compact: true,
		},
	},
})
