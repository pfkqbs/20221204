<template>
  <div>
    <el-form
      :model="data"
      style="width:500px"
      label-position="right"
      label-width="80px"
      label-suffix=":"
      :rules="rules"
      status-icon
      hide-required-asterisk >

      <el-form-item 
        label="用户名" 
        prop="name" 
        :validate-status="status">
          <el-input clearable 
          v-model="data.name" 
          @blur="validateName"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input 
          clearable 
          v-model="data.password" 
          type="password">
        </el-input>
      </el-form-item>

      <el-form-item 
        label="确认密码" 
        prop="re_password">
        <el-input 
          clearable 
          v-model="data.re_password" 
          type="password">
        </el-input>
      </el-form-item>

      <el-form-item label="手机号" prop="phone">
        <el-input 
          clearable 
          v-model="data.phone" 
          type="text">
        </el-input>
      </el-form-item>

       <el-form-item label="单价(元)" prop="price">
        <el-input 
          v-model="data.price"  
          type="text"
          clearable>
        </el-input>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:"AboutView",
  data () {
    // 封装一下相似功能的校验器
    const validatorMethod = function (length, message) {
      return (rule, value, callback) => {
        if (value.length < length) {
          callback(new Error(message))
        } else {
          callback()
        }
      }
    }
    // 确认密码校验器
    const comfirmPassword = (rule, value, callback) => {
      if (value !== this.data.password) {
        return callback(new Error('两次输入密码不一致'))
      }
      callback()
    }
    // 手机号校验器
    const phoneValidator = (rule, value, callback) => {
      if (/^1[3456789]\d{9}$/.test(value)) { // 利用正则表达式校验手机号
        callback()
      } else {
        callback(new Error('请输入正确手机号'))
      }
    }
    return {
      status: '',
      data: {
        name: '',
        password: '',
        re_password: '',
        phone: null,
        price: 0,

      },
      // 所有校验规则
      rules: {
        name: [ // 用户名验证
          { required: true, trigger: 'change', message: '用户名必须填写' },
          { validator: validatorMethod(3, '用户名长度不能小于3'), trigger: 'change' }
        ],
        password: [ // 密码验证
          { required: true, trigger: 'change', message: '密码不能为空' },
          { validator: validatorMethod(8, '密码长度不能小于8'), trigger: 'change' }
        ],
        re_password: [ // 重复密码验证
          { required: true, trigger: 'change', message: '请再一次输入密码' },
          { validator: comfirmPassword, trigger: 'blur' }
        ],
        phone: [ // 手机号验证
          { required: true, trigger: 'change', message: '手机号不能为空' },
          { min: 11, max: 11, trigger: 'change', message: '请输入11位手机号码' },
          { validator: phoneValidator, trigger: 'blur' }
        ],
        price: [
         {required:true,message:'请输入金额',tigger:'blur'},
        {pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, message: '请输入正确格式,可保留两位小数' }
        ]


      }
    }
  },
  components: {

  },
  methods: {
    
    validateName (e) {
      if (e.target.value.trim() !== '') { // 输入框为空不校验
        // status的四个值：error(失败)，success(成功)，validating(验证中)，null
        this.status = 'validating'
        setTimeout(() => { // 模拟发送ajax请求，检查用户名是否重复
          if (e.target.value === 'wjg') {
            this.status = 'success'
          } else {
            this.status = 'error'
          }
        }, 2000)
      }
    },


  }
}
</script>

<style scoped>
</style>


