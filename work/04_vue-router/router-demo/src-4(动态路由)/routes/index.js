import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import News from '@/components/Home/news'
import Message from '@/components/Home/message'

const routes=[
  {
    path:"/home",
    component:Home,
    children: [
      {path: 'news', component: News},
      {path: 'message', component: Message},
      {path: '', component: News}
    ]
  },
  {path:"/about",component:About},
  // 相当于将 id="val" 加给 <User id="123" ></User>
  {
    path: "/user",
    component: User,
    props(route){
       return {
         id:+route.query.id
       }
    },
    children:[
      {path:":id",component: User,props:route=>({id:+route.params.id})}
    ]
  },

  {path: "/", redirect: "/home"}
]

export default routes
