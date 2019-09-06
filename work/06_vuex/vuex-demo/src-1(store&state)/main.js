import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

/*
  1. 当仓库被建立完毕 并且 仓库被注册到vue的根组件中后
      仓库中的配置会装绑给仓库这个实例对象
      所有vue组件都会有一个$store属性 这个$store属性指向仓库对象
 */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
