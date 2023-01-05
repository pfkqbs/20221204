<template>
    <div>
       <button @click="fn('all')" :class="{active :type == 'all'}"> 全  部 </button>
       <button @click="fn('ok')" :class="{active :type == 'ok'}"> 已完成 </button>
       <button @click="fn('no')" :class="{active :type == 'no'}"> 未完成 </button>
    </div>
</template>

<script>
export default {
    props:['type'],
    data(){
        return {
            
        }
    },
    methods:{
        fn(type){
            console.log(type)
            this.$emit('flitertype',type)
        }
    }
    
}
</script>

<style scoped>
.active{
    color:#fff;
    background: tomato;
    border:1px solid #ddd;
}
</style>