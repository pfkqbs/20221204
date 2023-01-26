<template>
  <div>
    <router-view></router-view>

    <van-tabbar route class="rou">
      <van-tabbar-item  to="/base/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/base/" icon="search">菜单</van-tabbar-item>
	  <van-tabbar-item  to="/base/cart" icon="cart-o">购物车</van-tabbar-item>
	  <van-tabbar-item  to="/base/user" icon="user-o">我的</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
 .rou{
   cursor: pointer;
 }
</style>