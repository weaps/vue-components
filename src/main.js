import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import util from './util/tools'
import './assets/sass/datepicker.sass'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.prototype.$util = util
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
