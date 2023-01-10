<template>
    <div>
        <h1> three 用户名是  {{  $store.state.name }} </h1>
        <button @click="$store.commit('updateName')">改变用户名为  王</button>
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