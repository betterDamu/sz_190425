<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim="serachName" />
      <button @click="notifyList">Search</button>
    </div>
  </section>
</template>

<script>
    import Pubsub from "pubsub-js"
    export default {
        name: "search",
        data(){
          return {
            serachName:""
          }
        },
        methods:{
          notifyList(){
            Pubsub.publish("notifyList",this.serachName);
            this.serachName =""
          }
        }
    }
</script>

<style scoped>

</style>
