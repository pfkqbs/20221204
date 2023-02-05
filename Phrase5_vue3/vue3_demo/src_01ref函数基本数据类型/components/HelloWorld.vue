<template>
  <div class="hello">
    我是{{ title  }}，今年 {{ age }}了。
    <button @click="clickFn">点击变年轻</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    const title = ref("老年张三")
    const age = ref(88)

    function clickFn(){
      title.value = "青年张三"
      age.value = 18
    }
    return {
      title,
      clickFn,
      age
    }
  }
}
</script>

<style scoped lang="scss">

</style>
