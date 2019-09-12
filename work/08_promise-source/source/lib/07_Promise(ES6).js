(function (w) {
    const PENDING = "pending"
    const RESOLVED = "resolved"
    const REJECTED = "rejected"


    class Promise{
        constructor(exec) {
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
        then(onResolve,onReject){
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
        catch(onReject){
            return this.then(null,onReject)
        }
        static resolve(val){
            return new Promise(function (resolve,reject) {
                if(val instanceof Promise){
                    val.then(resolve,reject)
                }else {
                    resolve(val)
                }
            })
        }
        static reject(val){
            return new Promise(function (resolve,reject) {
                reject(val)
            })
        }
        static race(promiseArr){
            return new Promise((resolve,reject)=>{
                promiseArr.forEach((promise)=>{
                    promise.then((val)=>{
                        resolve(val)
                    },(err)=>{
                        reject(err)
                    })
                })
            })
        }
        static all(promiseArr){
            return new Promise((resolve,reject)=>{
                var flag =0;
                var arr =[];
                promiseArr.forEach((promise,index)=>{
                    promise.then((val)=>{
                        flag++;
                        arr[index] = val;
                        if(flag === promiseArr.length){
                            resolve(arr)
                        }
                    },(err)=>{
                        reject(err)
                    })
                })
            })
        }
    }

    w.Promise = Promise
})(window)