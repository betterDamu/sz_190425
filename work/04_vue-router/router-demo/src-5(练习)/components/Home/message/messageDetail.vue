<template>
    <div style="margin-top: 30px;border-top:1px solid ">
      <ul>
        <li v-for="(val,key) in obj">
          <span style="font-weight: 800;color: red">{{key}}</span> : <span>{{val}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    const data = [
      {id:0,title:"msg0",text:"今天天气真好"},
      {id:1,title:"msg1",text:"槟榔嚼的真开心"},
      {id:2,title:"msg2",text:"嘴巴一点不寂寞"},
      {id:3,title:"msg3",text:"就是上课有点困"},
      {id:4,title:"msg4",text:"下课一点都不困"},
      {id:5,title:"msg5",text:"老师开口我就困"}
    ]
    export default {
        name: "messageDetail",
        props:{
          id:Number
        },
        data(){
          return {
            obj:{}
          }
        },
        methods:{
          showObj(){
            setTimeout(()=>{
              this.obj = data.find((item)=>{
                return item.id === this.id
              })
            },2000)
          }
        },
        mounted(){
          this.showObj()
        },
        watch:{
          id(){
            this.showObj()
          }
        }
    }
</script>

<style scoped>

</style>
