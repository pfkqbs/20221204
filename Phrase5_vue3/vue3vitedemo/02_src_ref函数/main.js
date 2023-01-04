// 引入的不是 Vue 构造函数了，是一个名为createApp 工厂函数
// 这里不支持vue2的写法
import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
// 上面可以写成：
// 实际是创建一个实力对象--app （类似于之前的vue2 中的vm，但是app比VM更轻）
// const app = createApp(App)
// console.log("app",app);
//挂载
// app.mount("#app")

// 去除挂载
// setTimeout( ()=>{
//     app.unmount("#app")
// },2000)


// vue2 原来是这么写的
// const vm = new Vue({
//     render:h => h(App)
// })
// vm.$mount('#app')
