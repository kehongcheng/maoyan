import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.filter('toWH', function (value) {
  value = value.replace('w.h', '128.180')
  return value
})

// 注册Vant全局组件
import { Notify } from 'vant'
Vue.use(Notify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
