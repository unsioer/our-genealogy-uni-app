import Vue from 'vue'
import App from './App'
import store from 'store/store.js'

// 挂载vuex
Vue.prototype.$store = store;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store//在全局vue实例挂载store
})
app.$mount()
