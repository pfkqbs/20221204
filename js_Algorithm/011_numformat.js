
//方法1：正则表达式
function format1(num) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 3是千分位，4是万分位
}

//方法2： split+reverse+reduce
function format2(num) {
    return String(num).split('').reverse().reduce((prev, next, index) => {
        return (index % 3 ? next : next + ',') + prev; // 3是千分位，4是万分位
      });
}

//方法3：使用JS内置 API （toLocaleString），实现数字、金额等等数值的格式化
const opts = {
    style: 'currency',
    currency: 'CNY',
};
let res3 = (111111111.111111).toLocaleString('zh-CN', opts); //  ¥111,111,111.00

// 方法4 使用for循环
// for循环方法一
function format4(num){  
    num = String(num);//数字转字符串  
    let str = '';//字符串累加  
    for (let i = num.length- 1, j = 1; i >= 0; i--, j++){  
        if (j%3 == 0 && i != 0){ //每隔三位加逗号，过滤正好在第一个数字的情况  
            str += num[i] + ','; //加千分位逗号  
            continue;  
        }  
        str += num[i]; //倒着累加数字
    }  
    return str.split('').reverse().join(""); //字符串=>数组=>反转=>字符串  
}
//方法5  for循环方法二
function format5(num){  
    num = String(num);//数字转字符串
    let str = '';//字符串累加
    for (let i = num.length- 1, j = 1; i >= 0; i--, j++){  
        if (j%3 == 0 && i != 0){ //每隔三位加逗号，过滤正好在第一个数字的情况
            str = ',' + num[i] + str; //加千分位逗号
           continue; 
        }  
        str = num[i] + str; //累加数字
    }  
    return str;
  }

//方法6：while+slice
function format6(num) {
    let arr = [],
        str = String(num),
        count = str.length;
  
    while (count >= 3) {
      arr.unshift(str.slice(count - 3, count));
      count -= 3;
    }
  
    // 如果是不是3的倍数就另外追加到上去
    if(str.length % 3) arr.unshift(str.slice(0, str.length % 3));
  
    return arr.toString();
}


// 测试
let num = 1234567890;
console.log("res1",format1(num));  //不能带小数
console.log("res2",format2(num));  //不能带小数
console.log("res4",format4(num));  //格式化可带小数，取2位小数
console.log("res5",format5(num));  //格式化可带小数，取2位小数
console.log("res6",format6(num));  //格式化可带小数，取2位小数