var s1 = "get-element-by-id"
// 转化为 getElementById
function f(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}
// 测试
console.log(f(s1));



// 方法2

// aaa-bbb-ccc-ddd   转化为驼峰命名  aaaBbbCccDdd
function tuofeng(str) {
    // 根据 - 分割成数组
    var arr = str.split('-');
    // console.log("arr:", arr);
    var st = "";
    for(var i=0; i<arr.length; i++) {
        if(i != 0) {
            // bb   cc   dd
            for(var j=0; j<arr[i].length; j++) {
                if(j == 0) {
                    st = st + arr[i][j].toUpperCase();
                } else {
                    st = st + arr[i][j];
                }
            }
        } else {
            st = st + arr[i];
        }
    }
    console.log("st:", st);
}