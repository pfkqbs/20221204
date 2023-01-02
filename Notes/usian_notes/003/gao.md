[toc]

Time:2021-03
ther:gaogang

## ES6

学习网站： https://es6.ruanyifeng.com/

###  箭头函数
- 普通函数
```js
//普通函数 this 指向调用时所在的对象(可变)
let fn = function fn(a, b) {
    console.log(a, b);
}
fn(1, 2);
```

- 箭头函数:
    - 箭头函数this指向声明时所在的对象(不可变)
    ```js
    let fn2 = (c, d) => {
        console.log(c, d);
    }
    fn2(3, 4);
    ```
    - 如果只有一个参数,可以省略圆括号
    ```js
    let fn3 = c => {
    }
    fn3(6);
    ```
    - 如果函数体内只有一条 return 语句,可以省略 {} return
    ```js
    let fn4 = d => d;
    fn4(7)
    ```
- 箭头函数与普通函数的区别:
    - this 指向问题：普通函数 `this` 指向调用时所在的对象(可变); 箭头函数 `this` 指向定义时所在对象(不可改变)
    ```js
    let obj={"name":"gao","age":18};

    function fn(){
        console.log(this);
    }

    fn();//this-->window 

    fn.call(obj);//fn-->this-->obj

    let fn2=()=>{
        console.log(this);
    }

    fn2();

    fn2.call(obj)//无法改变this指向,还是window
    ```
    - 构造函数问题：普通函数 可以当做构造函数  可以 `new`;  箭头函数 不可以当做构造函数,不可以 `new`
    ```js
    function Gou(name, age) {
        this.name = name;
        this.age = age;
    }

    let o1 = new Gou("Gao", 19);

    console.log(o1);

    //Gou {name: "Gao", age: 19}
    //-----------------------

    let Gou2 = (name, age) => {
        this.name = name;
        this.age = age;
    }
    let o2 = new Gou2("wang", 18);
    console.log(o2);
    ```
    - 参数问题：普通函数  `arguments` 获取所有的实参,组成伪数组 ; 箭头函数不可以使用 `arguments` 用 `rest` 参数(...参数)
    ```js
    function fn3(){
        console.log(arguments);
    }

    fn3(1,2,3,4,5);

     let fn4=(...x)=>{
        console.log(x);
     }

    fn4(1,2.3,4,5);//箭头函数无arguments,可以使用...
    //普通函数可以使用...????--->可以 
    function fn5(...x){
        console.log(x);
    }
    fn5(1,2,3,4,5);   //可以使用...
    ```
    - 不可以使用 `yield` 命令,因为箭头函数不能用作 `Generator` 函数;首先可以把它理解成 `Generator` 函数是一个状态机,封装了多个内部状态.
    ```js
     function *fn5(){//写法或者function* fn5()
         yield '1';
         yield '2';
         yield '3';    //yield产出
         return "d"
     }
    let f = fn5();
    for( let v of f){
           console.log(v);
    }
    console.log( f.next() );
    console.log( f.next() );
    console.log( f.next() );
    console.log( f.next() );
    //console.log( f.next() );
    //console.log( f.next() );
    //console.log( f.next() );
    ```
### Symbol 
```js
let a = Symbol();
let b = Symbol();

console.log(a);
console.log(b);

console.log(a == b, a === b);

```

```js

//应用-->对象的key,保证唯一,不被覆盖
//组长:对象{name:"gao"}
//自己:对象{name:"王"}

let obj = {
    [a]: "gao"
};

let obj2 = {
    [b]: "王"
};
console.log(obj[a]);
console.log(obj2);

//将obj2合并到obj对象上,----如果属性名相同,覆盖,但是属性名是Symbol独一无二

Object.assign(obj, obj2);
console.log("合并后", obj);
```
### Set

```js
//Set :类似数组的数据结构,但是成员值唯一
let a = new Set([1, 2, 3, 1, 2]);

//类数组转数组
let arr = Array.from(a);
console.log(a);
console.log(arr);

//是否存在
console.log(a.has(1)); //true
console.log(a.has(2)); //true
console.log(a.has(3)); //true
console.log(a.has(4)); //false

//添加add()
a.add(555);
console.log(a);

//删除 delete()
a.delete(2);
console.log(a);

//清空clear();
// a.clear();
console.log(a);

//属性size长度
console.log(a.size);
```
### Map

