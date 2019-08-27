### 对象
  git对象 ：存储文件内容 不包含文件名
  树对象  ：存储用户一次完整的操作 快照 存储文件名
  提交对象 ：对树对象的一次包裹 携带很多额外的信息
        往外暴露的都是hash
        分支是一个动态的指针  默认指向最新的提交对象

### 区域
    工作区   项目的目录
    暂存区   .git/index
    版本库   .git/objects

### git工作的流程
     工作区 --> 版本库(git对象) --> 暂存区(树对象) --> 版本库（提交对象）

### 命令
    linux的基础命令
        find .git/objects -type f
    git底层命令
        R ：
            git cat-file -t hash    返回数据的类型
            git cat-file -p hash    返回数据的内容
            git ls-files -s         查看暂存区的内容
    git高层命令
        初始化 ： git init
        CUD
            git add 目录/文件
            git commit -a -m "message"
            git rm 目录/文件
            git mv 老的目录/文件 新的目录/文件
        R
            状态
                git status
            日志
                git log --oneline --decorate --graph --all
                    整个分支图
                git log --oneline
                    查看历史提交
                git diff
                    哪些修改没有被暂存
                git diff --cached
                    哪些暂存没有被提交
            分支
                R：
                    git branch
                    git branch --merged
                    git branch --no-merged
                    git branch -v
                C：
                    git branch name
                    git checkout -b name
                D：
                    git branch -d name （没有内容的分支  已合并的分支）
                    git branch -D name （强制删除有内容没有合并的分支）
                切换：
                    git checkout name
