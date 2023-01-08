<template>
    <div>
        <button @click="backpage">后退</button>
        <h1>这里是商品详情页</h1>

        <button>加入购物车</button>

        <hr/>
        <Infozi />
    </div>
</template>

<script>
import Infozi from '../components/Infozi.vue'

    export default {
        components:{Infozi},
        data(){
            return {

            }
        },
        //当 捕获一个来自子孙组件的错误时被调用
        errorCaptured(err,vm,info) {
            // err 子孙组件的错误消息
            //  VM 出错的那个组件 实例对象
            // info 错误来源信息的字符串
            console.log( 'err',err)
            console.log( 'info',info)
            console.log( 'vm',vm)
            return false;   //子组件报错 ，这个设置让它不显示报错
        },
       
        beforeCreate(){
            // 获取不到 节点  数据、方法
        },
        created(){
            // 获取不到节点、 获取到数据  方法
            // 可以对data 进行修改 
        },
        beforemounte(){
            // 获取不到节点、准备好了虚拟 dom  获取到数据  方法
            // 可以对data 进行修改 
        },
        mounted(){
             // 获取到节点、 获取到数据  方法
            // 可以对data 进行修改 
            console.log( this.$route.query )
        },
        beforeUpdate(){
            // 获取到节点、  数据（变化了，视图上没有变化）  方法
        },
        updated(){
             // 获取到节点、  数据（变化了，视图上也变化了）  方法 
            console.log( this.$route.query )
        },
        beforeDestroy(){
            // 获取不到节点、  数据、  方法
             //  清楚闭包 计时器/ 拦截关闭 / ajax 轮询 操作
        },
        destroyed(){
             // 获取不到节点、  获取到 数据 方法 
            //  清楚闭包 计时器/ 拦截关闭 / ajax 轮询 操作
            console.log( this.$route.query )
        },
        methods:{
            backpage(){
                // this.$router.back()
                this.$router.go(-1)
            },
            getBtn(){
                return document.getElementById('btn')
            }
        }
        
    }
</script>

<style scoped>

</style>