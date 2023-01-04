<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div> 姓名：{{name}}</div>
  <div> 年龄：{{age}}</div>
  <div> a：{{a}}</div>
  <button @click="sayHello"> vue3 说话</button>
  <br/>
  <br/>
  <button @click="sayWelcome"> vue2 说话</button>
  <br/>
  <br/>
  <button @click="test1"> vue2 读取 vue 3 的 数据</button>
  <br/>
  <br/>
  <button @click="test2"> vue3 读取 vue 2 的 数据</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { h }  from 'vue'
export default {
  name: 'App',
  //vue 2 的写法-------
  data(){
    return {
      sex:"男",
      a:"100",
    }

  },
  methods:{
    sayWelcome() {
      alert(`我是${ this.sex }`)
    },
    test1() {
      alert(`我是${ this.name }`)
    },
  },

  // ----------------------------

  //此处只是测试一下setuP，不考虑响应式
  setup(){
    //数据
    let name = "张三";
    let age = "18";
    let a = "18";

    //方法
    function sayHello(){
      alert(`我叫${ name }，今年${ age }岁了`)
    }

    //方法
    function test2(){
      alert(`我vue3 叫${ this.sex }`)
    }

    // 返回一个对象，则对象中的属性、方法，在模板中均可以直接使用！
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    // 还可以返回一个函数，渲染函数，则可以自定义渲染内容。
    // return ()=>h('h1','哈哈')


  },
  components: {
    HelloWorld
  }
}
</script>
