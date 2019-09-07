import {
  SEARCHNAME,
  REQING,
  /*REQSUCCSEEHASDATA,
  REQSUCCSEENODATA,*/
  REQSUCCSEE,
  REQERROR} from "./mutation_types"

export default {
  [SEARCHNAME](state,{searchName}){
    state.searchName = searchName
  },
  [REQING](state){
    state.firstShow = false;
    state.loading = true
  },
  [REQSUCCSEE](state,{users}){
    state.firstShow = false;
    state.loading = false;
    state.error = null;
    state.users = users;
    state.searchName="";
  },
  /*[REQSUCCSEEHASDATA](state,{users}){
    state.firstShow = false;
    state.loading = false;
    state.error = null;
    state.users = users
  },
  [REQSUCCSEENODATA](state,{users}){
    state.firstShow = false;
    state.loading = false;
    state.error = null;
    state.users = users
  },*/
  [REQERROR](state,{error}){
    state.firstShow = false;
    state.loading = false;
    state.error = error;
  }

}
