
// 函数防抖原理：通过维护一个定时器，其延迟计时以最后一次触发为计时起点，到达延迟时间后才会触发函数执行。
// 防抖的实现方式分两种 “立即执行” 和 “非立即执行” ，区别在于第一次触发时，是否立即执行回调函数。

//防抖函数
function debounce(fn, time) {

    let timer = null;  //函数全局变量，控制事件是否触发

    return function () {
        let context = this;

        //如果事件触发了，清除前一个定时器，重新计时，只执行最后一次事件
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(context, arguments)
        }, time || 500)
    }
}
