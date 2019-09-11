
// 对于以上代码来说，setTimeout 可能执行在前，也可能执行在后。
// 首先 setTimeout(fn, 0) === setTimeout(fn, 1)，这是由源码决定的

// 进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，
// 那么在 timer 阶段就会直接执行 setTimeout 回调
// 如果准备时间花费小于 1ms，那么就是 setImmediate 回调先执行了
setTimeout(function timeout () {
    console.log('timeout');
},0);
setImmediate(function immediate () {
    console.log('immediate');
});

