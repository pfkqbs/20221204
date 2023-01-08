<template>
    <div>
        分类二级组件  {{  $route.query }}
    </div>
</template>

<script>

    export default {
        data(){
            return {

            }
        },
        //加载完成 执行一次
        mounted(){
            // console.log('$', this.$route.query )
        },
        //第一种方法： watch 监听路由信息改变 获取路由参数
        // watch:{
        //     $route:{
        //         handler:function(newvalue){
        //             console.log( newvalue.query )
        //         },
        //         deep:true,
        //         immediate:true
        //     }
        // }

        // 方法 2：  挂载完成钩子函数
        updated(){
            console.log( this.$route.query )
        },
        //方法3 路由拦截钩子函数
        // beforeRouteEnter( to,from ,next){
        //     console.log( "to",to);
        //     console.log( "from",from);
        //     console.log( "路由传参是",to.query);
        //     //可以做一些判断
        //     next();
        // },

        // beforeRouteUpdate(){
        //     console.log( "路由传参是",to.query);
        //     //可以做一些判断
        //     next();
        // },

        beforeRouteLeave(){
            console.log( "离开前")
            let f = confirm("确定要离开吗？")
            if(f){
                next();
            }
        },
    }
</script>

<style scoped>

</style>