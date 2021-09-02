import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import elementUI from 'element-ui'
import util from './util/tools'
import Vuetify from 'vuetify/lib'
import './assets/sass/index.sass'
import './assets/sass/datepicker.sass'
import 'element-ui/lib/theme-chalk/index.css'
import 'vuetify/dist/vuetify.min.css'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import './icons'
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(Vuetify)
Vue.use(GeminiScrollbar)
Vue.prototype.$util = util
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
