<template>
    <div>
        <input type="checkbox"/>
        <input type="text" v-model="todo" @keyup.enter="addFn"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                todo:""
            }
        },
        methods:{
            addFn(){
                console.log(this.todo);
                if(!this.todo){
                    alert("请输入!")
                    return;
                }
                this.$emit('addchuantodo',this.todo)
                this.todo = ""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>