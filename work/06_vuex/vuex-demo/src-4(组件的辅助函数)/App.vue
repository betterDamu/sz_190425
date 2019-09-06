<template>
  <div id="app">
     <span @click="addOne">{{count}}</span>
     <span>这是一个 <strong style="color: red">{{flag}}</strong> 数</span>
     <p>{{fullName}}</p>
     <button @click="add(2)">+</button>
     <button @click="dec(2)">-</button>
  </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations } from 'vuex'
  export default {
    name: 'App',
    computed:{
      ...mapState(["count"]),
      ...mapGetters(["fullName","flag"])
    },
    methods:{
      ...mapMutations(["addOne","add","dec"])
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
