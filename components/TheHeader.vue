<template>
	<div>
		<b-navbar type="dark" variant="dark">
			<b-navbar-nav>
				<b-nav-item>
					<nuxt-link class="nav-link" to="/" prefetch>Home</nuxt-link>
				</b-nav-item>
				<b-nav-item>
					<nuxt-link class="nav-link" to="/streaks" prefetch>Streaks</nuxt-link>
				</b-nav-item>
				<b-nav-item>
					<nuxt-link class="nav-link" to="/about" prefetch>About</nuxt-link>
				</b-nav-item>
			</b-navbar-nav>
		</b-navbar>
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
