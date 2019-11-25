import Vue from 'vue'
import Web from './Web.vue'
import router from './router/web.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Web)
}).$mount('#app')
