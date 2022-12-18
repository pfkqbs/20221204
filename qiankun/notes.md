[toc]

- **微前端是什么**？
    - 参考网站：
        - https://micro-frontends.org
        - https://microfrontends.com

    - 微前端就是与多个可以独立发布功能的团队一起构建现代化 `web` 应用程序的技术、策略和方法，将大而可怕的事物分割成更小、更易于管理的部分，然后明确它们之间的依赖关系。我们的技术选择，我们的代码库，我们的团队，以及我们的发布过程都应该能够相互独立地操作和进化，而不需要过度的协调。微前端架构是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 `Web` 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。


- **为什么要用微前端**？
    - 拆分巨型应用，使应用方便迭代更新
    - 兼容历史应用，实现增量开发

- **特点**：
    - 独立部署
    - 增量迁移
    - 团队自治
    - 松耦合代码

- **优点**：

    - 通过路由进行跨应用程序通信
    - 解决了大型项目如何迭代的问题
    - 解决了多团队技术栈不同的问题，实现`react`和`Vue`等框架整合

- **缺点**：

    - 有效载荷大小
    - 环境差异配置难
    - 业务和治理复杂
    - 微前端结构方案
    - 自由组织模式
    - 没有特别形势，类似`iframe`嵌套、`npm`包自由发挥
    - 基座模型
    - 类似微服务的注册中心模式，有个基座，其他应用都往里加
    - 去中心模式
    - `webpack5`模块联邦，多个应用可以互相嵌套，可以深入到组件导入导出

