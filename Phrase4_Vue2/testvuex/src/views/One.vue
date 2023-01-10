<template>
    <div> 
        <h1> One  用户名是  {{  $store.state.name }}</h1>



        <router-link to="/my" v-slot="{navigate,href}" custom>
            <button @click="navigate" :href="href">跳转到个人中心--声明式</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>