import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    /* 路由元信息：可以设置权限 */
    meta:{
      title:"主页"
    },
    component: () => import( '../views/Home.vue'),
    children:[
      {
        path: 'first',
        name: 'first',
        component: () => import( '../components/home/First.vue'),
        alias:'h', /* 别名 */
        meta:{
          title:"首页"
        },
      },
      {
        path: 'classification',
        name: 'classification',
        component: () => import( '../components/home/Classification.vue'),
        alias:'f',  /* 别名 */
        meta:{
          title:"分类"
        },
        children:[
          {
            path: 'leftright',
            name: 'leftright',//命名路由
            component: () => import( '../components/Clstwo.vue'),
            meta:{
              title:"分类导航"
            },
          }
        ]
      },
      {
        path: 'shoppingCart',
        name: 'shoppingCart',
        component: () => import( '../components/home/ShoppingCart.vue'),
        alias:'c',  /* 别名 */
        meta:{
          title:"购物车"
        },

        // 路由 独享钩子函数
        beforeEnter:(to,from,next)=>{
          console.log( "登录后，可以保存您选择的商品")
          next()
        }
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
     meta:{
          title:"详情页"
        },
  }
]
const router = new VueRouter({
  routes
})

//路由进入前
router.beforeEach( (to,from,next)=>{


  next()
})

//路由进入前
router.afterEach( (to,from,next)=>{
  console.log( '',to.meta)
  document.title = to.meta.title  //路由设置 meta 路由元信息；根据跳转的页面 设置标题

  // next()
})



export default router
