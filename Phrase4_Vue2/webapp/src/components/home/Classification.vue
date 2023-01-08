<template>
    <div>
       <h1>这是分类</h1>
       <div class="content">
        <div class="left">
            <ul>
                <router-link to="/home/f/leftright?id=1" tag="li">手机</router-link>
                <router-link to="/home/f/leftright?id=2" tag="li">电脑</router-link>
                <router-link to="/home/f/leftright?id=3" tag="li">美食</router-link>
                <!-- {{ $route.path }} -->
            </ul>
        </div>
        <div>
            <!-- 通过路由加载  Clstwo 组件-->
            <!-- <Clstwo></Clstwo> -->
            <router-view></router-view>
        </div>
       </div> 
    </div>
</template>

<script>
    export default {
        components:{
        },
        data(){
            return {

            }
        },
        methods:{
        },
        mounted(){
            console.log( this.$route.path )
        }
    }
</script>

<style scoped>
.content{
    display: flex;
}
.left{
    width:30vw;
}
</style>