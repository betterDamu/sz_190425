<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
            v-model.trim="msg" @keydown.enter="handleKeyDown"/>
  </div>
</template>

<script>
    var todosStirng =  localStorage.getItem("todos");
    // var id = todosStirng?JSON.parse(todosStirng)[0].id:0;
    if(!todosStirng){
      var id =0;
    }else {
      if(!JSON.parse(todosStirng).length){
        var id =0;
      }else{
        var id =JSON.parse(todosStirng)[0].id;
      }
    }
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
            var text = this.msg;
            if(text){
              var todo = {
                id: ++id,
                text,
                checked:false
              }
              this.$emit("add",todo);
              this.msg="";
            }
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