```js
//定义一个普通的对象，key 为字符串
let obj = {
    "name": "gao",
    "12": 23232
}; //key为字符串
console.log(obj);


//map  :类似对象的数据结构,但是 key 可以为任何数据类型

//定义一个Map()结构
let m = new Map();

// 设置值set()
m.set(true, "呵呵"); //这里key为true,可以为null,还可以为function     
m.set(1, "哈哈"); //这里key为true,可以为null,还可以为function     
m.set(2, "嘻嘻"); //这里key为true,可以为null,还可以为function     
console.log(m);

//获取值get(key)
console.log(m.get(true));
console.log(m.get(1));
console.log(m.get(2));

//是否存在has(key)
console.log(m.has(12)); //false
console.log(m.has(2)); //true

//删除 delete(key)
m.delete(1);
console.log(m);

//清空clear()
m.clear();
console.log(m);

//属性size
console.log(m.size);

//遍历keys
for (let v of m.keys) {
    console.log(v);
}
//遍历values
for (let v of m.values) {
    console.log(v);
}
//遍历keys和values
for (let v of m.entries) {
    console.log(v);
}
```
### `Proxy`
<font color="red">`Proxy` 与 `Object.defineProperty` 优劣对比</font>
<font color="red">`Proxy` 的优势如下</font>:

!!!`Proxy` 可以直接监听  对象  而非属性；
!!!`Proxy` 可以直接监听  数组  的变化；
!!!`Proxy` 有多达 13 种拦截方法,不限于 `apply`、`ownKeys`、`deleteProperty`、`has` 等等是 `Object.defineProperty` 不具备的；
!!!`Proxy` 返回的是一个  新对象  ,我们可以只操作新的对象达到目的,而 `Object.defineProperty` 只能遍历对象属性直接修改；
`Proxy` 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

`Object.defineProperty` 的优势如下:
兼容性好，支持 IE9，而 `Proxy` 的存在浏览器兼容性问题,而且无法用 `polyfill` 磨平，因此 `Vue` 的作者才声明需要等到下个大版本( 3.0 )才能用 `Proxy` 重写。 

```js
//Proxy用于修改某些操作的默认行为
let obj = {
    "name": "gao",
    "age": 18
};

//取值
let p = new Proxy(obj, {

    //target䯮对象,key为读取的属性名
    get: function (target, key, value) {
        console.log("获取值key是", key, "获取值value", value);
        return target[key];
    },

    //target目标对象,key修改的属性名,value修改的值
    set: function (target, key, value) {
        console.log("target", target);
        console.log("key", key);
        console.log("value", value);

        target[key] = value;
    }
})

console.log(p.name); //读取操作,自动执行get方法

p.age = 999; //设置操作,自动执行set方法

console.log("p",p);

```
### `Object.defineProperty`

```js
//定义一个对象
let obj = {
    "name": "wang",
    "age": 12
};

// 遍历对象
for (let key in obj) {
    Object.defineProperty(obj, key, {
        get: function () {
            console.log("获取值了");
        },
        set: function () {
            console.log("设置值了");
        }
    })
}

obj.age; //获取值
obj.name = '888888'; //设置值
obj.age = 000;
```
### `Reflect`
`Reflect` 操作对象的方法 
1 将属于语言内部的方法,放在 Reflect 上
2 修改了一些方法的返回值,比如报错改为 false
13个方法

```js
//get(目标对象,属性名)
let obj = {
    "name": "gao",
    "age": 13
};
console.log(obj);
console.log(Reflect.get(obj, "name"));
//set(目标对象.属性名,值)
obj.age = 999;
Reflect.set(obj, "age", "999999")
console.log(obj);

function FancyThing() {
    this.name = "gao";
    this.age = 19;
}

FancyThing.prototype.sex = "男";
FancyThing.prototype.sex = function () {
    console.log("哈哈");
};

const myObj = new FancyThing();

//获取原型对象
console.log(Reflect.getPrototypeOf(myObj));

//设置原型对象
let obj3 = {
    "hobby": "dfssdfsdf"
};

Reflect.setPrototypeOf(myObj, obj3);

//获取
console.log( Reflect.getPrototypeOf(myObj) );
```

