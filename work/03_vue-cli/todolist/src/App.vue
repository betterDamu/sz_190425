<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @add="add" :id="Number(id)"></todo-header>

        <!--咱们id 必须 要和数组的下标一致!!!-->

        <!--
                id从0开始的!!  id一般都是一个唯一的hash  :  "absdaskj01981"
            1. 实现插槽的时候 最好使用 index
            2. id的生成最好在App组件中做, 每当todos数据产生改变的时候 去同步id的值
                按顺序删  √
                不按顺序删 √
        -->
        <todo-list :todos="todos">
          <template slot-scope="obj" slot="inputSlot">
            <input type="checkbox" class="big" v-model="todos[obj.index].checked">
          </template>
          <template slot-scope="obj" slot="spanSlot">
            <span style="color:green">{{obj.text}}</span>
          </template>
        </todo-list>

        <todo-list :todos="todos">
          <template slot-scope="obj" slot="inputSlot">
            <input type="checkbox" class="small" v-model="todos[obj.index].checked">
          </template>
          <template slot-scope="obj" slot="spanSlot">
            <span style="color: red">{{obj.text}}</span>
          </template>
        </todo-list>

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
            todos:todosStirng?JSON.parse(todosStirng):[],
            id:localStorage.getItem("todoId")||0
          }
        },
        computed:{
          checked(id){
             console.log(id)
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

              //同步id
              this.id = this.todos.length;
              this.todos.forEach((todo,index,arr)=>{
                todo.id = (arr.length - 1 - index);
                // todo.id = index
              })
              localStorage.setItem("todoId",this.id)
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
  .big{
    width: 20px;
    height: 20px;
  }
  .small{
    width: 10px;
    height: 10px;
  }
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
