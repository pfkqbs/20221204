<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-right="onClickRight"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in pics" :key="v.id">
           <img :src="v.pic" alt="">
	  </van-swipe-item>
    </van-swipe>
    <div>
      <p>{{basicInfo.name}}</p>
      <p>{{basicInfo.minPrice}}</p>
    </div>
    <div v-html="content" class="content"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="toCart"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
	data() {
		return {
			checked:false,
			pics:[],
			content:"",
			basicInfo:{}
		}
	},
	mounted() {
		this.getInfo(this.$route.query.id)
	},
  methods: {
    onClickRight() {
      // this.$router.go(-1);
      this.$router.push('/');
    },
	async getInfo(id){
		const res=await this.$http.get("/shop/goods/detail",{
			params:{id}
		})
		// console.log(res);
		let obj=res.data.data
		this.pics=obj.pics
		this.content=obj.content
		this.basicInfo=obj.basicInfo
	},
	toCart(){
        let {id,name,minPrice,pic,checked}=this.basicInfo
		let obj={
			id,name,minPrice,pic,checked
		}
		this.$store.commit("add",obj)
		this.$router.push("/base/cart")
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
.content img{
	width: 100%;
	height: 360px;
}
</style>