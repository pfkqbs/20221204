<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item  to="/base/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item  to="/base/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item  to="/base/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
</style>