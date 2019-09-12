(function (w) {
    /*
        Promise构造函数
            @exec : 执行器 是外部业务逻辑传入的 在库中要同步调用的
            @resolve : 执行器的第一个参数 是在库中定义的 传给外部业务逻辑
            @reject : 执行器的第二个参数  是在库中定义的 传给外部业务逻辑

        promise对象: {
                      state:状态
                      data:数据
                    }

        如果函数被构造调用 默认返回this
            如果函数被普通调用 默认返回undefined
            return this;
            return undefined;
    */
    var PENDING = "pending"
    var RESOLVED = "resolved"
    var REJECTED = "rejected"
    function Promise(exec) {
        var that = this;
        this.state = PENDING;
        this.data = undefined;

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

    w.Promise = Promise
})(window)