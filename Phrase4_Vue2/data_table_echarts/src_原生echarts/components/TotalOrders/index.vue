<template>
    <div>
        <CommonCard 
        title="累计订单量" 
        value="21,571,420">
            <template>
                <div id="total-orders-chart" :style="{width:'100%',height:'100%'}">

                </div>
            </template>
            <template v-slot:footer>
                <span>昨日订单量</span>
                <span class="emphasis"> 30,000,000.00</span>
            </template>
        </CommonCard>
    </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    mixins:[commonCardMixin],
    mounted(){
        const chartDom = document.getElementById('total-orders-chart')
        const chart = this.$echarts.init(chartDom)
        chart.setOption({
            xAxis:{
                type:"category",
                show:false,//x轴 隐藏
                boundaryGap:false//默认x轴距离两侧有间距
            },
            yAxis:{
                show:false//y轴 隐藏
            },
            series:[{
                type:"line",//折线图
                data:[620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],
                areaStyle:{
                    color:'purple'
                },
                lineStyle:{
                    width:0
                },
                itemStyle:{
                    opacity:0
                },
                smooth:true
            }],
            grid:{
                top:0,
                bottom:0,
                right:0,
                left:0
            }

        })
    }
}
</script>

<style scoped>

</style>