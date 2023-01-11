<template>
<!-- excel上传及前端解析 -->
  <div >
    <h2>{{message}}</h2>

    <el-upload
      action
      accept = ".xlsx, .xls"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handle">
      <el-button type="primary">打开excel</el-button>
    </el-upload> 

    <el-table :data="tableData">
        <el-table-column 
        prop="name" 
        label="姓名" 
        width="200">     
        </el-table-column>

        <el-table-column 
        prop="age" 
        label="年龄"
        width="200">
          <!-- 设置年龄可修改 -->
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.age">
          </template>
        </el-table-column>
    </el-table>

  </div>
</template>
 
<script>
import * as XLSX from 'xlsx/xlsx.mjs'
export default {
  name: 'UploadTable',
  data(){
    return {
      message:' XLSX上传前端解析的使用及修改',
      tableData:[]
    }
  },
  methods:{
    readFile(file){//文件读取
      return new Promise(resolve => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);//以二进制的方式读取
        reader.onload = ev =>{
          resolve(ev.target.result);
        }
      })
    },
   async handle(ev){
      let file = ev.raw;
      console.log(file)
      if(!file){
        console.log("文件打开失败")
        return ;
      }else{
       let data = await this.readFile(file);
       let workbook = XLSX.read(data,{ type: "binary"});//解析二进制格式数据
       console.log('二进制数据的解析:')
       console.log(workbook)
       let worksheet = workbook.Sheets[workbook.SheetNames[0]];//获取第一个Sheet
       let result = XLSX.utils.sheet_to_json(worksheet);//json数据格式
       console.log('最终解析的 json 格式数据:')
       console.log(result)
       this.tableData =result
      }
    }
  }
}
</script>
 
<style>
 
</style>