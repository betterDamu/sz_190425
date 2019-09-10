/*
* options : 整个配置对象
*
* */
function MVVM(options) {
    this.$options = options; // 为了让options可以在任意的地方被访问 不受制于作用域链
    var data = this._data = this.$options.data;
    var me = this; // this的转绑  就是为了做闭包

   /*
    数据代理
        数组API中的回调 一般都是同步回调
        Object.keys: 对应对象可枚举属性组成的数组
        key : data中的每一个属性
    */
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    //数据劫持
    observe(data, this);

    //指令解析
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    /*
      key : data中的每一个属性
    */
    _proxy: function(key) {
        var me = this; // 做闭包
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};