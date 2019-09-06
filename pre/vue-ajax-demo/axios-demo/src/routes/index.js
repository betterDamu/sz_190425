import HelloWorld from '@/components/HelloWorld';
// import getTest from '@/components/axiosTest/getTest';
export default [
  {path: '/', component: HelloWorld},
  {
    path: '/getTest',
    component: ()=> import(/*webpackChunkName:"getTest"*/"@/components/axiosTest/getTest")
  },
  {
    path: '/postTest',
    component: ()=> import(/*webpackChunkName:"getTest"*/"@/components/axiosTest/postTest")
  },
  {
    path: '/patchTest',
    component: ()=> import(/*webpackChunkName:"getTest"*/"@/components/axiosTest/patchTest")
  },
  {
    path: '/putTest',
    component: ()=> import(/*webpackChunkName:"getTest"*/"@/components/axiosTest/putTest")
  },
  {
    path: '/deleteTest',
    component: ()=> import(/*webpackChunkName:"getTest"*/"@/components/axiosTest/deleteTest")
  }
]
