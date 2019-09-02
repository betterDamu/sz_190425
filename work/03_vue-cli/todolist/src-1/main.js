import Vue from 'vue'
import App from "./App"
Vue.config.productionTip = false

//总线bus
Vue.prototype.delTodoBus=new Vue()
Vue.prototype.updateCheckedBus=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App)
})

// template:
//   <div id="app">
//     <App></App>
//   </div>
