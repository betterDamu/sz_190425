import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App'
import router from "@/router"


Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
