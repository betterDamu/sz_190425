import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App'
import A from "@/components/A.vue"
import B from "@/components/B.vue"


//使用路由插件
Vue.use(VueRouter)
Vue.config.productionTip = false

//定义路由
const routes = [
  { path: '/A', component: A },
  { path: '/B', component: B }
]
//定义路由器
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
