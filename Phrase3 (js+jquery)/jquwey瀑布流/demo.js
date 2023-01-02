//等到图片加载完再执行
$(window).on('load',function(){
    waterFull()
})

// $(function(){
//     waterFull()
// })

function waterFull(){
    //求出列数
    let box = $('.box');
    let boxWidth = box.outerWidth();//当前图片的宽度
    let screenWidth = $(window).width();//整个屏幕的宽度
    let cols = parseInt( screenWidth / boxWidth );//求出列数
    // 创建数组
    let heightArr = [];
    // 图片遍历图片。第一排不需要定位，取出高度，其他的定位处理
    $.each(box,(index,item)=>{
        var boxHeight = $(item).outerHeight();//取出图片的高度
        if(index < cols){//是不是第一排
            heightArr[index] = boxHeight;
        }else {
            //最小图片的高度
            // 数组中最小的值
            var minBoxHeight = Math.min(...heightArr)
            // 最小的索引
            var minBoxIndex = $.inArray(minBoxHeight,heightArr)
            $(item).css({
                position: 'absolute',
                left: minBoxIndex * boxWidth + 'px',
                top: minBoxHeight + 'px'
            });

            //高度追加
            heightArr[minBoxIndex] += boxHeight
        }
    })
}