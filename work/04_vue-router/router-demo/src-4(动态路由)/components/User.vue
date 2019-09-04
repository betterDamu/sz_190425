<template>
    <!--解耦-->
    <div style="color: red;">
      <h3>当前登录的用户是{{id}}号大佬</h3>
      <br>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User",
        props:{
          id:Number
        }
    }
</script>

<style scoped>

</style>
