import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/Home.vue'),
    children:[
      {
        path: 'first',
        name: 'first',
        component: () => import( '../components/home/First.vue'),
        alias:'h'  /* 别名 */
      },
      {
        path: 'classification',
        name: 'classification',
        component: () => import( '../components/home/Classification.vue'),
        alias:'f',  /* 别名 */
        children:[
          {
            path: 'leftright',
            name: 'leftright',//命名路由
            component: () => import( '../components/Clstwo.vue'),
          }
        ]
      },
      {
        path: 'shoppingCart',
        name: 'shoppingCart',
        component: () => import( '../components/home/ShoppingCart.vue'),
        alias:'c'  /* 别名 */
      },
    ]
  },
  {
    path: '/',
    // redirect: '/home/first',    //或者
    redirect: {'name':"first"},
  },
  {
    path: `/info/:myid`,
    name: 'info',
    component: () => import( '../views/Info.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
