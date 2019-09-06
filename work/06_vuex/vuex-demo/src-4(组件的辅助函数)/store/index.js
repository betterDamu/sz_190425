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
    addOne(state){
      state.count++
    },
    add(state,step){
      state.count += step
    },
    dec(state,step){
      state.count -= step
    }
  }
})
export default store