### `promise`
**为什么使用 `promise`**??  回调函数事件--解决了什么问题??  优化回调函数事件,挽回回调地狱
**`promise` 定义**:  是一个容器,里面保存着某个未来才会结束的事件的结果,(通常是一个异步操作)
**有3个状态**:  进行中(`pending`),  已成功(`fulfilled`),  已失败(`rejected`),
**两个结果**:  进行中-->已成功(`resolved`),  进行中-->已失败(`rejected`)

- 优点/特点:
    - 对象的状态不收外界影响;
    - 一旦状态改变,就不在改变,任何时候都可以得到这个结果

- 缺点:
    - 1无法取消 `promise` ,一旦新建它就会立即执行,无法中途取消
    - 2如果不设置回调函数, `Promise` 内部抛出的错误,不会反应到外部
    - 3当处于进行中 `pending` 状态时,无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

```js
//-->传统方式,多层嵌套导致 回调地狱
//---------------------------------
$.get("/地址1", function (val) {
    
    if (姓名) {
        $.get("/地址2", function () {
            
            if (订单号) {
                $.get("/地址3", function () {
                    
                    if (订单详情) {
                        $.get("/地址3", function () {
                            
                            if (评价) {

                            }
                        })
                    }

                })
            }

        })
    }

})
//------------------------------------

//定义--创建--
let err = 200;
console.log(1); //--1

//定义一个promise
let p = new Promise(function (resolved, rejected) {

        console.log(2); //--2,一旦新建它就会立即执行

        //异步操作
        if (err == 200) {
            resolved("成功的结果");
        } else {
            resolved("失败的结果");
        }
})

console.log(3); //--3

//调用
p.then(function (res) {
    console.log("成功", res);
}, function (res) {
    console.log("失败", res);
})
console.log(4);//--4

//  catch  捕获错误  .then可串联写   finally只要状态发生改变都会执行(不管成功失败)  
p.then(function (res) {
    console.log("成功", res); //---异步的结果
}).catch(function (res) {
    console.log("失败", res); 
}).finally(function(){
    console.log("哈哈哈"); 
})

//1234打印顺序是?????    :1-2-3-4-成功

//从上到下,先同步后异步,
```

### `promise` 的使用 ( `Ajax` 简单封装 `axios` )
- 原生 `Ajax` 

```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "./promise.json", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
}

```
- `Ajax` 封装 类似 `jquery` 

```js

function $my(obj) {
    let {type = "GET", url, success} = obj;
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
}

// 使用封装好的 Ajax 调接口
$my({
    type: "GET",
    url: "./promise.json",
    success: function (res) {
        console.log(res);
    }
})
```
- `ajax-promise`  封装 `Ajax`
```js
// ajax-promise  封装 Ajax

function $ajax(obj) {
    let {
        type = "GET", url, success
    } = obj;
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();

    return new Promise(function (ok, no) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                if(xhr.status == 200){
                    //成功
                ok(xhr.responseText);
                } 
            }else{
                //失败
                    no("请求失败")
            }
        }
    })
}

// promise-ajax 封装的 ajax 调用
$ajax({
    type:"GET",
    url:"./promise.json"
}).then(function(res){
    console.log(res);
}).catch(function(res){
    console.log(res);
})
```

封装好的 `ajax` 参考  库 `axios` :  http://www.axios-js.com/
`.all` 合并,只要有一个失败都失败
`.race` 那个先成功出来那个

