<template>
  <div data-v-957c9522="" msg="atguigu">
    <h2>{{$route.path}}</h2>
    <h2 data-v-957c9522="">home组件</h2>
    <div data-v-957c9522="">
      <ul data-v-957c9522="" class="nav nav-tabs">
        <li data-v-957c9522="">
          <router-link to="/home/news">news</router-link>
        </li>
        <li data-v-957c9522="">
          <router-link to="/home/message">message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
