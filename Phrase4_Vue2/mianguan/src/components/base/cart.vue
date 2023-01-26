<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
	<van-swipe-cell v-for="v in cartList" :key="v.id">
  <van-card
    :num="v.minBuyNumber"
    :price="v.minPrice"
    :title="v.name"
    class="goods-card"
    :thumb="v.pics"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="del(v.id)"/>
  </template>
</van-swipe-cell>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
	...mapMutations(["add"]),
	...mapMutations(["del"])

  },
//   mounted() {
// 	  this.toCart(this.$route.query.id)
//   },
  computed:{
	  ...mapState(["cartList"])
  }
  
};
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
</style>