```js

let x = 200;
let a = new Promise(function (ok, no) {
    if (x == 200) {
        ok("a 成功")
    } else {
        no("a 失败")
    }
})

let y = 200;
let b = new Promise(function (ok, no) {
    if (x == 200) {
        ok("b 成功")
    } else {
        no("b 失败")
    }
})

//all合并  类似&& 逗成功才成功,只要有一个失败都失败,回调

//race,竞争  类似|| 哪个成功执行那个回调函数

Promise.all([a, b]).then(function (res) {
    console.log(res);
    //0: "b成功"
    //1: "b成功"
}).catch(function(res){
        console.log(res);
})

```
### `class`类
回顾面向对象继承
```js
//构造函数
function Gou(name) {
    this.name = name;

}

//共享的方法 - 放在原型对象上
Gou.prototype.say = function () {
    console.log("哈哈哈哈");
}

//实例化,得到对象
let fu = new Gou("gao");

//使用对象
console.log(fu);

// 继承
function Zi(name) {
    Gou.call(this, name) //类式继承/借用构造函数继承/改变this指向实现继承
}

Zi.prototype = new Gou(); //原型链继承

// 实例化子类
let z = new Zi("gao");

console.log(z);

```
`class` 类

```js
//es6 -------class类
//使用场景:封装组件, react 框架语法使用(难上手,难写,原生js必须过关,灵活度高)
class Lei {
    //属性
    constructor(name) {
        this.name = name;
    }
    //方法
    say() {
        console.log("生生世世");
    }
}
let obj = new Lei("gao");
console.log("obj",obj);

obj.say()

//继承  关键词 extends 
class Zilei extends Lei {
    //  多态: 属性  方法

    //-------------------------
    //   constructor(){
    //       this.age = 18;     //出错
    //   }
    //--------------------------

    constructor(name) {
        super(name)     //子类构造函数中必须使用 super()  指向父类的构造函数
        this.age = 18;   //子类自己的属性
    }

    //子类自己的方法
    run() {
        console.log("哈哈");
    }
}
let obj2 = new Zilei("gao");
console.log(obj2);
```
### 模块化
四大步骤：创建模块 --> 导出模块 -->    导入模块 -->   使用

```js
// 2.js

//1---创建模块
let a=123;
//2---导出模块
export default a;
```

```js
// 1.js

//3---载入模块
import a from "./2.js"
//4---使用模块
console.log(a);
//a为自定义,随便起
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <script src="./2.js"></script>
    <script src="./1.js"></script> -->
   
    <!-- 这里type="module"  -->
    <script src="./1.js" type="module"></script>

    
</head>
<body> 
    <script>

    </script>
</body>
</html>
```
总结一下：
- 如果导出方式`export default a` 那么载入方式 `import 自定义变量名 from "./2.js"`
- 如果导出方式`export  a=123;` 那么载入方式 `import { a } from "./2.js"`

### `async`  异步函数
如果有 `return` ===> 有返回值 ===> 返回值是 `promise` 对象 ===> 获取返回值通过 `.then`
`await`   `promise` 成功的返回值,如果有 成功的返回值,执行下一步, 如果没有成功的返回值，则会报错,停止执行.
```js

let err = 200;//错误改为400测试一下

// 定义一个 promise 对象
let x = new Promise(function(ok,no){
    if(err == 200){
        ok("正确,成功返回值")
    }else{
        no("错误,失败返回值")
    }
})

async function fn(){

    //await 等待
    let a = await x; //await 后可以是一个 promise 对象
    let b = await 789;//await 后也可以是值，
    return [a,b];

}
console.log( fn() ); 

fn().then(function(res){
    console.log(res);
})
```
应用：
```js
//封装好的 AJax
function $ajax(obj) {
    let {
        type = "GET", url, success
    } = obj;
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();

    return new Promise(function (ok, no) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                if(xhr.status == 200){
                    //成功
                ok(xhr.responseText);
                } 
            }else{
                //失败
                    no("请求失败")
            }
        }
    })
}

// 进一步使用 async 和 await

async function fn(){
    let a = await $ajax({'type':"get","url":"./1.json"})
    let b = await $ajax({'type':"get","url":"./1.json"})
    let c = await $ajax({'type':"get","url":"./1.json"})
    // console.log(a)
    // console.log(b)
    // console.log(c)
    return [JSON.parse(a),JSON.parse(b),JSON.parse(c)]
}

fn.then( res => console.log(res) )
```
### `webpack` 自动化模块化打包
- 文档： https://www.webpackjs.com/concepts/

