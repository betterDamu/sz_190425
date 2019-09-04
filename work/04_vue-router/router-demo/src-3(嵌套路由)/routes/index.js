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
  {path:"/user",component:User},
  { path: "/", redirect: "/home" }
]

export default routes
