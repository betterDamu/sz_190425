import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    add(state,obj){
      state.count++
      console.log(obj.msg,obj.msg2)
    }
  }
})
export default store
