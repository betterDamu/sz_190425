(function (w) {
    var PENDING = "pending"
    var RESOLVED = "resolved"
    var REJECTED = "rejected"
    function Promise(exec) {
        var that = this;
        this.state = PENDING;
        this.data = undefined;
        this.callBacks =[];

        function resolve(val){
            that.state = RESOLVED
            that.data = val;
        }
        function reject(err){
            that.state = REJECTED
            that.data = err;
        }

        try{
            exec(resolve,reject)
        }catch (e) {
            reject(e)
        }
    }

    /*
        @onResolve   外部传入的函数 在库中注册
        @onReject    外部传入的函数 在库中注册
    */
    Promise.prototype.then=function(onResolve,onReject){
        var that = this;
        return new Promise(function (resolve,reject) {


           /*
                new Promise 返回的promise实例 状态可以同步确定 可以异步确定
                then 方法 返回的promise实例 状态一定是异步确定的
            */
            if(that.state === PENDING){
                // promise的状态是异步确定的
                // 将onResolve onReject保存起来  待对应的promise状态确定之后再考虑将哪一个回调放入微队列
                that.callbacks.push({
                    onResolve:onResolve,
                    onReject:onReject
                })
            }else if(that.state === RESOLVED){
                // promise的状态是同步确定的  状态为RESOLVED 就应该将then方法的第一个回调塞入微队列
                setTimeout(onResolve,0)
            }else if(that.state === REJECTED){
                // promise的状态是同步确定的 状态为REJECTED 就应该将then方法的第二个回调塞入微队列
                setTimeout(onReject,0)
            }
        })
    }

    w.Promise = Promise
})(window)