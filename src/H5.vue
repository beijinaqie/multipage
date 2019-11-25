<template>
  <div id="app">
    <div id="nav">
			这是h5
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
	font-size: 0.16rem;
}
</style>
