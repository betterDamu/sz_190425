# 组件系统
    组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。
    仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：
  ![组件](img/components.png)

# 组件名称规则：
    定义时：驼峰
    使用时：用-连接符来连接

# vue组件(全局组件)
    在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。
    在 Vue 中注册组件很简单
      // 定义名为 todo-item(推荐使用这种形式) 的新组件
      Vue.component('todo-item', {
        template: '<li>这是个待办项</li>'
      })
      //使用组件
      <ol>
        <todo-item></todo-item>
      </ol>

# 父组件如何向子组件传递数据
    (父组件通过一个自定义属性向子组件传递数据)
    (子组件通过props属性来接受父组件的数据)
    
## props
    props
        类型：Array<string> | Object
        详细:
        props 可以是一个数组 用于接收来自父组件的数据
        
# vue组件(局部组件)
    //通过一个普通的 JavaScript 对象来定义组件：
        var ComponentA = { /* ... */ }
        var ComponentB = { /* ... */ }
        var ComponentC = { /* ... */ }
    //然后在 components 选项中定义你想要使用的组件：
        new Vue({
          el: '#app',
          components: {
            'component-a': ComponentA,
            'component-b': ComponentB
          }
        })
     //使用组件
       <div id="app">
         <component-a></component-a>
         <component-a></component-a>
       </div>     

# vue的配置对象
     var list ={
        //props 可以是简单的数组,用于接收来自父组件的数据。
        props:["items"],
        //一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略
        template: `<ul>
            <li v-for="item in items">
                {{item}}
            </li>
        </ul>`,
    }

    var vm = new Vue({
        //提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例
        el:"#app",
        //Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化
        //data中的数据都会转绑给vm
        data:{
            msg:"",
            items:[]
        },
        //methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例
        //不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例
        methods:{
            handleC(){
               this.items.push(this.msg);
               this.msg=""
            }
        },
        //包含 Vue 实例可用组件的列表
        components:{
            list
        }
    })    

# 使用细节-1
    在非根组件中data的定义必须是一个函数
    函数返回的对象才是真正意义上数据的存储仓库(data)
    这样设计的目的是为了让每个组件间的数据都是独立的 互不影响

# 使用细节-2
    当组件的嵌套与Html5的规范产生冲突时我们可以使用is属性来解决冲突
    H5规范中部分标签的嵌套是有强约束的，部分标签内部不能嵌套其他标签
            table内一般只能嵌套tr，组件本质是就是一个自定义标签。我们不能让table不认识的标签
            出现在table内部。vue的is属性就可以帮我们解决这个问题。
                                             <tr is="row"></tr>

# 使用细节-3
    组件上的所有事件都是vue自定义事件

# 使用细节-4
    props特性 非props特性
            props特性属性(出现在组件的props列表中)                             组件不会继承
            vue指令                                                            组件不会继承
            非props特性属性(没有出现在组件的props列表中 不是一个vue指令)       组件继承


   







