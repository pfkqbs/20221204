<template>
    <div>
        <input type="checkbox" :checked="all" @change="allfn"/>
        <input type="text" v-model="todo" @keyup.enter="addfn"/>
    </div>
</template>

<script>
export default {
    props:['all'],
    data(){
        return {
            todo:""
        }
    },
    methods:{

        //按下回车  获取输入框的值
        addfn(){
            console.log( this.todo );

            //判空
            if(!this.todo){
                alert('请输入！')
                return;
            }
            //传递给父组件 
            this.$emit('addchuantodo',this.todo)
           
            this.todo = "" //清空
        },
        allfn(event){
            // console.log( event.target.checked)
            this.$emit("allcheckvalue",event.target.checked)

        }
    }
    
}
</script>

<style scoped>

</style>