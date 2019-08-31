### vue基础
    指令
    计算属性
    组件

### 计算属性
    使用
        模板 {{fullname}}
        computed{
            fullname(){}
            fullname:{
                get(){}
            }
            fullname2:{
                get(){}
                set(val){}
            }
        }
    注意点
        计算属性是可以缓存的
        计算属性对应的get函数什么时候被调用?
            初始化的时候调用一次
            每当计算属性对应的依赖产生变化时也会被调用

### vue实例对象
    配置
        el   :  为根组件指定模板 指定挂载对象
        data :  存储响应式数据
        methods : 存储事件对应的回调 存储一些vue要使用的方法
        computed : 计算属性
        components : 局部组件
        props : 接受来着父组件的数据
        template : 为组件指定模板
        watch : 侦听器
    属性
        $root
        $el
        $options
        $data
    方法
        $mount("选择器或者dom节点")  将对应的组件挂载到指定的节点上
        vue自定义事件:
            $on
            $once
            $emit
            $off


### 组件
    一个vue实例就是一个vue组件
    全局:
        Vue.component("组件名",配置对象)
    局部:
        components:{
            组件名:配置对象
        }

    组件内的data配置必须是函数!!!  函数返回的对象才是真正的响应式数据!!
    组件的template选项 一定要有一个根标签包裹
    template 和 el 同时出现的时候 template的优先级高

    组件的命名如果与html5的规范产生冲突 那应该使用is标签属性进行标记!!
    组件上定义的事件都是vue的自定义事件!!!!!!
    props特性 与 非pros特性的属性!!



