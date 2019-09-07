<template>
  <div class="row">
    <h3 v-if="firstShow" style="text-align: center">请输入查询用户</h3>
    <h3 v-else-if="loading" style="text-align: center" >loading...</h3>
    <div v-else class="card" v-for="card in cards">
      <a :href="card.html_url" target="_blank">
        <img :src="card.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{card.login}}</p>
    </div>
  </div>
</template>

<script>
    import Pubsub from "pubsub-js"
    import axios from  "axios"
    export default {
        name: "list",
        data(){
          return {
            firstShow:true,
            loading:true,
            cards:[]
          }
        },
        mounted(){
          Pubsub.subscribe("notifyList", async (type,searchname)=>{
            this.firstShow = false;
            this.loading = true;
            const  res =  await  axios.get(`https://api.github.com/search/users?q=${searchname}`)
            this.cards = res.data.items
            this.loading = false
          })
        }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
