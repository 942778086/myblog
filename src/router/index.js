import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../views/FrontPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: FrontPage
  },
  {
    path: '/main',
    component: () => import('../views/Main')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
