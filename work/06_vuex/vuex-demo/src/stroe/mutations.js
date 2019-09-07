import {
  SEARCHNAME,
  REQING,
  REQSUCCSEEHASDATA,
  REQSUCCSEENODATA,
  REQERROR} from "./mutation_types"

export default {
  [SEARCHNAME](state,{searchName}){
    state.searchName = searchName
  },
  [REQING](state){
    state.firstShow = false;
    state.loading = true
  },
  [REQSUCCSEEHASDATA](state,{users}){
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
  },
  [REQERROR](state,{error}){
    state.firstShow = false;
    state.loading = false;
    state.error = error;
  }

}
