<template>
  <div class="hello">
    我是{{ name  }}，今年 {{ age }}了。我的工作是{{ msg.type }} {{ hobby }}
    <button @click="clickFn">点击变年轻</button>
  </div>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    const name = ref('老年张三')
    const age = ref(88)
    const hobby = reactive(["抽烟","打游戏","喝酒"])
    const msg = reactive({
      type:"前端老司机",
      salary:"30k"
    })

    function clickFn(){
      name.value = "青年张三"
      age.value = 18
      msg.type = "航天员"
      hobby[0] = "学习"
    }
    return {
      name,
      clickFn,
      age,
      msg,
      hobby
    }
  }
}
</script>

<style scoped lang="scss">

</style>
