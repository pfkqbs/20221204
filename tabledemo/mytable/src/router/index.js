import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>import("../views/HomeView.vue"),
    meta:{
      title:"首页"
    },
    children:[
      {
        path: "baidu",
        name: "baidu",
        component: () =>import("../views/Baidu.vue"),
        meta:{
          title:"百度"
        },
      },
      {
        path: "uploadTable",
        name: "uploadTable",
        component: () =>import("../views/UploadTable.vue"),
        meta:{
          title:"上传文件"
        },
      },
      {
        path: "tableqiao",
        name: "tableqiao",
        component: () =>import( "../views/tableqiao.vue"),
      },
      {
        path: "comput",
        name: "comput",
        component: () =>import("../views/Comput.vue"),
      },
      {
        path: "/comput2",
        name: "comput2",
        component: () =>import("../views/Comput2.vue"),
      },
      {
        path: "/Form",
        name: "Form",
        component: () =>import("../views/Form.vue"),
      },
      {
        path: "/RadioForm",
        name: "RadioForm",
        component: () =>import("../views/RadioForm.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () =>import("../views/AboutView.vue"),
      },
    ]
  }

  
];

const router = new VueRouter({
  routes,
});

export default router;
