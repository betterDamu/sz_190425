<template>
  <div class="row">
    <h3 v-if="firstShow" style="text-align: center">请输入查询用户</h3>
    <h3 v-else-if="loading" style="text-align: center">loading....</h3>
    <h3 v-else-if="error" style="text-align: center;color: red">{{error}}</h3>
    <h3 v-else-if="users.length === 0" style="text-align: center">查无此人</h3>
    <div v-else class="card" v-for="user in users">
      <a :href="user.href" target="_blank">
        <img :src="user.avator" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "list",
        computed:{
          ...mapState(["firstShow","loading","error","users"])
        }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
