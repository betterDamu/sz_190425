<template>
  <div>测试axios的post请求</div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "getPost",
        created() {
          axios.post('https://api.github.com/repos/betterDamu/sz_190425/issues',{
            "title": "Found a bug2",
            "body": "I'm having a problem with this."
          },{
            headers: {'Authorization': 'token 492e38d08089565967799b0e410963a4357c0814'},
          })
          .then(function (response) {
            console.log(response);
          },function (err) {
            console.dir(err)
          })
        }
    }
</script>

<style scoped>

</style>
