import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import elementUI from 'element-ui'
import util from './util/tools'
import './assets/sass/datepicker.sass'
import 'element-ui/lib/theme-chalk/index.css'
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(GeminiScrollbar)
console.log(new Vue().$xxx)
Vue.prototype.$util = util
Vue.prototype.$xxx = 'xxxxxxxxxxxxxxxxxxxxxxxx'
console.log(Vue.prototype.$util)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')