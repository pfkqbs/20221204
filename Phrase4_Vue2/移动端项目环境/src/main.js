import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

import axios from 'axios'
// 设置请求头
axios.defaults.baseURL="https://api.it120.cc/xiaochengxu"
Vue.prototype.$http=axios;

import router from './router'

import store from './store'

Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
