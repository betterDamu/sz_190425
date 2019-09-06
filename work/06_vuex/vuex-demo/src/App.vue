<template>
  <div id="app">
     <span @click="addOne">{{count}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    addOne(){
      // 提交一个mutation
      this.$store.commit("add")
      // this.$store.state.count++
      // this.count++
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
