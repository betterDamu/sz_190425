### vue
  声明式编程 + 数据驱动
  响应式数据(配置对象的data属性)
  双向数据绑定

### 插值表达式
    {{exp}} exp:表达式  不能修改data中的数据!!!

### vue指令
    数据绑定
        v-text
        v-html
    事件
        v-on:事件名(不带on):"方法名(参数,$event)"
        @事件名(不带on)
        事件的修饰符
    样式
        v-bind:class="data中的数据"
        :class="data中的数据"
            class
                字符串
                对象
                    {类名:布尔值}
                数组
                    字符串
                    对象
            style
                对象
                    {css属性名:css属性值}
                数组
                    对象
    分支
        v-show : 控制元素的display属性

        v-if
        v-else-if
        v-else
            必须连在一起使用 控制这个元素是否在dom树种
    循环
        v-for
            对象
                v-for = "(val,key,index) in obj" key="唯一值"
            数组
                v-for = "(item,index) in arr" key = "唯一值"
    其他
        v-pre   : 跳过编译
        v-cloak : 避免闪屏
            [v-cloak]:{display:none}
        v-once  : 编译一次

### 变异方法
    有可能修改data中数据 但没有办法引起vue的界面更新
        数组:(一定要使用数组的变异方法)
           通过index的形式为数组去添加 修改 一个值
           修改数组的length属性
        对象:(Vue.set(object, key, value))
            为对象添加或删除属性

### vue配置
    el : 选择器 (规定当前vm实例对象的管理区域)
    data : 存放响应式数据
           最好不要放方法!!   如果说方法放在data中 this会指向window!!!
           data中的数据 会 转绑给 vm实例对象
    methods
            方法 (this指向vue的实例对象)




