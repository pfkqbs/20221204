<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in bannerList" :key="v.id">
           <img :src="v.picUrl" alt="">
	  </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="v in goodsList" :key="v.id" @click="toInfo(v.id)">
        <van-image :src="v.pic" />
		<p>{{v.name}}</p>
		<p>{{v.minPrice}}</p>
      </van-grid-item>
     
    </van-grid>
  </div>
</template>

<script>
export default {
	data() {
		return {
			bannerList:[],
			goodsList:[]
		}
	},
	created() {
		this.getBannerList();
		this.getGoodsList();
	},
	methods: {
		async getBannerList(){
			const res=await this.$http.get("/banner/list")
			this.bannerList=res.data.data
		},
		async getGoodsList(){
			const res=await this.$http.get("/shop/goods/list")
			// console.log(res);
			this.goodsList=res.data.data
		},
		toInfo(id){
			this.$router.push({"name":"info",query:{id}})
		}

	},
};
</script>

<style>
.my-swipe .van-swipe-item {
  height: 150px;
}
.my-swipe img{
	width: 100%;
	height: 100%;
}
</style>