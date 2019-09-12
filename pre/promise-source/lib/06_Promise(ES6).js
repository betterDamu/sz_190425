(function (window) {
    const PENDING = "pending";
    const RESOLVED = "resolved";
    const REJECTED = "rejected";

    class Promise{
        constructor(executor){
            this.status = PENDING;
            this.data = undefined;
            this.callbacks=[];

            let resolve = (val)=>{
                if(this.status !== PENDING){
                    return;
                }

                this.status = RESOLVED;
                this.data=val;
                for(let item of this.callbacks){
                    setTimeout(()=>{
                        item.onResolved()
                    })
                }
            }
            let reject = (reason)=>{
                if(this.status !== PENDING){
                    return;
                }

                this.status = REJECTED;
                this.data=reason;
                for(let item of this.callbacks){
                    setTimeout(()=>{
                        item.onRejected()
                    })
                }
            }

            try {
                executor(resolve,reject)
            }catch (e) {
                reject(e)
            }
        }
        then(onResolved,onRejected){
           onResolved = typeof onResolved ==="function" ?onResolved : value => value;
           onRejected = typeof onRejected ==="function" ?onRejected : reason => {throw reason};
           return new Promise((resolve,reject)=>{

               let handleResult = (callBack)=> {
                  try {
                      let result =  callBack(this.data);
                      if(result instanceof Promise){
                          result.then(resolve,reject)
                      }else {
                          resolve(result)
                      }
                  }catch (e) {
                      reject(e)
                  }
               }

               if(this.status === PENDING){
                   this.callbacks.push({
                       onResolved(){
                           handleResult(onResolved)
                       },
                       onRejected(){
                           handleResult(onRejected)
                       }
                   })
               }else if(this.status === RESOLVED){
                   setTimeout(()=>{
                       handleResult(onResolved)
                   })
               }else if(this.status === REJECTED){
                   setTimeout(()=>{
                       handleResult(onRejected)
                   })
               }
           })
        }
        catch(onRejected){
            return this.then(null,onRejected)
        }

        static resolve(val){
            return new Promise((resolve,reject)=>{
               if(val instanceof Promise){
                   val.then(resolve,reject)
               }else {
                   resolve(val)
               }
            })
        }
        static reject(val){
            return new Promise((resolve,reject)=>{
                reject(val)
            })
        }
        static race(promiseArr){
            return new Promise((resolve,reject)=>{
                for( let promise of promiseArr){
                    promise.then(resolve,reject)
                }
            })
        }
        static all(promiseArr){
            let flag =0;
            let resolveArr = []
            return new Promise((resolve,reject)=>{
                for( let [index,promise] of promiseArr.entries()){
                    promise.then((val)=>{
                        flag++;
                        resolveArr[index] = val;
                        if(flag === promiseArr.length){
                            resolve(resolveArr)
                        }
                    },(reason)=>{
                        reject(reason)
                    })
                }
            })
        }
    }

    window.Promise = Promise;
})(window)