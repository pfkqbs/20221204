/**  - 第一个参数为null或者undefined时，this指向全局对象window，值为原始值的指向该原始值的自动包装对象，如 String、Number、Boolean
* - 为了避免函数名与上下文(context)的属性发生冲突，使用Symbol类型作为唯一值
* - 将函数作为传入的上下文(context)属性执行
* - 函数执行完成后删除该属性
* - 返回执行结果
*/

Function.prototype.myCall = function(context,...args){

    let cxt = context || window;

    //将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)
    //新建一个唯一的Symbol变量避免重复
    let func = Symbol() 
    cxt[func] = this;
    args = args ? args : []

    //以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
    const res = args.length > 0 ? cxt[func](...args) : cxt[func]();

    //删除该方法，不然会对传入对象造成污染（添加该方法）
    delete cxt[func];

    return res;
}

// 测试
let name = '小王',age =17;
let obj = {
    name:'小张',
    age: this.age,
    myFun: function(from,to){
        console.log(this.name + ' 年龄 ' + this.age+'来自 '+from+'去往'+ to)
    }
}
let db = {
    name: '德玛',
    age: 99
}

//结果
obj.myFun.myCall(db,'成都','上海');     // 德玛 年龄 99  来自 成都去往上海