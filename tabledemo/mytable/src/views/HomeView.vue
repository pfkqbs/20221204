<template>
  <div class="home">
    <!-- <HelloWorld msg="主页" /> -->
    <el-container>
      <el-header class="my-header">
        欢迎来到 XX 后台管理系统
      </el-header>

      <el-container>
        <el-aside style="width:240px">

          <el-radio-group 
            v-model="isCollapse" 
            style="margin-bottom: 20px">
            <el-radio-button :label="false">
              展开
            </el-radio-button>
            <el-radio-button :label="true">
              收起
            </el-radio-button>
          </el-radio-group>

          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >

              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">模块</span>
              </template>

              <el-menu-item-group>
                <!-- <span slot="title">京东模块</span> -->

                <el-menu-item 
                  index="1-1" 
                    @click="tojdDataQuery"
                    >baidu一下
                </el-menu-item>

                <el-menu-item 
                  index="1-2" 
                  @click="toupload">
                  excel上传及前端解析
                </el-menu-item>

                <el-menu-item 
                  index="1-3" 
                  @click="toTable" >
                  动态组件演示
                </el-menu-item>

                <el-menu-item 
                  index="1-4" 
                  @click="tocomputed1" >
                  全选
                </el-menu-item>

                <el-menu-item 
                  index="1-5" 
                  @click="tocomputed2" >
                  购物车计算属性
                </el-menu-item>

                <el-menu-item 
                  index="1-6" 
                  @click="formvolid" >
                  表单
                </el-menu-item>

                <el-menu-item 
                  index="1-7" 
                  @click="formvolid2" >
                  表格单选
                </el-menu-item>

                <el-menu-item 
                  index="1-8" 
                  @click="formvolid3" >
                  表单验证
                </el-menu-item>
              </el-menu-item-group>

          </el-menu>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>

      </el-container>
    </el-container>
    <div>
      <!-- <el-date-picker v-model="startDate" type="date" placeholder="开始日期" value-format="yyyy-mm-dd">
      </el-date-picker>
      <span>-</span>
      <el-date-picker v-model="endDate" type="date" placeholder="结束日期" value-format="yyyy-mm-dd">
      </el-date-picker>
      <button @click="findList">查询</button> -->
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      isCollapse: false,
    };
  },
  methods: {
    findList() {
      console.log("查询", this.startDate, this.endDate);
      if (!this.startDate) {
        this.$message("请选择开始日期！");
        return;
      }

      if (!this.endDate) {
        this.$message("请选择结束日期！");
        return;
      }
      var sDate, eDate, sDate2, eDate2, iDate;

      // 开始日期转数组
      sDate = this.startDate.split("-");

      sDate2 = new Date(`${sDate[1] + 1}/${sDate[2]}/${sDate[0]}`);

      // 结束日期格式化
      eDate = this.endDate.split("-");

      eDate2 = new Date(`${eDate[1] + 1}/${eDate[2]}/${eDate[0]}`);

      iDate = parseInt(
        Math.abs(eDate2.getTime() - sDate2.getTime()) / 1000 / 60 / 60 / 24
      );
      console.log("相差的天数", iDate);

      if (iDate > "365") {
        this.$message("日期区域不能超过365天！");
        return;
      }

      if (eDate2.getTime() - sDate2.getTime() < 0) {
        this.$message("结束日期不能大于开始日期！");
        return;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tojdDataQuery(){
      this.$router.push('/Baidu')
    },
    toupload(){
      this.$router.push('/uploadTable')
    },
    toTable(){
      this.$router.push('/tableqiao')
    },
    tocomputed1(){
      this.$router.push('/comput')
    },
    tocomputed2(){
      this.$router.push('/comput2')
    },
    formvolid(){
      this.$router.push('/Form')
    },
    formvolid2(){
      this.$router.push('/RadioForm')
    },
    formvolid3(){
      this.$router.push('/about')
    }
  },
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* .isCollapse{
  width:15vw;
} */
.my-header{
  background: #05b133;
  height:60px;
  line-height:60px;
}
</style>