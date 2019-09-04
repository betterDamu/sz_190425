# router-demo
  普通路由
  嵌套路由
  动态路由

# 路由的注册流程

  让Vue使用路由插件
    定义组件
    注册路由
    定义路由器
    注册路由器

# 动态路由中的数据传递
  url ( 协议://主机:端口/路径/params?query#hash )
      query
      params

       |
       |

   组件内部
       $route.params
       $route.query


  url ( 协议://主机:端口/路径/params?query#hash )
      query
      params

        |
        |

        route : [path:"/damu:id",component:damu,{props:true}]
        route : [path:"/damu:id",component:damu,{props:{id:1}}]
        route : [path:"/damu:id",component:damu,{props:route => ({id:1})]

        |
        |

  组件内部  <damu id="1" name="xxx"></damu>
       props:[id,name]





