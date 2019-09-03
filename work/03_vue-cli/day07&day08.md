### vue-cli
    npm i vue-cli -g
    vue init webpack proname

### todolist
    1. 拆分静态组件
        App
            Header
            List
                Item
            Footer
    2. 数据的流向
        为什么todos数据源定义在App中?
            因为Header List Footer都需要读取或者操作todos数据源
        以后的每一步操作都去考虑怎么修改数据源!

    3.功能
        -- 界面的初始化
            App --> List --> Item : 列表的动态展示
            App --> Footer        : 代办任务的总条数

        -- 新增代办任务(Header组件)
            Header --> App :
                Header传送一个新的todo对象 App做新增 界面会重新更新

        -- Item组件
            item的高亮
            item的删除功能
                index
                    List --> Item --> List ---> App
                        props + methods
                        自定义事件

                    List --> Item ---> App
                        总线
                        pubsub

                id
                      Item --> List ---> App
                            props + methods
                            自定义事件

                      Item ---> App
                            总线
                            pubsub

            v-model 脏数据
               定义在子组件中 绑定的父组件中的数据;因为v-model是数据双向绑定的
                所以这种写法会导致我们的子组件 直接 修改了父组件的内容

                    1. 把父组件的数据复制了一份 让v-model使用复制的这一份数据
                            每次v-model改动的时候(dom事件) 去同步父组件中的数据
                    2. 让v-model使用一个子组件内的计算属性
                            每次v-model改动的时候(set) 去改变父组件中数据 父组件中数据改动后 同步界面

        -- footer组件
            已完成的任务数量的统计
                计算属性!!!   统计依赖于App组件的todos数据
            全选
                计算属性!!!   依赖于已完成的数量 和 全部的数量
                footer --> App
            删除已完成
                footer --> App

        -- 数据的持久化
            watch!!!
            deep watch!!!

        -- 插槽
            普通插槽
            具名插槽
                单向数据流  父组件 ---html模板---> 子组件
            作用域插槽
                双向数据流
                        父组件 ---html模板---> 子组件
                        子组件 ---数据--->父组件


            todolist:
                item组件往外提供一个默认模板
                    <input type="checkbox" v-model="checked"/>
                    <span>{{todo.text}}</span>
                我们希望在App组件中可以去定制item组件 input 和 span的风格
                    1. 在item组件定义两个具名插槽
                             <slot name="inputSlot" :index="index" :id="todo.id">
                             <slot name="spanSlot" :text="todo.text">
                    2. 在list组件中为item组件的两个插槽去指定模板!
                             <template  slot-scope="obj" slot="inputSlot">
                                <slot name="inputSlot" :id="obj.id" :index="obj.index"></slot>
                              </template>

                              <template slot-scope="obj" slot="spanSlot">
                                <slot name="spanSlot" :text="obj.text" ></slot>
                              </template>
                    3. 发现在list组件又具有了两个插槽
                    4. 在App组件中为list组件去指定两个模板
                         <template slot-scope="obj" slot="inputSlot">
                            <input type="checkbox" class="big" v-model="todos[obj.index].checked">
                          </template>
                          <template slot-scope="obj" slot="spanSlot">
                            <span style="color:green">{{obj.text}}</span>
                          </template>





