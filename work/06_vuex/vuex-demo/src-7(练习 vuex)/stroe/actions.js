import axios from "axios"
import {
  SEARCHNAME,
  REQING,
  // REQSUCCSEEHASDATA,
  // REQSUCCSEENODATA,
  REQSUCCSEE,
  REQERROR} from "./mutation_types"

export default {
  searchName(store,{searchName}){
    store.commit(SEARCHNAME,{searchName})
  },
  async getUsers(store){
    //请求中
    store.commit(REQING)
    try {
      const url = `https://api.github.com/search/users`
      const response = await axios({
        method:"get",
        url,
        params:{q:store.state.searchName}
      })


      const users = response.data.items.map( item =>({
        href:item["html_url"],
        avator:item["avatar_url"],
        name:item["login"]
      }))

      store.commit(REQSUCCSEE,{users})
      /*if(users.length === 0){
          //请求成功(无数据)
        store.commit(REQSUCCSEENODATA,{users})
      }else {
        //请求成功(有数据)
        store.commit(REQSUCCSEEHASDATA,{users})
      }*/

    }catch (error) {
      //请求失败
      store.commit(REQERROR,{error})
    }


  }
}
