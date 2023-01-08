<template>
  <div class="home">
    <div class="content">
        <router-view></router-view>
    </div>
    <div class="footer">
      <ul>
        <router-link to="/home/h" tag="li">首页</router-link>
        <router-link to="/home/f" tag="li">分类</router-link>
        <router-link to="/home/c" tag="li">购物车</router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      arr:[]
    }
  },
  methods:{
  
  },
 
}
</script>
<style scoped>
.home{
  height: 100vh;/* 设置高度 很关键 */
  display: flex;
  flex-direction: column;
}
.content{
  flex:1;
  overflow: auto;/* 底部固定 内容滚动 */
}
.footer >ul{
  display: flex;
  line-height:10vh;
  justify-content: space-around;
}
.footer >ul>li{
  width:100%;
  text-align: center;
  border:1px solid black;
}
.router-link-active {
  background: darkred;
  color:#fff;
}
</style>
