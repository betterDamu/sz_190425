<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
            v-model="msg" @keydown.enter="handleKeyDown"/>
  </div>
</template>

<script>
    var id = 6;
    export default {
        name: "Header",
        data(){
          return {
            msg:""
          }
        },
        methods:{
          handleKeyDown(){
            //构建一个todo对象 并且调用app中的add方法
            var todo = {
              id: id++,
              text:this.msg,
              checked:false
            }
            this.$emit("add",todo);
            this.msg="";
          }
        }
    }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
