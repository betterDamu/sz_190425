<template>
  <div id="app">
     <span @click="addOne">{{count}}</span>
     <span>这是一个 <strong style="color: red">{{flag}}</strong> 数</span>
     <p>{{fullName}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count;
    },
    fullName(){
      return this.$store.getters.fullName;
    },
    flag(){
      return this.$store.getters.flag;
    }
  },
  methods:{
    addOne(){
      this.$store.commit("add",{msg:"msg",msg2:"msg2"})
    }
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
