<template>
	<div id="app">
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
	</div>
</template>

<style lang="scss">
</style>
