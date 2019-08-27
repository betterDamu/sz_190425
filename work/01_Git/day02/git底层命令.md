0458e0d94b5a422d4fd3d2e9bcc34275330a686b  test.txt v1(blob)
c31fb1e89d8b6b3ef34cdb5a2f999d6e29b822ba  test.txt v2(blob)
77c7dc624dc88ea12799d670643e94536e83de48  test.txt v1(tree1)

ac7c003584619ec8c404cc1f39b5e205bfe2eb5f  new.txt v1(blob)
3960eba44f3ffdb3d723c0bb7a548af237f70f0f  test.txt v2&new.txt v1 (tree2)

a705bd60e5a3aecd897239f213cb9a1321a73c28   tree2 + tree1（tree3）
###blob格式
    {key：val}
        key： hash
        val： 文件内容

### git对象（一个文件修改的版本）
    git hash-object -w fileUrl ： 根据文件内容生成hash并以blob格式保存到版本库中
    git cat-file -p hash       ： 拉取git对象的内容
    git cat-file -t hash       ： 拉取git对象的类型

    一个文件可以有多个git对象！！
    git对象的缺点：
        没有存储文件名，需要主动去记忆hash

### 树对象（用户一次完整的操作的版本）
    git upadte-index --add --cacheinfo 文件模式 blob blob对应的文件名
    git write-tree

    一次完整的用户操作对应一颗树对象（一个树对象就是暂存区的一次快照）
    树对象的优点：
        存储了文件名
    树对象的缺点：
        还是需要主动去记忆hash

### 提交对象
    echo "日志信息" | git commit-tree treehash -p commithash

    提交对象一定会包裹一个树对象； 一个项目的版本就是一个提交对象
    提交对象的优点
        存储了对树对象的描述
    提交对象的缺点
         还是需要主动去记忆hash
         git解决方案： 分支！！！！
            分支本质上是一个动态的指针，默认git提供master主分支，该分支默认指向最新的提交对象

### reset
   git reset --soft commithash     (--amend : git reset --soft HEAD~  )
        动HEAD的指向
   git reset [--mixed] commithash
        动HEAD的指向
        动index
   git reset --hard commithash  （git checkout branchname）
        动HEAD的指向
        动index
        动工作区

### 路径reset
    git reset [--mixed] commithash filename
        动index

    git  checkout commithash filename
        git reset --hard commithash filename（语法上git不支持）
        动暂存区
        动工作区

    git checkout  -- filename
         git reset --hard HEAD filename
         动工作区

### checkout
    git checkout commithash（branchname）
        切换分支
            动HEAD的指向
            动index
            动工作区
    git checkout commithash filename
        动暂存区
        动工作区
    git checkout -- filename
        撤销工作目录的修改
            动工作区





















