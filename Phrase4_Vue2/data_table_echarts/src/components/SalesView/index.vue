<template>
    <div class="sales-view">
        <el-card shadow="hover">
            <template v-slot:header>
                <div class="menu-wrapper">
                    <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect"
                        class="sales-view-menu">
                        <el-menu-item index="1">销售额</el-menu-item>
                        <el-menu-item index="2">访问量</el-menu-item>
                    </el-menu>

                    <div class="menu-right">
                        <el-radio-group v-model="radioSelect" size="small">
                            <el-radio-button label="今日" />
                            <el-radio-button label="本周" />
                            <el-radio-button label="本月" />
                            <el-radio-button label="今年" />
                        </el-radio-group>
                        <el-date-picker type="daterange" v-model="date" size="small" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="终止日期" unlink-panels class="sales-view-date-picker"
                            :pickerOptions="pickerOptions" />
                    </div>
                </div>
            </template>
            <template>
                <div class="sales-view-chart-wrapper">
                    <v-chart :option="chartOption"></v-chart>
                    <div class="sales-view-list">
                        <div class="sales-view-title">排行榜</div>
                        <div class="list-item" v-for="item in rankData" :key="item.no">
                            <!-- 方法1： -->
                            <!-- <div class="list-item-no" :class="+item.no <= 3 ? 'top-no' : ''">{{ item.no }}</div> -->
                            <!-- 方法2： -->
                            <div :class="['list-item-no',+item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
                            <div class="list-item-name">{{ item.name }}</div>
                            <div class="list-item-money">{{ item.money }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
            radioSelect: "今日",
            date: null,
            pickerOptions: {
                shortcuts: [{
                    text: "最近一周",
                    onClick(picker) {
                        const start = new Date()
                        const end = new Date()
                        start.setTime(start.getTime() - 60 * 60 * 24 * 1000 * 7)
                        // debugger
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: "最近一月",
                    onClick(picker) {
                        const start = new Date()
                        const end = new Date()
                        start.setTime(start.getTime() - 60 * 60 * 24 * 1000 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: "最近一年",
                    onClick(picker) {
                        const start = new Date()
                        const end = new Date()
                        start.setTime(start.getTime() - 60 * 60 * 24 * 1000 * 365)
                        picker.$emit('pick', [start, end])

                    }
                },]
            },
            chartOption:{

            },
            rankData:[
                {
                    no:1,
                    name:'麦当劳1',
                    money:999,
                },
                {
                    no:2,
                    name:'麦当劳2',
                    money:900,
                },
                {
                    no:3,
                    name:'麦当劳3',
                    money:888,
                },
                {
                    no:4,
                    name:'麦当劳4',
                    money:777,
                },
                {
                    no:5,
                    name:'麦当劳5',
                    money:666,
                },
            ]
        }
    },
    methods: {
        onMenuSelect(index) {
            this.activeIndex = index
            console.log(this.activeIndex)
        }
    }
}
</script>

<style lang="scss" scoped>
.sales-view {
    margin-top: 20px;

    .menu-wrapper {
        position: relative;
        display: flex;

        .sales-view-menu {
            width: 100%;
            padding-left: 20px;

            .el-menu-item {
                height: 50px;
                line-height: 50px;
                margin: 0 20px;
            }
        }

        .menu-right {
            position: absolute;
            top: 0;
            right: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .sales-view-date-picker {
            margin-left: 20px;
            }
        }
    }
    .sales-view-chart-wrapper {
        display: flex;
        height: 270px;
        .echarts {
            flex:0 0 70%;
            width:70%;
            height:100%;
        }

        .sales-view-list {
            flex:1;
            width:100%;
            height:100%;
            overflow: hidden;
            .sales-view-title {
                margin-top: 20px;
                font-size: 12pz;
                color: #666;
                font-weight: 500;
            }
            .sales-view-list {
                margin-top:15px;
                .list-item {
                    display: flex;
                }
            }
        }
    }
}
</style>