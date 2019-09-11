setImmediate(()=>{
    console.log("setImmediate-2")
    setImmediate(()=>{
        for(var i=0;i<100;i++){
            console.log('nextTick')
        }
    })
})

setImmediate(()=>{
    console.log("setImmediate-3")
})
