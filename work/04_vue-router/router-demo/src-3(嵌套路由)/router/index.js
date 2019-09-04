import VueRouter from "vue-router"
import routes from "@/routes"

const router = new VueRouter({
  mode:"hash",
  linkActiveClass:"active",
  routes
})


export default router
