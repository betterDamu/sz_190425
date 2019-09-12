### promise状态机制
    1. Promise构造函数
       var promise =  new Promise(exec);
           exec(reslove,reject)
              : 执行器  他默认携带两个函数参数; 执行器必定是同步调用的
           promise :
                初始化   :   执行器没有调用它两个形参中的任意一个 && 执行器没有报错
                成功     :   执行器调用了其第一个形参 && 执行器没有报错
                失败     :   执行器调用了其第二个形参 && 执行器报错

    2. Promise.prototype.then
       var newPromise =  promise.then(onReslove,onReject)
            onReslove  当promise状态从初始化变为成功时被塞入微队列
            onReject   当promise状态从初始化变为失败时被塞入微队列

            newPromise:
                  初始化   :   then中的两个回调没有被调用
                  成功     :   then中的回调有一个被调用 且 调用没有报错 返回了一个值(不能是一个失败状态的promise)
                  失败     :   then中的回调有一个被调用 且 调用报错  或者 返回了一个失败状态的promise

### promise数据传递
    promise不光携带状态 还携带数据
        数据的来源:
            Promise构造函数返回的promise   执行器中参数调用时的实参;或者就是执行器执行时的异常信息
            then方法返回的promise          返回的值  返回的promise所携带的值 异常信息
        数据的流向:
            对应的then方法中回调的第一个形参


### promise注意点
    1. 在then方法被调用时 调用then方法promise的状态 直接决定了then中的回调是否要被塞入微队列
        1. 当调用then方法时  promise的状态是初始化状态的 那then中的回调不会被塞入微队列 只是被异步线程持有着
        2. 当调用then方法时  promise的状态已经确定了(成功 ,失败) 那then中的回调会被塞入微队列

    2. 每个then方法返回的promise第一次必定是初始化状态的  只有在V8做事件循环后
        对应then方法返回的那个promise的状态才有可能确定

    3. 如果promise状态确定后 没有在对应的then方法中找到指定的回调 那promise的状态会被传递下去

    4. promise的状态确定是一次性的

### promise的其他API
    Promise
    Promise.prototype.then
    Promise.prototype.catch

    Promise.reslove
    Promise.reject
    Promise.all
    Promise.race
###微任务 宏任务
    微任务:
        promise相关异步回调
        process.nextTick
    宏任务
        定时器相关

###事件循环机制
    浏览器
        每一个宏任务执行完之后 都要清空微任务的队列
    Node
        每一项宏任务执行完之后 都要清空微任务的队列

