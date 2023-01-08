<template>
    <div>
        <h1>这是首页</h1>
        <div>
            
            <div class="item" v-for="(item) in arr" 
                :key="item.id"
                @click="toInfo(item.id)">
                <!-- <router-link> -->
                    <img :src="item.imgsrc" alt="" width="300px" height="250px"/>
                    <div>
                        <p>名称：{{ item.name }}</p>
                        <p>价格：{{ item.price }}</p>
                        <p>商品介绍：</p>
                    </div> 
                <!-- </router-link> -->
            </div>
            <div v-if="arr.length == 0">
                暂无数据
            </div>
            
        </div>
    </div>
</template>

<script>
import get from '../../tool/http.js'
    export default {
        data(){
            return {
                arr:[]
            }
        },
        methods:{
            toInfo(id){

                console.log( id )
                console.log('this.$route', this.$route )
                console.log('this.$router', this.$router )
 
                // this.$router.push('/info')  // 方法1----添加历史记录可前进后退
                // this.$router.push({"name":'info'})  // 方法2----添加历史记录可前进后退
                // this.$router.push({"path":'/info'})  // 方法3----添加历史记录可前进后退
                // this.$router.replace('/info') //方法4----替换页面  无前进和后退


                // this.$router.push(`/info/${id}`)    //params   传参
                this.$router.push({"name":"info",params:{myid:id,xx:"xxxx"} })  //params   传参

                // this.$router.push(`/info?id=${id}&xx=xxxx`)    //query 传参
                // this.$router.push({"name":"info",query:{"id":id} }) //query 传参
                // this.$router.push({"path":"/info",query:{"id":id} }) //query 传参
            },
            //调接口 请求商品列表数据
            getList(){

                //原生ajax 请求数据

                // const xhr =new XMLHttpRequest();
                // xhr.open("get",'./list.json',true);
                // xhr.send();
                // let _this = this    //或者下面的函数写成箭头函数
                // xhr.onreadystatechange = function(){
                //     if(xhr.readyState == 4 && xhr.status == 200){
                //         // console.log( xhr.responseText )
                //         let obj = JSON.parse(  xhr.responseText )
                //         console.log( obj )
                //         _this.arr =  obj.info
                //     }
                // }

                // 使用 封装好的 ajax
                // get('./list.json')
                // .then(res=>{
                //     // console.log('res',res)
                //     this.arr = res.info
                // })
                // .catch(res=>{
                //     console.log(res)
                // })
            },
            // async getList2(){
            //     let res = await get('./list.json')  //请求出错了，后面的都不执行了，怎么规避呢 使用try catch
            //     this.arr = res.info
            // }
            async getList2(){
                try{
                    let res = await get('./list.json')  //请求出错了，后面的都不执行了，怎么规避呢 使用try catch
                    this.arr = res.info
                }catch{
                    alert('请求错误！')
                }
            }
        },
        mounted(){
            this.getList()
            this.getList2()
        },
    }
</script>

<style scoped>
.item{
    display: flex;
    border: 1px solid tomato;
    margin-bottom: 5px;
}
.item >img{
    width: 20vw;
    height: 20vh;
}

</style>