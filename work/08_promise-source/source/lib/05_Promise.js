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
            if (that.state !== PENDING) return

            that.state = RESOLVED
            that.data = val;
            that.callBacks.forEach((item)=>{
                setTimeout(function () {
                    item.onResolve()
                },0)
            })
        }
        function reject(err){
            if (that.state !== PENDING) return

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

        if(typeof onResolve !== "function")
            onResolve =  (val) => val

        if(typeof onReject !== "function")
            onReject = (err) => {throw err}

        return new Promise(function (resolve,reject) {
            function defineThenPromise(callBack) {
                try{
                    var result = callBack(that.data);
                    if(result instanceof  Promise){
                        result.then(resolve,reject)
                    }else {
                        resolve(result)
                    }
                }catch (e) {
                    reject(e)
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
    Promise.prototype.catch = function(onReject){
        return this.then(null,onReject)
    }

    // val: promise  或 值
    Promise.resolve = function(val){
        return new Promise(function (resolve,reject) {
            if(val instanceof Promise){
                val.then(resolve,reject)
            }else {
                resolve(val)
            }
        })
    }
    Promise.reject = function(val){
        return new Promise(function (resolve,reject) {
            reject(val)
        })
    }
    w.Promise = Promise
})(window)