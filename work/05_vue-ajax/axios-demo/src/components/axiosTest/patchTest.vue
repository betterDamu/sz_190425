<template>
  <div>测试axios的post请求</div>
</template>

<script>
  // f37bd8f059be8e6d2fc98d08d3dc1f6fdbd8da1b
  import axios from "axios"
  export default {
    name: "patchTest",
    created(){
      ///repos/:owner/:repo/issues/:issue_number
      axios.patch('https://api.github.com/repos/betterDamu/sz_190425/issues/11', {
        "title": "Found a bugxxx"
      },{
        headers: {'Authorization': 'token f37bd8f059be8e6d2fc98d08d3dc1f6fdbd8da1b'},
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style scoped>

</style>
