<template>
    <div>
       <ul>
        <li v-for="(item,index) in arr" :key="index">
            <input type="checkbox" v-model="item.check" />
            <span :class="{ok:item.check == true}">{{ item.title }}</span>
            <button @click="del(item.id)">删除</button>
        </li>

        <li v-if="arr.length == 0">暂无数据</li>

       </ul>
    </div>
</template>

<script>
export default {
    props:['arr'],
    data(){
        return {
        }
    },
    methods:{
        del(id){
            console.log( id )
            this.$emit('listdelid',id)
        }
    }
    
}
</script>

<style scoped>
.ok{
    text-decoration: line-through;
}
</style>