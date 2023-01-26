//把 axios 封装成一个插件

import axios from 'axios'

axios.defaults.baseURL = "https://api.it120.cc/xiaochengxu"


export default{
    install(Vue){
        Vue.proptotype.$http = axios;
    }
}

// 可以在main.js 中导入，使用axios
// import axios  from './http'
// Vue.use(axios)