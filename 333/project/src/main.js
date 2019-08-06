import Vue from 'vue'
import App from './App.vue'
import store from './vuex'

//后端ip
const ip = 'http://10.3.141.62:1904'
Vue.prototype.$ip = ip
//字体图标
import './icon/iconfont.css'
//引入router实例
import router from './routers'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注入vue实例
  router,
  store,
}).$mount('#app')
