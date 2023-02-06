<template>
    <div>
        
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding:'20px'}">
                    <TotalSales />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding:'20px'}">
                    <TotalOrders />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding:'20px'}">
                    <TodayUsers />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" :body-style="{padding:'20px'}">
                    <TotalUsers />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

  
  <script>
  // @ is an alias to /src
  import TotalOrders from "@/components/TotalOrders";
  import TotalSales from "@/components/TotalSales";
  import TotalUsers from "@/components/TotalUsers";
  import TodayUsers from "@/components/TodayUsers";
  
  export default {
    name: "Home",
    components: {
        TotalOrders,TotalUsers,TotalSales,TodayUsers
    },
  };
  </script>
  <style>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
  </style>
  