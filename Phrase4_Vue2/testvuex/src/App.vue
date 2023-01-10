<template>
  <div id="app">
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <router-view/>
  </div>
</template>
<script>
import One from './views/One.vue'
import Two from './views/Two.vue'
import Three from './views/Three.vue'
import Four from './views/Four.vue'
export default {
  components:{
    One,Two,Three,Four
  },
  data(){
    return {

    }
  }
}
</script>
<style>

</style>
