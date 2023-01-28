import apps from './app'
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from 'qiankun'

// 注册微应用基础信息
registerMicroApps(apps, {
  beforeLoad: app => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    app => {
      console.log("before mount app.name====>>>>>", app.name);
    }
  ],
  afterMount: [
    app => {
      console.log("after mount app.name====>>>>>", app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log("after unmount app.name====>>>>>", app.name);
    }
  ]
})

// 添加全局的未捕获异常处理器
addGlobalUncaughtErrorHandler((event) => {
  console.err('微应用加载失败！', event);
})

export default start
