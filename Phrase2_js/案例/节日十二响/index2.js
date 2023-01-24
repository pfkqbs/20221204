/* 1、描述你要描绘的路径
   2、绘制路径画出来
   3、每一次绘制都不是全新的绘制，会在之前的页面继续绘制
   4、但是之前的绘制依旧存在，我们需要清除之前的绘制路径
   5、问题：setInterval 根据时间控制，难以把控，比较消耗性能，需要优化
   6、requestAnimationFrame  动画帧回调函数，每一次刷新都会  
*/
let canvas = document.querySelector('#canvas')

/* 设置 canvas 区域为屏幕的宽和高 */
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 监听浏览器窗口改变的事件
window.onresize = function () {
    /* 设置 canvas 区域为屏幕的宽和高 */
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

let ctx = canvas.getContext('2d');//获取canvas 上下文

/* 绘制矩形 */
// ctx.rect(100,200,30,60)//绘制矩形
// ctx.fillStyle = 'red';//设置矩形颜色
// ctx.fill()//填充颜色

/* 绘制圆形 */
/* 初始化矩形 */
let x = 400, y = 400;/* 绘制圆形的变量 */
ctx.arc(x, y, 60, 0, Math.PI * 2, false)//绘制圆形
ctx.fillStyle = 'red';//设置矩形颜色
ctx.fill()//填充颜色

function ballMove() {
    ctx.beginPath()//清除之前的绘制路径
    //ctx.clearRect(0,0,canvas.width,canvas.height)//清除画布

    ctx.fillStyle = 'rgba(255,192,203,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    x += 3;//小球横坐标增加
    ctx.arc(x, y, 20, 0, Math.PI*2, false)//绘制圆形
    ctx.fillStyle = 'red';//设置矩形颜色
    ctx.fill()//填充颜色

    requestAnimationFrame(ballMove)

}

// setInterval(ballMove,1000/60)
ballMove()
