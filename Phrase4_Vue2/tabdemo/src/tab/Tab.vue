<template>
    <div>
        <h1>我的主页</h1> 
        <ul>
            <li @click="tab='Tabbox1'" :class="{ active_li: tab == 'Tabbox1'}">绘画</li>
            <li @click="tab='Tabbox2'" :class="{ active_li: tab == 'Tabbox2'}">武术</li>
            <li @click="tab='Tabbox3'" :class="{ active_li: tab == 'Tabbox3'}">诗词</li>
        </ul>
        <div class="tabbox">
            <!-- 动态组件： :is=组件名 -->
            <components :is="tab"></components>
        </div>
    </div>
</template>

<script>

import Tabbox1 from '../components/Tabbox1.vue'
import Tabbox2 from '../components/Tabbox2.vue'
import Tabbox3 from '../components/Tabbox3.vue'

export default {
    components:{ Tabbox1, Tabbox2,Tabbox3},
    data(){
        return {
            tab:"Tabbox1"
        }
    },
    methods:{
    },
} 
</script>

<style scoped>
.active_li{
    color:red;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
ul{
    width:50vw;
    /* height:20vh; */
    display: flex;
    justify-content: space-around;
}
li{
    width:100%;
    height:30px;
    line-height:30px;
    border:1px solid black;
    text-align: center;
}
</style>