- `webpack`: 模块化打包机（根据模块依赖打包文件）
- 默认：打包 `js` 文件
- 核心概念：
    - 入口(`entry`)
    - 输出(`output`)
    - `loader`: `css-loader` / `file-loader`
    - 插件(`plugin`): (删除已打包文件，压缩js，压缩css)
    - 模式(`mode`)
    - 浏览器兼容性(`browser compatibility`)
    - 环境(`environment`)

- 按照 `webpack` 指南进行配置 https://www.webpackjs.com/guides/getting-started/

- 构建服务器热加载开发环境： `webpack-dev-server`
- 插件 plugins: 
    - 输出html：html-webpack-plugins
    - 清理dist 目录： clean-webpack-plugin

## vue 
文档： https://cn.vuejs.org/

Hello World小项目开始
通过 cdn 使用vue :

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

```
`js` 使用严格模式：`use strict`

### **1/渐进式框架**

vue是一套构建用户界面的渐进式框架,采用自底向上增量开发的设计,vue的核心库只关注视图层,不仅易于上手,还便于与第三方库或既有项目整合;

渐进式表现:声明式渲染-->组件系统-->客户福安路由-->大数据状态管理-->构建工具

### **2两个核心(最大的亮点):**

**响应式数据绑定(双向数据绑定):**    当数据发生变化的时候,视图自动更新,即双向数据同步,原理利用了es6中放入Object definedProperty中的setter/getter代理数据,监控对数据的操作.

组合的视图组件(虚拟Dom):    即页面最终映射为一个组件树,采用树形结构进行设计,方便维护,重用.

### **3  虚拟`Dom`**

利用再去爱内存中生成与真实`Dom`与之对应的数据结构,这个在内存中生成的结构称之为虚拟Dom,当数据发生变化时,能够智能的计算出重新渲染组件的最小代价并应用到`Dom`操作上.

### **4 `MVVM`**

`MVVM`是`model-View-ViewModel`的缩写,它是一种基于前端开发的架构模式,起核心是提供对View和`ViewModel`的双向数据绑定,这使得`ViewModel`的状态改变可以自动传递给

`M`:`Model`(数据层,也就是指数据,前端是`js`)

`V`:`View`(也就是指`Dom`层或用户界面)

`VM`:`ViewModel`处理数据和界面的中间层,也就是指`vue`

**5声明式渲染**

`Vue.js` 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 `DOM` 的系统

额外补充:渲染分为:命令式渲染和声明式渲染

命令式渲染:命令我们的程序去做什么,程序就会跟着你的命令去一步一步执行

声明式渲染:只需要告诉程序想要的效果,其他的交给程序去做:



`vue.js`安装:

`CDN`:  对于制作原型或学习，你可以这样使用最新版本

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

### `NPM`:

在用 `Vue` 构建大型应用时推荐使用 `NPM` 安装。`NPM` 能很好地和诸如 或模块打包器配合使用。同时 `Vue` 也提供配套工具来开发。

```shell
$ npm install vue
```

### **看`vue.js`源码:**

`component`组件
`direction`指令
`filte`r控制器

### **`vue` 的生命周期**

`beforeCreate`
`created`
`beforeMount`
`mounted`
`beforeUpdated`
`updated`
`beforeDestroy`
`destroyed`
`activated`
`deactived`
`errorCaptured`
`serverPrefetch`

**`vue` 数组方法,只有`push`,`pop`,`shift`,`unshift`,`splice`,`sort`,`reverse`能够监听到**

```html
<!--view视图层-->
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',//vue操作的作用域
  //定义数据--model数据模型
  data: {
    message: 'Hello Vue!'
  }
})
//上面是id起作用,class是不起作用的,源码中是用queryselector
```

`v-bind` attribute 被称为**指令**。指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊 attribute。

### 1 `v-for` 渲染列表

`v-for`指令可以绑定数组的数据来渲染一个项目列表

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '学习 React' }
    ]
  }
})
```

### 2 `v-if`



