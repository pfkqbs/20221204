/*  1-- 导入 vue  */
import Vue from 'vue'


/*  2--导入vue-router */
import VueRouter from 'vue-router'

/* 导入 HomeView 组件 */
import HomeView from '../views/HomeView.vue'

/*  3--使用 VueRouter*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
      path: "home1",
      name: "home1",
      component: () => import( '../views/Home1.vue')
      },
      {
      path: "home2",
      name: "home2",
      component: () => import( '../views/Home2.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/',
    redirect:"/home/home1"   /* 路由重定向 */
  }
]

/*  4-- 创建 router 实例 */
const router = new VueRouter({
  routes
})

/* 5--导出 router */
export default router
