<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
         <!-- <a href="#/Home" class="list-group-item">go to Home</a>
          <a href="#/User" class="list-group-item">go to User</a>
          <a href="#/About" class="list-group-item active">go to About</a>-->
          <router-link to="/home"  class="list-group-item">Go to Home</router-link>
          <router-link to="/user"  class="list-group-item">Go to User</router-link>
          <router-link to="/about" class="list-group-item">Go to About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div data-v-957c9522="" class="col-xs-6">
          <div data-v-957c9522="" class="panel">
            <div data-v-957c9522="" class="panel-body">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
