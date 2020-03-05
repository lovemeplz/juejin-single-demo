import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/About.vue')
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  base: '/vue2/',
  // mode: 'history',
  routes
})

export default router
