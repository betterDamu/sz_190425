(function (window) {
    /*
        Promise构造
        new Promise的时候 返回的promise实例
            pending  执行器的两个形参没有被调用 且 执行器没有报错
            resolve  执行器的第一个形参被调用   且 执行器没有报错
            rejected 执行器的第二个形参被调用   或 执行器报错

        promise实例
            具有状态 status
            具有数据 data
    */
    var PENDING = "pending";
    var RESOLVED="resolved";
    var REJECTED = "rejected";

    function Promise(executor) {
        var that = this;
        this.status = PENDING;
        this.data = undefined;
        this.callBacks = []; // [{onResolved:onResolved,onRejected:onRejected},{}....]

        function resolve(val){
            that.status = RESOLVED;
            that.data = val;
            that.callBacks.forEach(function (item) {
                setTimeout(function () {
                    item.onResolved()
                },0)
            })
        }
        function reject(reason){
            that.status = REJECTED;
            that.data = reason;
            that.callBacks.forEach(function (item) {
                setTimeout(function () {
                    item.onRejected()
                },0)
            })
        }

        try {
            executor(resolve,reject)
        }catch (e) {
            reject(e)
        }

        //return this;
    }

    Promise.prototype.then=function(onResolved,onRejected){
        var that = this;
        return new Promise(function (resolve,reject) {

            // 当前这个函数是用来分析 微队列中回调函数执行时返回值的类别
            // 根据这个类别去确定then方法的返回值
            function handleResult(callback) {
                try {
                    var result = callback(that.data)
                    if(result instanceof Promise){
                        //返回的值是promise
                        result.then(function (val) {
                            resolve(val)
                        },function (reason) {
                            reject(reason)
                        })
                    }else{
                        resolve(result)
                    }
                }catch (e) {
                    reject(e)
                }
            }

            if(that.status === PENDING){
                //promise状态是异步确定的 就应该将回调函数收集起来
                that.callBacks.push({
                    onResolved:function () {
                        handleResult(onResolved)
                    },
                    onRejected:function () {
                        handleResult(onRejected)
                    }
                })
            }else if(that.status === RESOLVED){
                //promise状态是同步确定的 就应该立马塞入到微队列
                setTimeout(function () {
                    handleResult(onResolved)
                })
            }else  if (that.status === REJECTED){
                //promise状态是同步确定的 就应该立马塞入到微队列
                setTimeout(function () {
                    handleResult(onRejected)
                })
            }
        })
    }

    window.Promise = Promise;
})(window)