```html
    <!-- //v-if会加载或移除不满足条件的写法 -->
    <div id="app">
       <h1>当前的年龄是--{{ age }} </h1>
       <p v-if="age>18" > 年龄大于18 </p>
       <p v-else-if="age==18" > 年龄等于18</p>
       <p v-else > 年龄小于18 </p>
    </div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        age:80
    }
})
```

### 3 `v-show`

`v-if`  `v-show` 区别：
    `v-if` 满足条件,加载节点,不满足条件,移除节点
    `v-show` 满足条件,显示,不满足条件,`css`样式`display:none`

*使用场景:
    频繁切换:使用 `v-show`,
    不频繁切换使用`v-if`*

*性能:
    `vmv-show`:初始消耗高,切换时消耗低*
    `v-if`:初始消耗低,切换时消耗高 

```html
    <div id="app">
     <h1>当前年龄是</h1>
     <p v-show="age>18">年龄>18</p>
     <p v-show="age==18">年龄=18</p>
     <p v-show="age<18">年龄<18</p>
    </div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
           age:18
    }
})
```

### 4  `v-text`

```html
<div id="app">
    <div>{{ a }}</div>
    <div>{{ b }}</div>

    <div v-text="a"></div>
    <div v-text="b"></div>

    <div v-html="a"></div>
    <div v-html="b"></div>
</div>
```

```js
const vm = new Vue({
    el: "#app",
    data: {
        a: "hhhhh",
        b: "<h1>呵呵</h1>"
    }
})
```

### 5  `v-bind`

```html
<!-- src href class id  title alt border 自定义 属性前v-bind:属性值就是变量 -->
<!--     v-bind可简写为: -->
<div id="app">
     <a v-bind:href="g">{{ f }}</a>
    
     <img v-bind:src="h" alt=""/>
     <p v-bind:class="j">123</p>
</div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        f:"淘宝",
        g:"https://www.taobao.com",
        h:"./",
        j:"b"
    }
})
```



### 6    `v-model`

```html
<!-- 载入Vue -->
<script src="./vue.js"></script>

<!-- 设置或获取表单数据,双向数据绑定的表现 -->
<div id="app">
    <input type="text" v-model="user">
    <h1>输入的值为: {{ user }}</h1>
</div>
<script>
    const vm=new Vue({
        el:"#app",
        data:{
            user:"gao"
        }
    })
```



### **7  `v-model`修饰符案例**

```html
<!-- v-model.lazy失去焦点再判断 -->
<!-- v-model.trim去首尾空格 -->
<!-- v-model.number转数字类型 -->
<!-- 可多个一起使用 -->
<div id="app">
    <!-- 文本框 -->
    <input type="text" v-model.lazy.number="age">
    <h1>输入值为:  {{ age }}</h1>
    <h1>输入值为:  {{  typeof age }}</h1>
    <!-- 单选 -->
    男:<input type="radio" name="sex" value="男" v-model="sex">
    女:<input type="radio" name="sex" value="女" v-model="sex" >
    <h1>  {{ sex }}</h1>
    <!-- 多选框 -->
    <input type="checkbox"  v-model="sex">是否同意
    <hr/>
    <!-- 多个复选框 -->
    <input type="checkbox" v-model="hobby" value="新闻">新闻
    <input type="checkbox"  v-model="hobby" value="科技">科技
    <input type="checkbox"  v-model="hobby" value="体育">体育
    <input type="checkbox"  v-model="hobby" value="财经">财经
    <h1>  {{ hobby }}</h1>
    <!-- 下拉1 --->
    <select name="" id=""  v-model="address">
        <option value="陕西">陕西</option>
        <option value="山西">山西</option>
        <option value="广西">广西</option>
        <option value="江西">江西</option>
    </select>
    <h1>  {{ address }}</h1>
    <!-- 下拉2 -multiple为可多选-->
    <select name="" id="" multiple  v-model="address2">
        <option value="陕西">陕西</option>
        <option value="山西">山西</option>
        <option value="广西">广西</option>
        <option value="江西">江西</option>
    </select>
    <h1>  {{ address2 }}</h1>
    <!-- 文本域 -->
    <textarea  rows="5" cols="30" maxlength="10" v-model="msg">

    </textarea>
    <p>输入的值是{{msg}}</p>
    <p>输入了{{msg.length}}个字</p>
    <p>可输入{{msg}}个字,还可以输入  {{10-msg.length}}个字</p>
</div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        age:18,
        sex:"女",
        one:"",
        hobby:[],
        address:"",
        address2:[],
        msg:""
    }
})
```

