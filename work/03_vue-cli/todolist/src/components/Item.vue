<template>
  <li @mouseenter="isShow=!isShow" @mouseleave="isShow=!isShow" :class="{highlight:isShow}">
    <label>
      <input type="checkbox" v-model="todo.checked"/>
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleC">删除</button>
  </li>
</template>

<script>
    export default {
        name: "Item",
        props:{
          todo:Object
        },
        data(){
          return{
            isShow:false
          }
        },
        methods:{
          handleC(){
            this.delTodoBus.$emit("del",this.todo.id)
          }
        }
    }
</script>

<style scoped>
  li.highlight{
    background: pink;
  }
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
