<template>
  <div class="form-item" :style="inLineStyle">
    <div class="form-body" :class="{ active: active }" >
      <div class="pr">
        <van-field
          :type="value_type"
          v-model="username"
          :error="error"
          @focus="active = true"
          @blur="active = false"
          placeholder="密码"
        />
        
        <div class="field-right-inner">
          <!-- <i 
          class="icon icon-size-27" 
          :class="value_type === 'password' ? 'icon-eye-off' : 'icon-eye-on'"
          @click="toggleType"></i> -->

          <i 
          class="icon "
          @click="toggleType">
            <svg-icon :icon-class="value_type === 'password' ? 'eyeOff' : 'eye' "></svg-icon>
        </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    inLineStyle:{
      type:Object,
      default:() =>({})
    }
  },
  data() {
    // 这里存放数据
    return {
      username: '123456',
      active: false,
      error: false,
      value_type:"password"
    };
  },
  // 计算属性类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    toggleType(){
      console.log(this.value_type)
      this.value_type = this.value_type == 'password' ? 'text' : 'password' 
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="scss">
.field-right-inner {
  position: absolute;
  right:0;
  top: 0;

}
</style>