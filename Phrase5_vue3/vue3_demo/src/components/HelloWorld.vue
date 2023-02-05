<template>
  <div class="hello">
    我是{{ person.name  }}，今年 {{ person.age }}了。我的工作是{{ person.msg.type }}工资是{{person.msg.salary  }} {{ person.namehobby }}
    <button @click="clickFn">点击变年轻</button>
  </div>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    const person = reactive({
      name:'老年张三',
      age:18,
      hobby:["抽烟","打游戏","喝酒"],
      msg:{
        type:"前端老司机",
        salary:"30k"
      }
      
    })


    function clickFn(){
      person.name = "青年张三"
      person.age = 18
      person.msg.type = "航天员"
      person.msg.salary = "90k"
      person.hobby[0] = "学习"
    }
    return {
      person,
      clickFn,
    }
  }
}
</script>

<style scoped lang="scss">

</style>
