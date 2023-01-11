<template>
  <div>
      <!-- 点击单选按钮或者行实现单选选中 -->
    <el-table
      border
      :data="mlist"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column label="" width="35" align="center">
        <template slot-scope="scope">
          <el-radio
            :label="scope.row.materialId"
            v-model="tempRadio"
            @change="getTemplateRow(scope.row)"
          ></el-radio>
        </template>
      </el-table-column>

      <el-table-column label=" 姓名" width="100" align="center" prop="name">
      </el-table-column>
      <el-table-column label=" 年龄" width="100" align="center" prop="age">
      </el-table-column>
      <el-table-column label=" 爱好" width="100" align="center" prop="hobby">
      </el-table-column>
    </el-table>
    <hr/>
    <br>
    <el-table
      border
      :data="mlist"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column label="" width="35" align="center">
        <template slot-scope="scope">
          <el-radio
            :label="scope.row.$index"
            v-model="tempRadio"
            @change="getTemplateRow(scope.row)"
          ></el-radio>
        </template>
      </el-table-column>

      <el-table-column label=" 姓名" width="100" align="center" prop="name">
      </el-table-column>
      <el-table-column label=" 年龄" width="100" align="center" prop="age">
      </el-table-column>
      <el-table-column label=" 爱好" width="100" align="center" prop="hobby">
      </el-table-column>
    </el-table>
<hr/>
    <!-- 点击复选框或者当前行实现复选框选中 -->
    <el-table
      border
      :data="mlist2"
      style="width: 100%"
      highlight-current-row
      ref="multipleTable"
      @row-click="rowClick"
      @current-change="selectChange"
    >
      <el-table-column type="selection" width="50" align="center"> 
      </el-table-column>

      <el-table-column label=" 姓名" width="100" align="center" prop="name">
      </el-table-column>
      <el-table-column label=" 年龄" width="100" align="center" prop="age">
      </el-table-column>
      <el-table-column label=" 爱好" width="100" align="center" prop="hobby">
      </el-table-column>
    </el-table>
<hr/>
    <!-- 点击复选框或者当前行实现复选框选中 复选框单选 -->
    <el-table
      border
      :data="mlist3"
      style="width: 100%"
      highlight-current-row
      ref="multipleTable3"
      @row-click="rowClick3"
      @select="selectChange3"
    >
      <el-table-column type="selection" width="50" align="center"> 
      </el-table-column>

      <el-table-column label=" 姓名" width="100" align="center" prop="name">
      </el-table-column>
      <el-table-column label=" 年龄" width="100" align="center" prop="age">
      </el-table-column>
      <el-table-column label=" 爱好" width="100" align="center" prop="hobby">
      </el-table-column>
    </el-table>
  </div>
</template>

<script >
export default {
  data() {
    return {
        //单选框table数据
      mlist: [
        { materialId: 123, name: "张三", age: "18", hobby: "敲代码" },
        { materialId: 34, name: "李四", age: "25", hobby: "喝酒" },
      ],     
      tempRadio: false,
      currentRow: false,

        //复选框table数据
      mlist2: [
        { id: 123, name: "张三", age: "18", hobby: "敲代码" },
        { id: 34, name: "李四", age: "25", hobby: "喝酒" },
      ],
      multipleSelection: [],//
        //复选框table数据
      mlist3: [
        { id: 1, name: "张三", age: "18", hobby: "敲代码" },
        { id: 2, name: "李四", age: "25", hobby: "喝酒" },
        { id: 3, name: "李5", age: "5", hobby: "喝酒" },
        { id: 4, name: "李6", age: "4", hobby: "喝酒" },
      ],
      multipleSelection3: [],//
    };
  },
  methods: {
    //单选：点击按钮或者点击当前行实现单选===============================

    //currentRow和tempRadio是全局定义的变量
    //选中按钮时获取当前行数据
    selectHandle(index, row) {
      console.log(row, index);
      this.currentRow = row;
    },

    //点击表格中每一行也能选中单选按钮,选择改行数据
    handleCurrentChange(row) {
      console.log(row);
      //如果没有row,终止
      if (!row) return;
      //把当前行label绑定的值和v-model绑定的值相同时,单选按钮就可以选中
      this.tempRadio = row.materialId;
      this.currentRow = row;
    },

    //复选框实现多选===================================================
    rowClick(val) {  // 点击行多选
        this.multipleSelection=val
    },
    selectChange(row) {
      this.$refs.multipleTable.toggleRowSelection(row)
    },


    //复选框实现单选===================================================

    // 点击行单选
    rowClick3(row) {  
       if(this.multipleSelection[0]==row) {
         this.multipleSelection3=[]
         this.$refs['multipleTable3'].clearSelection()
       }else{
         this.multipleSelection3=[row];
         this.$refs['multipleTable3'].clearSelection()
         this.$refs['multipleTable3'].toggleRowSelection(row)
       }
       console.log("11",this.multipleSelection3);
    },
    //点击复选框去实现选中
    selectChange3(selection,row) {
      console.log("selection",selection);
      console.log("row",row);
      if(this.multipleSelection[0]==row) {
         this.multipleSelection3=[]
         this.$refs['multipleTable3'].clearSelection()
       }else{
         this.multipleSelection3=[row];
         this.$refs['multipleTable3'].clearSelection()
         this.$refs['multipleTable3'].toggleRowSelection(row)
       }
       console.log("11",this.multipleSelection3);
    },
  },
};
</script>

<style scoped>
</style>