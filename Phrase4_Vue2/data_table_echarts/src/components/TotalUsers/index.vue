<template>
    <div>
        <CommonCard title="累计用户数" value="21,571,420">
            <template>
                <v-chart :option="getOptions()"></v-chart>
                <!-- <div id="total-users-chart" :style="{width:'100%',height:'100%'}">
            </div> -->
            </template>

            <template v-slot:footer>
                <div class="total-users-footer">
                    <span>日同比</span>
                    <span class="emphasis">8.73%</span>
                    <div class="increase"></div>
                    <span class="month">月同比</span>
                    <span class="emphasis">35%</span>
                    <div class="decrease"></div>

                </div>
            </template>
        </CommonCard>
    </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    mixins: [commonCardMixin],
    methods: {
        getOptions(){
            return {
                xAxis: {
                    type: "value",
                    show: false,//x轴 隐藏
                    // boundaryGap:false//默认x轴距离两侧有间距
                },
                yAxis: {
                    type: "category",
                    show: false//y轴 隐藏
                },
                series: [
                    {
                        type: "bar",//柱状图
                        stack: "总量",//合并柱状图
                        data: [200],
                        barWidth: 10,//写一个就行
                        itemStyle: {
                            color: '#45C946',
                        },
    
                    },
                    {
                        type: "bar",//柱状图
                        stack: "总量",
                        data: [250],
                        itemStyle: {
                            color: '#eee'
                        }
                    },
                    {
                        type: "custom",//自定义
                        stack: "总量",
                        data: [200],
                        renderItem: (params, api) => {
                            const value = api.value(0)//获取第一号元素
                            const endPoint = api.coord([value, 0])//获取第一号元素
                            // console.log(value)
                            console.log(endPoint)
                            return {
                                type: "group",//分组 然后可以设置 children 属性
                                position: endPoint,
                                children: [
                                    {
                                        type: "path",
                                        shape: {
                                            d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",//svg 矢量库中复制粘贴 path 里面的d的内容
                                            x: -5,
                                            y: -20,
                                            width: 10,
                                            height: 10,
                                            layout: "cover"
                                        },
                                        style: {
                                            fill: '#45C946'
                                        }
                                    },
                                    {
                                        type: "path",
                                        shape: {
                                            d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                                            x: -5,
                                            y: 10,
                                            width: 10,
                                            height: 10,
                                            layout: "cover"
                                        },
                                        style: {
                                            fill: '#45C946'
                                        }
                                    },
                                ]
                            }
                        },
                    },
                ],
                grid: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }
            }

        }  
    }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
    display: flex;
    align-items: center;

    .month {
        margin-left: 10px;
    }
}
</style>