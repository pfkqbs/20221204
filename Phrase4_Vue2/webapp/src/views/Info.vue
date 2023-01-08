<template>
    <div>
        <button @click="backpage">后退</button>
        <h1>这里是商品详情页</h1>

        <button>加入购物车</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
            console.log( this.$route.query )
        },
        methods:{
            backpage(){
                // this.$router.back()
                this.$router.go(-1)
            }
        }
        
    }
</script>

<style scoped>

</style>