<template>
    <div>
        <el-form>
            <el-input 
                clearable
                style="width:250px"
                placeholder="请输入"
                :autosize="{ minRows: 2, maxRows: 4}"
                v-model="nameValue">

            </el-input>
            <el-input
                placeholder="请选择日期"
                style="width:250px"
                v-model="input3">
                <i slot="suffix" 
                class="el-input__icon el-icon-date"></i>
            </el-input>
        </el-form>

    </div>
</template>

<script >
export default {
    data(){
        return {
            nameValue:"",
            input3:""

        }
    },
    methods: {
        //禁用状态:--通过 disabled 属性指定是否禁用 input 组件
        //可清空:--使用clearable属性即可得到一个可清空的输入框
        //密码框--使用show-password属性即可得到一个可切换显示隐藏的密码框
        //文本域--用于输入多行文本信息，通过将 type 属性的值指定为 textarea。文本域高度可通过 rows 属性控制
        //带 icon 的输入框--可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
        //可自适应文本高度的文本域--通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
        //复合型输入框--可前置或后置元素，一般为标签或按钮，可通过 slot 来指定在 input 中前置或者后置内容。
        //尺寸--可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。
        //带输入建议--根据输入内容提供对应的输入建议。autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。
        //自定义模板--可自定义输入建议的显示，使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象。
        //远程搜索--从服务端搜索数据
        //输入长度限制--maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。
    },
}

</script>

<style scoped>

</style>