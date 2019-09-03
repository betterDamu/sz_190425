<template>
  <li @mouseenter="isShow=!isShow" @mouseleave="isShow=!isShow" :class="{highlight:isShow}">
    <label>
      <slot :index="index" :id="todo.id">
        <input type="checkbox" v-model="checked"/>
      </slot>
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleC">删除</button>
  </li>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
        name: "Item",
        props:{
          todo:Object,
          index:Number
        },
        data(){
          return{
            isShow:false
          }
        },
        computed:{
          checked:{
             get(){
               return this.todo.checked
             },
             set(newval){
               console.log("--set--")
               PubSub.publish("updateChecked",{id:this.todo.id,checked:newval})
             }
          }
        },
        methods:{
          handleC(){
            PubSub.publish("del",this.todo.id)
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
