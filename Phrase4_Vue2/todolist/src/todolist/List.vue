<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <input type="checkbox">
                <span>{{ item.title }}</span>
                <button @click="del(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ids } from 'webpack';

export default {
    props:['arr'],
    data(){
        return {

        }
    },
    methods:{
        del(id){
            // console.log(id);
            this.$emit('listdelid',id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>