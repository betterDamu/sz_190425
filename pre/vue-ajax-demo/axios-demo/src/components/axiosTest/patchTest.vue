<template>
  <div>测试axios的patch请求</div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "getPatch",
    created() {
      axios.patch('https://api.github.com/repos/betterDamu/sz_190425/issues/4',{
        "title": "Found a bug4",
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
