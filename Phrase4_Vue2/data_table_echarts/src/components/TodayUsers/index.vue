<template>
    <div>
        <CommonCard title="今日交易用户数" value="12,003,503">
            <template>
                <v-chart :option="getOption()"></v-chart>
                <!-- <div id="today-orders-echart" :style="{width:'100%',height:'100%'}">
                </div> -->
            </template>
            <template v-slot:footer>
                <span>退货率</span>
                <span class="emphasis"> 8.73%</span>

            </template>
        </CommonCard>
    </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    mixins: [commonCardMixin],
    methods:{
        getOption(){
            return {
                color:['#3398DB'],
            xAxis:{
                type:"category",
                data:['00:00','01:00','02:00','00:00','01:00','02:00','00:00','01:00','02:00','00:00','01:00','02:00','00:00','01:00']
            },
            yAxis:{
                show:false//y轴 隐藏
            },
            series:[{
                type:"bar",//柱状图
                data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],
                barWidth:"60%"  //设置柱状图的宽度
            }],
            grid:{
                top:0,
                bottom:0,
                left:0,
                right:0,
            }
            }
        }
    },


}
</script>

<style lang="scss" scoped>


.compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 3px;
        color: #666;
        .increase{
            width: 0;
            height: 0;
            border-width: 3px;
            border-color: transparent transparent red transparent;
            border-style: solid;
            margin: 0 0 3px 5px;
        }
        .decrease{
            width: 0;
            height: 0;
            border-width: 3px;
            border-color: green transparent transparent transparent;
            border-style: solid;
            margin: 3px 0 0 5px;
        }
    }
}
</style>