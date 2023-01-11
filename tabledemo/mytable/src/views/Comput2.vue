<template>
    <div>
        <table>
            <tr>
                <th>
                    <input type="checkbox" v-model="isChecked" style="color:red">全选</input>
                <th>商品名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>金额</th>
            </tr>
            <tr v-for="(item,index) in datalist" :key="index">
                <td>
                    <input v-model="item.isCheck" type="checkbox">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <input 
                        type="number"
                        :min="0" 
                        v-model.number="item.num"
                        style="width:50px"
                        @input="amtCom(item.num,index)"/>
                </td>
                <!-- <td>￥{{(item.num*item.price).toFixed(2)}}</td> -->
                <td>{{item.amt}}</td>
            </tr>
        </table>
        <div>总金额：{{comCount}}</div>
    </div>
</template>

<script >


export default {
    data(){
        return{
            datalist:[
                {isCheck:false,name:"苹果",price:1.11111,num:0,amt:0},
                {isCheck:false,name:"橘子",price:1.1,num:0,amt:0},
                {isCheck:false,name:"香蕉",price:1,num:0,amt:0},
            ],
            count:"",

        }
    },
    //侦听datalist中的每一项，如果全部勾选了就说明是全选状态
    computed:{
        comCount(){
            let price=0
            for(var item of this.datalist){

                if(item.isCheck){
                    price += item.amt
                }
            // console.log(parseInt(price));
            }
            return price.toFixed(2)
        },

        //判断是否全选
        isChecked:{

            //设置状态
            set(val){
                console.log(val);
                if(val){
                    this.datalist.map( item=>item.isCheck=true)
                }else{
                    this.datalist.map( item=>item.isCheck=false)
                }
            },

            //获取状态
            get(){
                for(var item of this.datalist){
                    //只有一个item项目的isCheck为false，就说明没有被全选
                    if(!item.isCheck ){
                        return false
                    }
                }               
                //跳出循环后 如果没有返回false。就说明是全选状态
                    return true
            }
        }
    },
    created() {       
    },
    methods: {
        amtCom(num,index){
            this.datalist[index].amt=Math.floor( (this.datalist[index].price*num)*100 )/100
        }        
    },
};

</script>
<style scoped>
</style>