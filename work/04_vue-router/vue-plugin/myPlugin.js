(function (w) {
    var MyPlugin = Object.create(null)


    MyPlugin.install = function (Vue) {
        Vue.component("v-button",{
            template:`<button @click="handleC">{{val}}</button>`,
            data(){
                return {
                    val:"点我啊"
                }
            },
            methods:{
                handleC(){
                    console.log(this.val+"666")
                }
            }
        })

        Vue.filter('dateFilter', function (val,format='YYYY-MM-DD hh:mm:ss') {
            return moment(val).format(format)
        })

        Vue.directive('move', {
            bind(el,binding){
                console.log(binding)
                el.style.transition="3s transform";
                setTimeout(()=>{
                    el.style.transform = `translateX(${binding.value}px)`
                })
            }
        })

        // Vue.prototype.$damu={}
    }

    //命名空间
    w.MyPlugin = MyPlugin
})(window)