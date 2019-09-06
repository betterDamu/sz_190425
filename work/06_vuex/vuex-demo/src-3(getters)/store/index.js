import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0,
    firstName:"周",
    lastName:"琦"
  },
  getters:{
    fullName(state){
      return state.firstName +"-"+ state.lastName
    },
    flag(state){
       return state.count%2 === 0 ? "偶":"奇"
    }
  },
  mutations:{
    add(state,obj){
      state.count++
      console.log(obj.msg,obj.msg2)
    }
  }
})
export default store
