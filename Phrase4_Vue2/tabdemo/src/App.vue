<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Tab />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Tab from "./tab/Tab";

export default {
  name: "App",
  components: {
    HelloWorld,
    Tab,
  },
};
</script>

<style>

</style>
