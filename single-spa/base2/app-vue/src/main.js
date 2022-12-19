//引⼊Vue3的初始化对
// import Vue from 'vue'
import {h,createApp } from 'vue'

//引⼊singleSpaVue插件
import singleSpaVue from 'single-spa-vue';

//初始化publicPath
import './set-public-path'

//引⼊根组件
import App from './App.vue'

//引⼊路由对象
import router from './router';

// createApp(App).use(router).mount('#app')

//得到子应用⽣命周期对象
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                // single-spa props are available on the "this" object. Forward them to your component as needed.
                // https://single-spa.js.org/docs/building-applications#lifecycle-props
                // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
                /*
                name: this.name,
                mountParcel: this.mountParcel,
                singleSpa: this.singleSpa,
                */
            });
        },
    },

    //实例化成功后触发的函数
    handleInstance(app) {
        app.use(router);
    },
});

//导出主应用加载子应用时所需要的函数对象
console.log(vueLifecycles);
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
