<template>
  <div class="home">

    <nav>
      <router-link to="/home/home1">Home1</router-link> |
      <router-link to="/home/home2">home2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
