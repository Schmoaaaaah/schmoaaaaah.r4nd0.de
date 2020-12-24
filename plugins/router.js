import Vue from 'vue'
import VueRouter from 'vue-router'
import development from '@/pages/development'
import about from '@/pages/about'
import index from '@/pages/index'
import gaming from '@/pages/gaming'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/development',
      name: 'dev',
      component: development,
    },
    {
      path: '/gaming',
      name: 'gaming',
      component: gaming,
    },
    { path: '*', redirect: '/' },
  ],
})

export default router
