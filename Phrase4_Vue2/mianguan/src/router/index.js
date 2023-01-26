import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
	mode:"hash",
	routes:[
		{
           path:"/base",
		   component:()=>import("../views/base.vue"),
		   name:"base",
		   children:[
			   {
				   path:"home",
				   component:()=>import("../components/base/home.vue"),
				   name:"home"
			   },
			   {
				path:"cart",
				component:()=>import("../components/base/cart.vue"),
				name:"cart"
			},
			{
				path:"user",
				component:()=>import("../components/base/user.vue"),
				name:"user"
			},
		   ]
		},
		{
			path:"/info",
			component:()=>import("../views/info.vue"),
			name:"info"
		 },
		 {
            path:"/",
			redirect:"/base/home"
		 },
		{
			path:"*",
			component:()=>import("../views/404.vue")
		}
	]
})

export default router