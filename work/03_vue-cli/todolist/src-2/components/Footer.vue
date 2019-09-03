<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkeAll"/>
    </label>
    <span>
          已完成 <i style="color: red;font-weight:800">{{completedCount}}</i>
          / 全部<span style="color: green;font-weight:800">{{todos.length}}</span>
        </span>
    <button class="btn btn-danger" @click="clearCompletedItem">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
          todos:Array
        },
        methods:{
          clearCompletedItem(){
            this.$emit("clearCompletedItem")
          }
        },
        computed:{
          completedCount(){
             return this.todos.reduce((adder,item)=>{
               return   adder + (item.checked?1:0);
             },0)
          },
          checkeAll:{
            get(){
              return ((this.todos.length !== 0) && (this.todos.length === this.completedCount))
            },
            set(newval){
              this.$emit("checkAll",newval)
            }
          }
        }
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
