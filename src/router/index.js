import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/vue*',
    path: '/vue1',
    name: 'vue1',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue1')
  },
  {
    path: '/vue2',
    name: 'vue2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue2')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