- **主流微前端框架**
    - 国内使用基座模式偏多
        - [`Single-Spa`](https://qiankun.umijs.org/zh/guide)：最早的微前端框架，兼容多种前端技术栈。
        - [`Qiankun`](https://single-spa.js.org/)：基于`Single-Spa`，阿里系开源微前端框架。


本文内容：

- `qiankun`的使用与技术栈无关，同时子应用也是可以自由选择开发框架的，可以自己制定开发规范。
- `qiankun`在开发环境下，主项目和全部子项目都会运行起来，如果子项目没有运行起来，当主项目菜单切到该子项目的时候，会打不开。所以在开发环境就会跑起多个服务。
- 部署的时候，主项目和子项目都需要分别打包，通常在主项目创建一个文件夹，子项目都打包后，放在主项目文件夹下面。这样之后跑起一个服务，同时可以使用子项目的路径，独自运行子项目。

## 初始化项目

- 创建一个文件夹`qiankun-demo`，并初始化。

`npm init --yes`

- 安装`npm-run-all`，只是一个辅助开发用的库，所以加上`-dev`

```sh
npm i npm-run-all --save-dev
```

**`npm-run-all`** 提供了多种运行多个命令的方式，常用的有以下几个：
**`–parallel`**: 并行运行多个命令，例如：`npm-run-all --parallel lint build`
**`–serial`**: 多个命令按排列顺序执行，例如：`npm-run-all --serial clean lint build:**`
**`–continue-on-error`**: 是否忽略错误，添加此参数` npm-run-all` 会自动退出出错的命令，继续运行正常的
**`–race`**: 添加此参数之后，只要有一个命令运行出错，那么 `npm-run-all `就会结束掉全部的命

- 接着在这个文件夹里面创建主项目main、两个子项目`vue-one`、`vue-two`

```sh
vue create main
vue create vue-one
vue create vue-two
```

老铁们，下面就是重点了。

## 配置主文件
- 子项目的端口号必须固定，不然端口号不同导致匹配不上。

新建2个环境配置文件

`.env.development`配置开发环境

`VUE_APP_VUE_ONE=http://localhost:5501`
`VUE_APP_VUE_TWO=http://localhost:5502`

`.env.production`配置生产环境

`VUE_APP_VUE_ONE=http://localhost:5050/subapp/vue-one/`
`VUE_APP_VUE_TWO=http://localhost:5050/subapp/vue-two/`

这里将开发环境子应用端口固定好，并将生产环境(`http://localhost:5050`)中的域名和子应用的访问路径写好（这里之所以有`/subapp/vue-one/`，是因为后面会新建个`subapp`文件夹并存放打包后的子项目）

- 主项目安装`qiankun`，子项目不需要

```sh
cd main && npm i qiankun --save
```

同时顺便也固定主项目的端口（可选），修改下主项目的`vue.config.js`

```js
module.exports = {
  devServer: {
    port: 5500,
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-test'
        return args
      })
  }
};
```

## 注册子项目。

在`main`主项目的`src`下新建`micro-app.js`：

```js
const microApps = [
    {
        name: 'vue-one',
        entry: process.env.VUE_APP_VUE_ONE,
        activeRule: '/vue-one'
    },
    {
        name: 'vue-two',
        entry: process.env.VUE_APP_VUE_TWO,
        activeRule: '/vue-two'
    }
]

const apps = microApps.map(item => {
    return {
        ...item,
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
        }
    }
})

export default apps
```


建议`name`与子项目的`package`里的`name`字段保持一致，保持唯一性
    `entry`是子项目入口，生产环境和开发环境地址是不一样的，这里使用了main文件中我们之前创建的环境文件中的值
    `activeRule`是子项目在主项目中的路由地址，建议后面也是项目名，统一一下会没那么乱
    `container`是主项目中的挂载容器`id`
    `routerBase`是主项目下发到子项目，可以在子项目中获取的到，这个到时候在子应用的路由中需要用到，用于设置路由的`base`路径

主项目`main.js`加载`qiankun`配置并启动

```js
import { createApp } from "vue";
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

const app = createApp(App);
app.mount("#app");

const config = {
    beforeLoad: [
        app => {
            console.log("%c before load",
                'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ], // 挂载前回调
    beforeMount: [
        app => {
            console.log("%c before mount",
                'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ], // 挂载后回调
    afterUnmount: [
        app => {
            console.log("%c after unload",
                'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ] // 卸载后回调
}
registerMicroApps(microApps, config)
setDefaultMountApp(microApps[0].activeRule) // 默认打开第一个子项目
start()
```

主项目公共菜单切换部分和容器部分

修改主项目的`App.vue`

```vue
<template>
  <div id="app">
    <div class="layout-header">
      <div class="logo">QIANKUN-WUZHIQUAN</div>
      <ul class="sub-apps">
        <li v-for="item in microApps" :class="{ active: item.activeRule === current }" :key="item.name"
          @click="goto(item)">{{ item.name }}</li>
      </ul>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>
<script>
import microApps from './micro-app'
export default {
  name: 'App',
  data() {
    return {
      microApps,
      current: '/sub-vue'
    }
  },
  methods: {
    goto(item) {
      console.log(item)
      this.current = item.activeRule
      history.pushState(null, item.activeRule, item.activeRule) // 没引入路由，所以不能用路由切换
    },
  },
  created() {
    const path = window.location.pathname
    if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
      this.current = path
    }
  },
}
</script>

<style>
html,
body {
  margin: 0 !important;
  padding: 0;
}


.layout-header {
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 50px;
  position: relative;
}

.logo {
  float: left;
  margin: 0 50px;
}

.sub-apps {
  list-style: none;
  margin: 0;
  overflow: hidden;
}

.sub-apps li {
  list-style: none;
  padding: 0 20px;
  cursor: pointer;
  float: left;
}

.sub-apps li.active {
  color: #42b983;
  text-decoration: underline;
}
</style>
```


至此主项目关键地方就搞完了，接着搞子项目。

## 配置子文件
子应用主要修改3个文件，`vue.config.js`、`main.js`，还有`router`下的`index.js`。
1、`vue.config.js`

```js
const port = 5501;//端口要和main里面配置的入口一致
const { name } = require('../package.json')
module.exports = {
  publicPath: "./",
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'//需要支持跨域
    }
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
};
```

`qiankun` 是通过 `fetch` 去获取子应用注册时配置的静态资源`url`，所有静态资源必须是支持跨域的，那就得设置允许源了
涉及到子应用名称的，都统一使用`package`中的`name`字段，官方也是推荐使用的这个`name`
需要打包成`umd`格式，是为了让 `qiankun` 拿到子应用export 的生命周期函数

2、`src/router/index.js`改为只暴露`routes`，`new Router`改到`main.js`中声明

```js
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })


export default routes;
```

3、`main.js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import { createRouter, createWebHistory } from 'vue-router'

import "./styles/index.css"

let install = null;
function render(props = {}) {
    const { container, routerBase } = props;
    const router = createRouter({
        history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL),
        routes
    })

    install = createApp(App).use(store).use(router).mount(container ? container.querySelector("#app") : "#app")

}
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
    render();
}

export async function bootstrap() { }

export async function mount(props) {
    render(props);
}
console.log('install===', install)
export async function unmount() {
    console.log('install===', install)
    // install.unmount();
    // install._container.innerHTML = '';
    install = null;

}
```


- 需要暴露`qiankun`的生命周期函数
- 注意销毁，防止内存泄漏
- `history`模式下需要设置路由的`base`，值是子项目中的`activeRule`对应的值，在`qiankun`环境下使用。
- 子应用独立运行时 `window.__POWERED_BY_QIANKUN__`为`false`，执行`render`创建`vue`对象；
- 运行在`qiankun`中时 `window.__POWERED_BY_QIANKUN__`为`true`，会执行`mount`周期函数，在`mount`这里创建`vue`对象

至此，本地开发的主项目和子项目都已经配置完了，分别将各个目录都跑起来，然后在浏览器中通过http://localhost:5500/就可以访问页面了。


点击下载源码学习

## 项目部署

我们在`main`项目的`.env.production`文件中配置了线上地址是`http://localhost:5050`，子项目存放在`subapp`文件夹下面，我们分别对`main`、`sub-vue`和`sub-react`进行打包，回到`qiankun-demo`执行`npm run build`即可


启动一个 http://localhost:5050 服务，将代码跑起来就好了。

## 用`Nginx`将本地`vue`打包的`dist`包运行起来

1，安装`nginx`，下载`nginx`选择`Stable version`稳定版即可，下载下来以后解压。

2，将`dist`包放入解压好的`nginx`文件夹中，如图所示

3，修改`conf`文件夹下的`nginx.conf`文件，修改两处即可，第一个为监听的端口号，第二个为`dist`,将文件保存(如果你打包到服务器上一般默认写`80`端口)，这里我们主目录里面配置的是`5050`端口，所以就改成`5050`端口。

4.来到之前有`nginx.exe`的项目目录下，在此处运行命令提示符，运行`start nginx`将服务启动，就可以将打包好的`dist`文件跑起来了，`localhost`: + 你刚刚监听的端口号（`localhost:5050`）

`what`？刷新页面或者手动输入地址http://localhost:5050/vue-two/会显示404，这是因为我们的路由配置是`history`模式，在使用`history`路由模式的时候,相当于我们直接去请求服务器上当前接口,如果服务器上并没有这个接口,那么就会报错(`hash`模式并不会有这个问题,因为`hash` #后不会被添加到`url`请求中)

解决办法：
只需要在 `location` 模块添加一行配置：` try_files $uri $uri/ /index.html`


重新配置完以后再重启`ngixn`，以管理员身份运行命令`nginx -s reload`

接着再回去刷新我们的页面就不会再404了。
————————————————
版权声明：本文为`CSDN`博主「背太阳的牧羊人」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u013565133/article/details/127652222