<template>
  <div>
    <div class="shopN">
      <h1>{{ shopName.value }}</h1>
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in bannerList" :key="v.id">
        <img :src="v.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div>
      <p>{{ shopMessage.name }}</p>
      <p>{{ shopMessage.address }}</p>
      <p>{{ shopMessage.openingHours }}</p>
      <p>联系电话 {{ shopMessage.linkPhone }}</p>
    </div>
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="v in tuiJian" :key="v.id" @click="toInfo(v.id)">
        <van-image :src="v.pic" />
		<p>{{v.name}}</p>
		<p>{{v.originalPrice}}</p>
      </van-grid-item>
      
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopName: {},
      bannerList: {},
      shopMessage: [],
      tuiJian: [],
    };
  },
  created() {
    this.getShopName();
    this.getBannerList();
    this.getShopMessage();
    this.gettuiJian();
  },
  methods: {
    async getShopName() {
      const res = await this.$http.get("/config/values?keys=mallName");
      // console.log(res);
      this.shopName = res.data.data[0];
    },
    async getBannerList() {
      const res = await this.$http.get("/banner/list");
      // console.log(res);
      this.bannerList = res.data.data;
    },
    async getShopMessage() {
      const res = await this.$http.get("/shop/subshop/list");
      // console.log(res);
      this.shopMessage = res.data.data[0];
    },
    async gettuiJian() {
      const res = await this.$http.post("/shop/goods/list");
      //console.log(res);
      this.tuiJian = res.data.data;
    },
	toInfo(id){
      this.$router.push({"name":"info",query:{id}})
	  console.log(id);
	}
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  height: 150px;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.shopN {
  text-align: center;
}
</style>