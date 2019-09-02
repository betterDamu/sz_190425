<template>
  <ul class="todo-main">
    <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"></todo-item>
  </ul>
</template>

<script>
    import item from "./Item"
    export default {
        name: "List",
        props:{
          todos:Array
        },
        components:{
          "todo-item":item
        }
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/

</style>
