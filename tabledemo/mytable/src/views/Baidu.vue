<template>
  <div>
    <div class="search">
      <!-- logo -->
      <img
        src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        alt=""
        class="logo"
      />
      <!-- 查询输入框 -->
      <div class="sear-box">

        <input
          v-model="kw"
          type="text"
          @keydown.prevent.up="up"
          @keydown.prevent.down="down"
          @keydown.enter="toDetail(idx, 2)" />
          
      </div>
      <div class="btn">百度一下</div>
    </div>
    <div class="info">
      <ul>

        <li
          v-for="(item, index) in kwArr"
          :key="index"
          :class="{ cur: idx == index }"
          @mouseenter="showIdx(index)"
          @click="toDetail(item, 1)" >

          {{ item }}
        </li>

      </ul>
    </div>
  </div>
</template>

<script  >
export default {
  name:"Baidu",
  data() {
    return {
      kw: "", //查询的关键字
      newScript: null, //新的查询jsonp的script
      oldScript: null, //旧的查询jsonp的script
      kwArr: null, //关键字数组
      idx: -1, //当前处查询关键字kwArr数组的下标
    };
  },

  //实时监听kw关键字
  watch: {
    kw(val) {
      console.log(val);

      //判断如果是有旧的script标签清除掉
      if (this.oldScript && val) {
        document.body.removeChild(this.oldScript);
      }

      if (!val) {
        this.kw = "";
        this.kwArr = [];
        return;
      }
      //请求jsonp数据
      this.newScript = document.createElement("script");

      //给创建的script标签添加src属性，是百度的接口地址
      this.newScript.src =
        "http://suggestion.baidu.com/su?cb=callback&wd=" + val;

      //上树
      document.body.appendChild(this.newScript);

      //接收已经上树的script标签 目的是为了防止script标签累计上树
      this.oldScript = this.newScript;
      this.callbackFun();
    },
  },
  methods: {
      //
    callbackFun() {
      let that = this;
      window.callback = function (data) {
        that.kwArr = data.s;
      };
    },
    //键盘事件
    up() {
      this.idx++;
      //判断范围
      if (this.idx > this.kwArr.length - 1) {
        this.idx = -1;
      }
    },
    //键盘事件
    down() {
      this.idx--;
      //判断范围
      if (this.idx < -1) {
        this.idx = this.kwArr.length - 1;
      }
    },
    showIdx(num) {
      this.idx = num;
    },
    //点击到详情页
    toDetail(val, type) {
      console.log(val);
      if (type == 1) {
        this.kw = val;
      } else if (type == 2) {
        this.kw = this.kwArr[val];
      }
      window.open("http://www.baidu.com/s?ie=utf-8&w=" + this.kw, "_blank");
    },
  },
};
</script>

<style scoped>
.search .logo {
  width: 101px;
  height: 33px;
}
.search .sear-box {
  display: inline-block;
  width: 558px;
  height: 36px;
  border: 2px solid #c4c7ce;
  border-radius: 10px 0 0 10px;
  border-right: 0;
  overflow: hidden;
  vertical-align: middle;
}
.search .sear-box input {
  outline: 0;
  font: 16px/18px arial;
  padding: 10px 0 10px 14px;
  margin: 0;
  width: 484px;
  background: transparent;
  border: 0;
}
.search .btn {
  display: inline-block;
  vertical-align: middle;
  width: 112px;
  cursor: pointer;
  line-height: 41px;
  line-height: 40px\9;
  background-color: #4e6ef2;
  border-radius: 0 10px 10px 0;
  font-size: 17px;
  box-shadow: none;
  font-weight: 400;
  color: #fff;
  text-align: center;
}
.info {
  padding-left: 60px;
  line-height: 30px;
  font-size: 14px;
}
.info ul li {
  list-style: none;
  cursor: pointer;
}
.info ul li.cur {
  color: #4e71f2;
}
.info ul li:hover {
  color: #4e71f2;
}
</style>