import Vue from 'vue'
import H5 from './H5.vue'
import router from './router/h5.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(H5)
}).$mount('#app')
