<template>
    <div>
        <!-- 添加 -->
        <Add 
            @addchuantodo="shouadd"
            :all="all"
            @allcheckvalue="allcheckvalue">
        </Add>

         <!-- 筛选 -->
         <Filters
            @flitertype="flitertype"
            :type="type">
        </Filters>

        <!-- 展示 -->
        <List 
            :arr="info"
            @listdelid="listdelid">
        </List>

       

    </div>
</template>

<script>

import Add from '../components/Add'
import List from '../components/List'
import Filters from '../components/Filters'

export default {
    components:{ 
        Add, 
        List,
        Filters
    },
    data(){
        return {
           arr:[],  //展示的数组 {"id":"","title":"","check":false}
           all:false,  //是否全选   TRUE、false
           type :"all" ,//默认全部  已完成  未完成
        }
    },
    methods:{

        //收add 组件的传递的  todo 值
        shouadd(res){
            // console.log(  res );
            this.arr.push({
                "id":new Date().getTime(),
                "title":res,
                'check':false
            })
        },

        //获取 list 组件传递的  id 值   通过 id 找到数组下标 删除
        listdelid(res){
            // console.log( res )
            let index = this.arr.findIndex(val => val.id == res)
            this.arr.splice(index,1)
        },

        /* 接收 add 组件传的 的全选值 */
        allcheckvalue(res){
            // console.log( res )
            this.all = res;
            this.arr.map( val => val.check = res)
        },

        //接收  filters 传值 过滤
        flitertype(res){
            console.log( res )
            this.type = res;
        }
    },
    computed:{
        info(){
            switch(this.type){
                case 'all':
                    return this.arr;
                    break;
                case 'ok':
                    return this.arr.filter(val => val.check == true)
                    break;
                case 'no':
                    return this.arr.filter(val => val.check == false)
                    break;
                default:
                    return this.arr
                    break;               
            }
        }
    },
    watch: {
        arr:{
            handler:function(n){
                // console.log('n', n )
                //查找 arr 数组中 check 是否 === false
                // 如果有 index>-1  证明 不是全部选中  all= false
                let index = n.findIndex( val => val.check == false)
                if(index == -1){
                    this.all = true;
                }else{
                    this.all = false;
                }
            },
            deep:true,//深度监听
            immediate:true
        },
        
    }
} 
</script>

<style scoped>

</style>