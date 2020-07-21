import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FullPage from 'vue-fullpage.js'

Vue.use(FullPage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')