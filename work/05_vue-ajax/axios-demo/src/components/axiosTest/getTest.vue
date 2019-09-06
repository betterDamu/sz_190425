<template>
    <div>测试axios的get请求</div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "getTest",
        created(){
          axios.get("https://api.github.com/search/repositories",{
            params: {
              q: "xfz",
              sort:"stars",
              order:"desc"
            }
          }).then((res)=>{console.log(res)},(err)=>{console.log(err)})

          /*axios({
            method: 'get',
            url: "https://api.github.com/search/repositories",
            params: {
              q: "damu",
              sort:"stars",
              order:"desc"
            }
          })*/
        }
    }
</script>

<style scoped>

</style>
