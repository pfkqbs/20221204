<template>
    <div>
        <!--添加区 -->
        <Add @addchuantodo="adsshoutodo"></Add>
        <hr/>
        <!-- 展示区 -->
        <List :arr="arr" @listdelid="listdelid"></List>
        <!-- 筛选区 -->
        <Filters></Filters>
    </div>
</template>

<script >
import Add from './Add'
import List from './List'
import Filters from './Filters'
export default {
    components:{Add, List,Filters },
    data(){
        return {
            arr:[],//list 数据  {'id':"","checked":""}
            add:'',  //是否全选 TRUE 、false
            type:"",// 默认全部。已完成  未完成
        }
    },
    methods:{
        adsshoutodo(res){
            // console.log(res);
            this.arr.push({
                "id":new Date().getTime(),
                "check":false,
                title:res,
            })
        },
        listdelid(res){
            // console.log(res);
            let index = this.arr.findIndex( val => val.id == res )
            this.arr.splice(index,1)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>