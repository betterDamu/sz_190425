import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

/* 注意点
  1. 当仓库被建立完毕 并且 仓库被注册到vue的根组件中后
      仓库中的配置会装绑给仓库这个实例对象
      所有vue组件都会有一个$store属性 这个$store属性指向仓库对象
  2.
    vuex state中的数据确实是响应式的
    我们在使用仓库的数据时 为了避免一些脏数据的出现 使用一定会转存一份
    当我们转存一份后 数据的响应式功能就丢失
    这样!! 我就必须使用计算属性进行转存
*/
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
