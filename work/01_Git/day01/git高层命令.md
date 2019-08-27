### Git仓库的初始化
    git init

### 文件的CRUD操作
    CUD
        git add
        git commit
            git commit --> vim
            git commit -m "message"
            git commit -a -m  "message"
        git rm 要删除的文件 + git commit
        git mv 要改名的文件 重命名的文件 + git commit
    R
        git status ：查看工作目录所有文件处于什么状态
        git diff   ： 查看有哪些修改没有被暂存
        git diff --staged ：查看哪些暂存没有被提交

        版本穿梭！！！（分支）
            每次切换分支时 一定要保证git status是clean的
            git branch ： 查看所有的分支列表
            git branch --merged ： 查看已合并到当前分支的列表
            git branch --no-merged ： 查看未合并到当前分支的列表
            git branch -v ： 查看所有的分支列表 及其对应最新的一次提交
            git branch name ： 创建分支
            git branch -d name ： 删除没有内容的分支 或者 是已经合并的分支
            git branch -D name ： 强制删除分支
            git checkout name ：切换分支
            git checkout -b name ： 新建并切换过去
            git log --oneline --decorate --graph --all ： 查看完整的分支图

        后悔药！！！
            


