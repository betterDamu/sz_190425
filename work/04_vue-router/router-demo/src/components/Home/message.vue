<template>
    <div>
      <ul>
        <li style="margin-top: 5px" v-for="item in list">
          <!--<a href="#">{{item.title}}</a>-->
          <!--<router-link :to="`/home/message/messageDetail/${item.id}`" >{{item.title}}</router-link>-->
          {{item.title}}
          <button style="margin-left: 5px" @click="pushRoute(item.id)">push</button>
          <button style="margin-left: 5px" @click="replaceRoute(item.id)">replace</button>
        </li>
      </ul>
      <router-view></router-view>
      <br>
      <button @click="backRoute">back</button>
    </div>
</template>

<script>
    const data = [
      {id:0,title:"msg0"},
      {id:1,title:"msg1"},
      {id:2,title:"msg2"},
      {id:3,title:"msg3"},
      {id:4,title:"msg4"},
      {id:5,title:"msg5"}
    ]

    export default {
        name: "message",
        data(){
          return {
            list:[]
          }
        },
        methods:{
          pushRoute(id){
            this.$router.push(`/home/message/messageDetail/${id}`)
          },
          replaceRoute(id){
            this.$router.replace(`/home/message/messageDetail/${id}`)
          },
          backRoute(){
            this.$router.back()
          }
        },
        mounted(){
          setTimeout(()=>{
            this.list = data
          },2000)
        }
    }
</script>

<style scoped>

</style>
