/*
    1. callBacks 为什么要定义成数组
    2. callBacks 为什么要定义在 Promise构造中  而且定义成this的一个属性
    3. defineThenPromise 为什么要定义在then返回的那个Promise 构造中
*/

(function (w) {
    var PENDING = "pending"
    var RESOLVED = "resolved"
    var REJECTED = "rejected"
    function Promise(exec) {
        var that = this;
        this.state = PENDING;
        this.data = undefined;
        this.callBacks =[];  // [{onResolve:fn,onReject:fn} , {} .....]

        function resolve(val){
            that.state = RESOLVED
            that.data = val;
            that.callBacks.forEach((item)=>{
                setTimeout(function () {
                    item.onResolve()
                },0)
            })
        }
        function reject(err){
            that.state = REJECTED
            that.data = err;
            that.callBacks.forEach((item)=>{
                setTimeout(function () {
                    item.onReject()
                },0)
            })
        }

        try{
            exec(resolve,reject)
        }catch (e) {
            reject(e)
        }
    }



    Promise.prototype.then=function(onResolve,onReject){
        var that = this;

        return new Promise(function (resolve,reject) {

            // 当前是用来确定then方法返回的promise的状态的
            // promise 先返回 defineThenPromise再调用
            function defineThenPromise(callBack) {
                try{
                    var result = callBack();
                    if(result instanceof  Promise){
                        // result.then(()=>{resolve()},()=>{reject()})
                        result.then(resolve,reject)
                    }else {
                        resolve()
                    }
                }catch (e) {
                    reject()
                }
            }

            if(that.state === PENDING){
                that.callBacks.push({
                    onResolve:function () {
                        defineThenPromise(onResolve)
                    },
                    onReject:function () {
                        defineThenPromise(onReject)
                    }
                })
            }else if(that.state === RESOLVED){
                setTimeout(function () {
                    defineThenPromise(onResolve)
                },0)
            }else if(that.state === REJECTED){
                setTimeout(function () {
                    defineThenPromise(onReject)
                },0)
            }
        })
    }

    w.Promise = Promise
})(window)