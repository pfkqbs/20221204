import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      redirect: '/home',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/home',
      component: () => import('../views/index.vue'),
    },

  ]

const router = createRouter({
    history: createWebHistory('/app'),
    routes
})
export default router
