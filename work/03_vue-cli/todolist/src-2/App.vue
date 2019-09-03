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
    import PubSub from 'pubsub-js'

    export default {
        name: "App",
        data(){
          var todosStirng = localStorage.getItem("todos");
          return {
            todos:todosStirng?JSON.parse(todosStirng):[]
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
        watch:{
          todos:{
            handler(newVal){
              localStorage.setItem("todos",JSON.stringify(newVal))
            },
            deep: true
          }
        },
        mounted(){
          PubSub.subscribe("del",(msg,id)=>{
            this.todos = this.todos.filter((item)=>{
              return item.id !== id
            })
          })

          PubSub.subscribe("updateChecked",(msg,{id,checked})=>{
            console.log(msg,id,checked)
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
