### axios 简单使用
    axios.get(url,config)
    axios.post(url,data,config)
    axios.put(url,data,config)
    axios.patch(url,data,config)
    axios.delete(url,config)

    axios({
        method:get/post/put/patch/delete,
        url:url,
        ...config
    })

    熟悉接口(熟悉后台路由的定义   熟悉后台返回的数据)
    restful api
        同一个地址 但请求方式不一样 实现的功能不一样
        查询请求 是公开的
        数据修改层面的请求 都是需要验证的(token)

### vuex
    1. 基本流程
        使用上vuex插件 一定要在仓库建立之前进行插件的配置
            Vue.use(Vuex)
        创建仓库
            var store = new Vuex.Store({
                state:{} // 数据
                getters:{} // 整合过后的数据
                mutation:{} // 数据的同步修改
                action:{}   //  数据的异步修改
            })
        注册仓库
            new Vue({
                store
            })

    2. 使用的注意点
        state在组件中都应该有个计算属性与之对应
        getters在组件中都应该有个计算属性与之对应
        mutation在组件中都应该有个方法与之对应
        action在组件中都应该有个方法与之对应

        优化组件的写法
            通过map类的辅助函数 进行组件的优化



