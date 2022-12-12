// - 前部分与call一样
// - 第二个参数可以不传，但类型必须为数组或者类数组

Function.prototype.myApply = function(context,args = []){
    
    let cxt = context || window;
    //将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)

    //新建一个唯一的Symbol变量避免重复
    let func = Symbol()
    cxt[func] = this;

    //以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
    const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
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
obj.myFun.myApply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海