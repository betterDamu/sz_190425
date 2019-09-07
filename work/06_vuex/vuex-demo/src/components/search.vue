<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim.lazy="searchName"/>
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "search",
        computed:{
          searchName:{
            get(){
              return this.$store.state.searchName
            },
            set(searchName){
              this.$store.dispatch("searchName",{searchName})
            }
          }
        },
        methods:{
          ...mapActions(["getUsers"])
        }
    }
</script>

<style scoped>

</style>
