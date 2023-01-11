<template>
  <!-- 展示的表格--点击数据跳转至其他组件（动态组件） -->
  <div v-if="show">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="calc(100vh-60px)"
      @cell-click="tocomponents">
      <el-table-column
        fixed
        prop="name"
        label="模块名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"
        width="120">
        <template 
          slot-scope="scope">
          {{ scope.row.num }}
        </template>
      </el-table-column>   
    </el-table>
  </div>
  <div v-else="!show">
    <components :is="toCom"></components>
  </div>

  </template>
  
  <script>
  import TableOne from '../components/TableOne.vue'
  import TableTwo from '../components/TableTwo.vue'
  import TableThree from '../components/TableThree.vue'

    export default {
      name:"tableqiao",
      components:{TableOne,TableTwo,TableThree},
      data() {
        return {
          show:true,
          toCom:"TableOne",
          formData:{
            input:""
          },

          tableData: [
            {
            name: '模块1',
            num: '3',
         
            }, 
            {
              name: '模块2',
              num: '4',
          
            }, 
            {
              name: '模块3',
              num: '5',
          
            }]
        }
      },
      methods:{
        tocomponents(val){
          // console.log('val',val )
          if(val.name == "模块1"){
            this.show = false
            this.toCom = "TableOne"
          }else if(val.name == "模块2"){
            this.show = false
            this.toCom = "TableTwo"
          }else if(val.name == "模块3"){
            this.show = false
            this.toCom = "TableThree"
          }
        }
      },

    }
  </script>