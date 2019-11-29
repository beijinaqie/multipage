import Vue from 'vue'
import H5 from './H5.vue'
import router from './router/h5.js'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// vue-i18n
import VueI18n from "vue-i18n"

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('LANGUAGE') === 'English' ? 'en' : 'zh',
	messages:{
		'zh': require('@/assets/lang/zh.js'),
		'en': require('@/assets/lang/en.js')
	}
})

new Vue({
  router,
	i18n,
  render: h => h(H5)
}).$mount('#app')
