<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-swipe-cell v-for="v in cartList" :key="v.id">
      <input type="checkbox" v-model="v.checked" @change="prev" />
      <van-card :num="v.num" :price="v.minPrice" :title="v.name" class="goods-card" :thumb="v.pic" />
      <div class="btn">
        <van-button icon="plus" type="primary" @click="jia(v.id)" />
        <van-button icon="minus" type="primary" @click="jian(v.id)" />
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="del(v.id)" />
      </template>
    </van-swipe-cell>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="all" @click="fn">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      all: false,
    };
  },
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push('/');
    },
    ...mapMutations(["del"]),
    ...mapMutations(["jia"]),
    ...mapMutations(["jian"]),
    fn() {
      this.cartList.forEach((v) => (v.checked = this.all));
    },
    prev() {
      let index = this.cartList.findIndex((v) => v.checked == false);
      if (index == -1) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
  },

  computed: {
    ...mapState(["cartList"]),
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

.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

.btn {
  float: right;
}
</style>