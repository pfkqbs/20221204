<template>
    <div>
        <div class="top">
            是否全选：
            <span v-if="isCheck" style="color:red">是</span>
            <span v-else>否</span>
        </div>
        <div 
            class="bottom"
            v-for="(item,index) in datalist" 
            :key="index" >
            <label >
                <input type="checkbox"
                    v-model="item.isCheck" />
                {{ item.name}}
            </label>
        </div>
    </div>
</template>
<script >
export default {
    data(){
        return{
            datalist:[
                {isCheck:false,name:"苹果"},
                {isCheck:false,name:"橘子"},
                {isCheck:false,name:"香蕉"},
            ]
        }
    },
    //侦听datalist中的每一项，如果全部勾选了就说明是全选状态
    computed:{
        //判断是否全选
        isCheck(){
            for(var item of this.datalist){
                //只有一个item项目的isCheck为false，就说明没有被全选
                if(!item.isCheck ){
                    return false
                }
            }
            
            //跳出循环后 如果没有返回false。就说明是全选状态
                return true
        }
    },
    methods: {       
    },
};
</script>
<style scoped>
</style>