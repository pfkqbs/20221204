<template>
  <div class="hello">
    我是{{ name  }}，今年 {{ age }}了。我的工作是{{ msg.type }}
    <button @click="clickFn">点击变年轻</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    const name = ref('老年张三')
    const age = ref(88)
    const msg = ref({
      type:"前端老司机",
      salary:"30k"
    })

    function clickFn(){
      name.value = "青年张三"
      age.value = 18
      msg.value.type = "航天员"
    }
    return {
      name,
      clickFn,
      age,
      msg
    }
  }
}
</script>

<style scoped lang="scss">

</style>
