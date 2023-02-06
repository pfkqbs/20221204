<template>
    <div>
        <CommonCard title="累计销售额" value="￥12,003.21">
            <template>
                <div class="compare-wrapper">

                    <div class="compare">
                        <span>日同比</span>
                        <span class="emphasis">7.33%</span>
                        <div class="increase"></div>
                    </div>
                    <div class="compare">
                        <span>月同比</span>
                        <span class="emphasis">7.33%</span>
                        <div class="decrease"></div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <span>昨日销售额</span>
                <span class="emphasis"> ￥30,000,000.00</span>
            </template>
        </CommonCard>
    </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
    mixins: [commonCardMixin]

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