### 8 `v-bind `class

```css
.font{
    font-size: 30px;
}
.color{
    color: red;
}
```

```html
<div id="app">
    <p v-bind:class="x" >字体放大</p>
    <p v-bind:class="[x,y]" >字体放大,颜色为红</p>
    <p v-bind:class="[{'font':a>b},{'color':c>d}]" > a>b 字体放大, c>d 颜色为红 </p>
    <p v-bind:class="{'font':a>b,'color':c>d}" > a>b 字体放大, c>d 颜色为红 </p>
</div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        x:"font",
        y:"color",
        a:9,
        b:2,
        c:8,
        d:4
    }
})
```

### 9  `v-on`  绑定事件

```html
<div id="app">
    <button v-on:click="one()">点击</button>
    <button v-on:click="two(1,2,3)">点击传参数</button>

</div>
```

```js
const vm = new Vue({
    el: "#app",
    methods: {
        one(){
            alert("哈哈")
        },
        two(...x){
            console.log(x);
        }
    },
})
```

### 10  赋值解构

```html
<div id="app">
<input type="text" v-model.number="a">
+
<input type="text" v-model.number="b">
={{ sum }}

<h1>{{ sum }}</h1>
</div>
```

```js
const vm = new Vue({
    el:"#app",
    data:{
        a:"",
        b:""
    },
    //使用场景:多个值 影响一个值的变化
    //computed计算属性,优点:计算结果会缓存
    computed:{
        /*
            "属性名":function (){
                return 计算结果
            }
        */
        "sum":function(){
            return this.a +this.b
        }
    }
})
```

### 11  filter过滤

```js
let arr=[
    {"id":11,"name":"wan","sex":"男","age":18},
    {"id":21,"name":"wng","sex":"男","age":18},
    {"id":31,"name":"ang","sex":"男","age":18},
    {"id":41,"name":"wa","sex":"男","age":18},
    {"id":51,"name":"ng","sex":"男","age":18},
]
 //-----------方法1---------------------------
//将name中包含g字母取出组成新的数组
/* var arr2=[];
for (var i=0;i<arr.length;i++){
    if( arr[i].name.indexOf('g')>=0){
            arr2.push( arr[i] );
    }
}
console.log(arr2); */
 //--------------方法2------------------
let arr2=arr.filter( function(value,index){
    return value.name.includes("g")
})
console.log(arr2);
//-----------------方法2的简写---------------------

let arr2=arr.filter( value=>value.name.includes("g"))

console.log(arr2);
```

### 12 搜索

```html
<div id="app">
        <input type="text" v-model="search">
        <ul>
            <li v-for="(item,index) in info" :key="index"> {{ item.name }} </li>
            <li v-show="info.length==0">暂无数据</li>
        </ul>
</div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        arr:[
            {"name":"gao"},
            {"name":"li"},
            {"name":"wang"},
            {"name":"zhou"},
            {"name":"san"},
        ] ,
        search:"",
    },       
    computed:{
            info(){
                return this.arr.filter(val=>val.name.includes(this.search))
            }
        }
})
```

### 13  多条件搜索

```html
<div id="app">
        <input type="text" v-model="sname" placeholder="姓名">
        <input type="text" v-model="sage" placeholder="年龄">
        <ul>
            <li v-for="(item,index) in info" :key="index"> {{ item.name }}----{{ item.age }} </li>
            <li v-show="info.length==0">暂无数据</li>
        </ul>
</div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
        arr:[
            {"name":"gao","age":15},
            {"name":"li","age":15},
            {"name":"wang","age":15},
            {"name":"zhou","age":15},
            {"name":"san","age":15},
        ] ,
        sname:"",
        sage:"",
    },       
    computed:{
            info(){
                return this.arr.filter(val=>{
                    return  val.name.includes(this.sname) && val.age.toString().includes(this.sage) })
            }
        }
})
```



