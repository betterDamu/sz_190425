# 基本使用
## 安装
    npm install -g @vue/cli
## 创建项目    
    vue create my-project
## 开发环境启动
    npm run serve
## 生产环境启动
    npm run build
    
# 配置  
    创建vue.config.js文件 该文件是一个可选的配置文件，
        如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli自动加载.
        这个文件应该导出一个包含了选项的对象：
            // vue.config.js
            module.exports = {
              // 选项...
            } 
## 选项 - @vue/cli自定义配置
    outputDir 
        Type: string
        Default: 'dist'
        当使用build进行生产环境构建时。生成的构建目录
    lintOnSave
        Type: boolean | 'error'
        Default: true
        是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
        设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
        设置为 false 时，关闭eslint校验
        设置为 error 时: 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。    
    devServer
        Type: Object
        所有 webpack-dev-server 的选项都支持
## 选项 - webpack原生配置
    configureWebpack
        Type: Object 
        configureWebpack的属性值会通过 webpack-merge 合并到最终的配置中。
    
    
