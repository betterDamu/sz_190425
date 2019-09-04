<template>
    <div>
      <ul>
        <li v-for="item in list">
          <!--<a href="#">{{item.title}}</a>-->
          <router-link :to="`/home/message/messageDetail/${item.id}`" >{{item.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
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
        mounted(){
          setTimeout(()=>{
            this.list = data
          },2000)
        }
    }
</script>

<style scoped>

</style>
