# template
    <template>
    #[[$END$]]#
    </template>

    <script>
    export default {
    name: "${COMPONENT_NAME}"
    }
    </script>

    <style scoped>

    </style>

# vue-cli(2.0)
  1. 安装 : npm i vue-cli -g
  2. 查看版本: vue -V
  3. 查看脚手架的模板 : vue list
  4. 初始化脚手架: vue init webpack 项目名
  5. 启动项目
        开发: npm start
        生产: npm run build

# todolist的数据传递
  App Header List Item Footer
  1.  初始化界面(父向子传)
      App --todos--> List --todo--> Item
      App --todos--> Footer
  2.  Header(子向父)
      Header --新的todo--> App
  3.  Item(非父子)
      Item --id 勾选状态--> App
  4.  Footer(子向父)
      Footer --全选按钮的勾选状态--> App



