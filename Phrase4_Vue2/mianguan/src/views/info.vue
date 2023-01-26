<template>
  <div>
    <van-nav-bar 
      title="商品详情" 
      left-text="返回" 
      left-arrow 
      @click-left="onClickLeft" />
    <div>
      <p>{{ basicInfo.name }}</p>
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in pics" :key="v.id">
        <img :src="v.pic" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div>
      <p>￥{{ basicInfo.minPrice }}</p>
    </div>

    <div class="btn">
      <p>购买数量</p>
      <p  v-for="v in pics" :key="v.id">
        <button @click="jian(v.id)">-</button>
        <span>{{ basicInfo.minBuyNumber }}</span>
        <button @click="jia(v.id)">+</button>
      </p>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="toCart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: {},
      basicInfo: [],
    };
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    async getInfo(id) {
      const res = await this.$http.get("/shop/goods/detail", {
        params: { id },
      });
      console.log(res);
      let obj = res.data.data;
      this.basicInfo = obj.basicInfo;
      this.pics = obj.pics;
    },
    toCart() {
      let { id, name, minPrice, num } = this.basicInfo
      let obj = {
        id, name, minPrice, num
      }
      this.$router.push("/base/cart")
      this.$store.commit("add", obj)
    },
    jia(id) {
      console.log('id',id)
    },
    jian(id) {
      console.log('id',id)
    },
  },
  mounted() {
    this.getInfo(this.$route.query.id);
    //console.log(id);
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  height: 280px;
}

.my-swipe img {
  width: 100%;
  height: 100%;
}

.btn {
  display: flex;
  justify-content: space-between;
}
</style>