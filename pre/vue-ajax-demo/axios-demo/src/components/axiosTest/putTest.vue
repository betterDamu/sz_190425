<template>
  <div>测试axios的put请求</div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "putTest",
        created() {
          axios.put('https://api.github.com/repos/betterDamu/sz_190425/issues/5/lock',{},{
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
