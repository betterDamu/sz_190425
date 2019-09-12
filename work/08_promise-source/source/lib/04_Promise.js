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
            function defineThenPromise(callBack) {
                try{
                    var result = callBack(that.data);
                    if(result instanceof  Promise){

                        //上下两种写法最后达到的目的是一样的!!!

                        // resolve  reject 肯定会被放入队列中
                        //resolve(data)  reject(data)
                        result.then(resolve,reject)

                        // (val)=>{ resolve(val)}(data)
                       /* result.then((val)=>{
                            resolve(val)
                        },(err)=>{
                            reject(err)
                        })*/
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

    w.Promise = Promise
})(window)