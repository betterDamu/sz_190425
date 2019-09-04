import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import Damu from '@/components/Damu'

const routes=[
  {path:"/home",component:Home},
  {path:"/about",component:About},
  {path:"/user",component:User},
  //假装damu是home的子路由
  {path:"/home/damu",component:Damu},
  { path: "/", redirect: "/home" }
]

export default routes
