# 通过webpack-dev-server
        const appData = require("../data.json")
        const seller = appData.seller
        const goods = appData.goods
        const ratings = appData.ratings
        
        devServer:{
            before(app){
                    app.get("/api/seller",(req,res)=>{
                      res.json({
                        errno:0,
                        data:seller
                      })
                    })
            } 
        }

# 通过mock.js
## 安装
    npm install mockjs
## 基本使用
    // 使用 Mock
    //import Mock from 'mockjs'
    var Mock = require('mockjs')
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    })
    // 输出结果
    console.log(JSON.stringify(data))    
## 拦截ajax请求
    Mock.mock( template )
         根据数据模板生成模拟数据
    Mock.mock( rurl, template ) 
        记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，
        将根据数据模板 template 生成模拟数据，并作为响应数据返回
## 语言规范
    Mock.js 的语法规范包括两部分：
    - 数据模板定义规范（Data Template Definition，DTD）
    - 数据占位符定义规范（Data Placeholder Definition，DPD）
### DTD
    数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值
        // name:属性名    rule:生成规则   value:属性值
        'name|rule': value
    注意
        属性名 和 生成规则 之间用竖线 | 分隔
        生成规则 的 含义 需要依赖 属性值的类型 才能确定
        属性值 中可以含有 @占位符
        属性值 还指定了最终值的初始值和类型
    规范地址
        https://github.com/nuysoft/Mock/wiki/Syntax-Specification              
### DPD  
    占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。
    占位符 的格式为：
        @占位符
        @占位符(参数 [, 参数])
    注意    
        用 @ 来标识其后的字符串是 占位符。
        占位符 引用的是 Mock.Random 中的方法。
        占位符 也可以引用 数据模板 中的属性。
        占位符 会优先引用 数据模板 中的属性。
        
            
          
