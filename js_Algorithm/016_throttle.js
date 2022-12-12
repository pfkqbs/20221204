// 在一定时间内只触发一次，场景：长列表滚动节流

//节流函数
function throttle(fn, time) {

    let flag = true;

    return function (...args){
        if(flag){
            flag = false;
            setTimeout(()=>{
                flag = true;
                fn(...args)
            },time)
        }
    }
}