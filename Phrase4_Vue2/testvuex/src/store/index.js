
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态
  state: {
    name:"join"
  },
  // 相当于 计算属性  对state处理
  getters: {

  },
  // 改变状态的方法
  mutations: {
      updateName(state){
          state.name = "laowang"

      }
  },
  // 方法---  异步操作
  actions: {

  },
  modules: {

  }
})
