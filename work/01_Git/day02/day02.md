###后悔药
    撤销工作区 ： git checkout --filename
    撤销暂存区 ： git reset HEAD filename
    撤销版本库 ： git commit --amend -m "mesage"
        注释写错了
        暂存的内容不完整

###reset操作（后悔药原理）
    --- reset commithash ---
        git reset --soft   commithash
            动HEAD的指向
            --amend ： git reset --soft HEAD~
        git reset [--mixed] commithash
            动HEAD的指向
            动index
        git reset --hard    commithash
             动HEAD的指向
             动index
             动工作区
             git checkout branchname &  git reset --hard  commithash
                checkout对工作目录是安全的！！
                checkout动HEAD的指向时不会带着分支一起走

                --hard对工作目录是强制性的覆盖
                --hard动HEAD的指向时是会带着分支一起走

    --- reset 路径 ---
        git reset  commithash  filename
            动index
        git checkout commithash filename
            动index
            动工作目录
        git  checkout   -- filename
            动工作目录

### git存储
    切分支： 建议一定要clean后再切分支
     有时候工作到一半就需要切分支，可以将这一半的内容事先存储起来：
        通过git stash进行存储 （存到一个栈上）
     在git stash后再切分支
     在外部分支工作结束后再切回原分支
        通过git stash pop获取原先的工作内容 并 删除存储

### git数据恢复
    新建分支切到对应的提交对象上  将此提交对象对应的内容恢复出来

### git tag
     tag是真正意义上的版本
     打tag：在对应的提交对象上 git tag 版本号
     删除tag： git tag -d v1.4
     检出tag： git checkout tagname
                    此时会进入头部分离的模式，新建分支再切到该分支上进行提交

### 配别名
     git config --global alias.co “checkout”

### Eslint & Git
      怎么使用npm上的第三方命令行工具
        -- 全局安装 + 本地安装
        -- npx + 本地安装
        -- npm脚本 + 本地安装

      Eslint使用：
        1. 下载
        2. 初始化配置
            eslint --init
        3. 校验
            eslint 目录（只校验目录下的js文件）
        4. 自动修复
            eslint  目录 --fix
        5. 规则去文档上查阅
        6. 修改继承来的规则
            配置文件的
               rules: {
                   "object-shorthand":2,
                   "prefer-arrow-callback":2,
                   "no-trailing-spaces":2,
                   "no-shadow":2
               }
        7. 使用husky & git 完成 eslint的强约束
            一定要先建仓库 再下husky
            "husky": {
                "hooks": {
                  "pre-commit": "npm run lint"
                }
              }
