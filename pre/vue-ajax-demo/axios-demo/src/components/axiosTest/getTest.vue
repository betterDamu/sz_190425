<template>
  <div>测试axios的get请求</div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "getTest",
        created(){
          const url = 'https://api.github.com/search/repositories?q=js&sort=stars&order=desc';
          // const simpleUrl = 'https://api.github.com/search/repositories'
          const simpleUrl = 'https://api.github.com/repos/betterDamu/sz_190425/issues'

          axios({
            method: 'get',
            url: simpleUrl,
            params: {
              q: "js",
              sort:"stars",
              order:"desc"
            }
          }).then((response)=>{
            console.dir(response)
          },(err)=>{
            console.dir(err)
          })

          /*axios.get(simpleUrl, {
            params: {
              q: "js",
              sort:"stars",
              order:"desc"
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });*/

         /* axios.get(url).then((response)=>{
            console.dir(response)
          },(err)=>{
            console.dir(err)
          })*/
        }
    }
</script>

<style scoped>

</style>
