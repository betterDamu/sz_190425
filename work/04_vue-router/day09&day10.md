###day09
    vue路由
        普通路由
            1. 让Vue使用上vue-router插件
                    vue.use(vuerouter)
            2. 注册组件
                    A.vue  B.vue
            3. 注册路由
                 routes.js
                    import A from "./A.vue"
                    export default [
                        {path:"/A",component:A}
                    ]
            4. 定义路由器
                  router.js
                    import routes from "./routes.js"
                    export default new vuerouter({
                        routes
                    })
            5. 注册路由器
                  import router from "./router.js"
                  new Vue({
                    router
                  })

        嵌套路由
             注册路由
                 routes.js
                    import A from "./A.vue"
                    import A1 from "./A/A-1.vue"
                    export default [
                        {
                            path:"/A",
                            component:A,
                            children:[
                                {path:"A-1",component:A1}
                            ]
                        }
                    ]
        动态路由
            注册路由
                 routes.js
                    import A from "./A.vue"
                    import A1 from "./A/A-1.vue"
                    export default [
                        {
                            path:"/A",
                            component:A,
                            children:[
                                {path:":id",component:A1}
                            ]
                        }
                    ]
            URL 怎么向 组件进行数据传递(解耦)
                 注册路由
                     routes.js
                        import A from "./A.vue"
                        import A1 from "./A/A-1.vue"
                        export default [
                            {
                                path:"/A",
                                component:A,
                                children:[
                                    {path:":id",component:A1,props:fn}
                                ]
                            }
                        ]
        vue-router的两个全局组件
            router-link
            router-view

### day10
    定位
    Flex