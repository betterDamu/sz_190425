<template>
  <li @mouseenter="isShow=!isShow" @mouseleave="isShow=!isShow" :class="{highlight:isShow}">
    <label>
      <!--
          1. 不管怎么样 item组件都不能直接修改app组件中的数据
              v-model 的值 不能是 todo.checked

          2. item组件复制了一份 app中的数据
            data(){
              return {
                checked:this.todo.checked
              }
            }
            以后界面上的勾选 改变的都是 item自己的checked
            通过总线 在item的checked改变的时候  触发change事件 去同步 app中的checked
             methods:{
              handleChecked(){
               this.updateCheckedBus.$emit("updateChecked",this.todo.id,this.checked)
              }
            }

          3.将  v-model中的数据设计成计算属性
            checked:{
               get(){
                 return this.todo.checked  // 显示
               },
               set(newval){
                 this.updateCheckedBus.$emit("updateChecked",this.todo.id,newval)
               }
            }
      -->
      <input type="checkbox" v-model="checked"/>
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
        computed:{
          checked:{
             get(){
               return this.todo.checked
             },
             set(newval){
               this.updateCheckedBus.$emit("updateChecked",this.todo.id,newval)
             }
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
