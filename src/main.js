import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FullPage from 'vue-fullpage.js'
import './common/component.css'
import "./common/common"
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

Vue.use(Antd);
Vue.use(FullPage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
