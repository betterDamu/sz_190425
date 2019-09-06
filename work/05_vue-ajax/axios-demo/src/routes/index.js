import HelloWorld from '@/components/HelloWorld'
// import getTest from '@/components/axiosTest/getTest.vue'
// import postTest from '@/components/axiosTest/postTest.vue'
// import patchTest from '@/components/axiosTest/patchTest.vue'
// import putTest from '@/components/axiosTest/putTest.vue'
// import deleteTest from '@/components/axiosTest/deleteTest.vue'
export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/getTest',
    component: () => import('@/components/axiosTest/getTest.vue')
  },
  {
    path: '/postTest',
    component: () => import('@/components/axiosTest/postTest.vue')
  },
  {
    path: '/patchTest',
    component: () => import('@/components/axiosTest/patchTest.vue')
  },
  {
    path: '/putTest',
    component: () => import('@/components/axiosTest/putTest.vue')
  },
  {
    path: '/deleteTest',
    component: () => import('@/components/axiosTest/deleteTest.vue')
  }
]
