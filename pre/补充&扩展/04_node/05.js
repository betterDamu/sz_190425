process.nextTick(() => {
    console.log('nextTick-1')
    process.nextTick(() => {
        for(var i=0;i<100;i++){
            console.log('nextTick-2')
        }
    })
})

setImmediate(()=>{
    console.log("setImmediate-1")
})

// nextTick-1 nextTick-2*100 setImmediate-1

