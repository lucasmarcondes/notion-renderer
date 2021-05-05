<template>
	<div>
		<template>
			<b-navbar toggleable="sm" type="dark" variant="dark">
				<b-navbar-brand>Nicolas Marcondes</b-navbar-brand>

				<b-navbar-toggle target="navbar-toggle-collapse">
					<template #default="{ expanded }">
						<b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
						<b-icon v-else icon="chevron-bar-down"></b-icon>
					</template>
				</b-navbar-toggle>

				<b-collapse id="navbar-toggle-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item> <nuxt-link class="nav-link" to="/" prefetch>Home</nuxt-link> </b-nav-item>
						<b-nav-item> <nuxt-link class="nav-link" to="/study-streams" prefetch>Study Streams</nuxt-link> </b-nav-item>
						<b-nav-item> <nuxt-link class="nav-link" to="/about" prefetch>About</nuxt-link> </b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</template>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.nav-link {
		color: white;
		font-weight: bold;
	}
</style>
