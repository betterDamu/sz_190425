<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @add="add"></todo-header>
        <todo-list :todos="todos"></todo-list>
        <todo-footer :todos="todos" @checkAll="checkAll"
                     @clearCompletedItem="clearCompletedItem"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import header from "./components/Header"
    import list from "./components/List"
    import footer from "./components/Footer"
    export default {
        name: "App",
        data(){
          return {
            todos:[
              {
                id:1,
                text:"吃饭睡觉",
                checked:false
              },
              {
                id:2,
                text:"回家睡觉",
                checked:false
              },
              {
                id:3,
                text:"上课睡觉",
                checked:false
              },
              {
                id:4,
                text:"下课睡觉",
                checked:false
              },
              {
                id:5,
                text:"去哪都睡觉",
                checked:false
              }
            ]
          }
        },
        methods:{
          add(todo){
            this.todos.unshift(todo)
          },
          checkAll(val){
            this.todos.forEach((item)=>{
              item.checked = val;
            })
          },
          clearCompletedItem(){
            this.todos = this.todos.filter((item)=>{
               return !item.checked
            })
          }
        },
        components:{
          "todo-header":header,
          "todo-list":list,
          "todo-footer":footer
        },
        mounted(){
          this.delTodoBus.$on("del",(id)=>{
            this.todos = this.todos.filter((item)=>{
              return item.id !== id
            })
          })

          this.updateCheckedBus.$on("updateChecked",(id,checked)=>{
            this.todos.forEach((item)=>{
              if(item.id === id){
                item.checked = checked
              }
            })
          })
        }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
