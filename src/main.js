import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import elementUI from 'element-ui'
import utils from './utils/tools'
import './assets/sass/index.sass'
import './assets/sass/datepicker.sass'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.prototype.$utils = utils
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
