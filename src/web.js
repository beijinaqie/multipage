import Vue from 'vue'
import Web from './Web.vue'
import router from './router/web.js'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// vue-i18n
import VueI18n from "vue-i18n"
// iview
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import en from 'view-design/dist/locale/en-US'
import zh from 'view-design/dist/locale/zh-CN'
// vuex
import * as store from '@/vuex/index.js'
// axios
import axios from '@/api/index.js';

Vue.prototype.$store = store
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueI18n)

// iview 国际化配置
const languageZh = require('@/assets/lang/zh.js')
const languageEn = require('@/assets/lang/en.js')
const messages = {
  en: Object.assign(languageEn, en),
  zh: Object.assign(languageZh, zh),
}
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages
})

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})


new Vue({
  router,
	i18n,
  render: h => h(Web)
}).$mount('#app')
