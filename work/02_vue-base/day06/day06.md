### vue源码版本(UMD Commonjs ES6)
    完整版本   :   运行时 + 编译器
    运行时版本 :   运行时

    编译器: 将el所指定模板 或者 template指定的模板解析成render函数

### 生命周期钩子
    created  :  所有数据都具有响应式功能
        发ajax请求 但不能操作真实DOM 因为模板还没有挂载
    mounted  :  模板以及编译成功 并 挂载到页面上
        发ajax请求 而且可以操作真实DOM
    destroyed:  vm组件已经被销毁
        做收尾工作  清除定时器等等

### vue动画
    过渡
    animation
        一般都在v-show 或 v-if中使用
        v-enter-to要和动画节点的元素状态保持一致
        从显示到隐藏
            v-leave : 没有用
            v-leave-active
            v-leave-to
        从隐藏到显示
            v-enter
            v-enter-active
            v-enter-to

### 过滤器
    {{msg | 过滤器(msg)}}

### 自定义指令
    v-foucs
    v-move(300)

### ref
    vm.$refs.name

### 表单的输入绑定

### 组件间通信
    子组件是不可以直接修改父组件的数据
        父向子
        子向父
        非父子



