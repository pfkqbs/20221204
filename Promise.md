JavaScript 深入系列
首发于微信号 前端圆圆
微信ID：fe-yuanyuan

**前言**

------



**如果你问我有什么方法可以让自己JS的技术 活生生地提升一个等级?**🙀

**`那就是手写Promise了！！！`**🤩

手写 Promise 有一个难点就在于有很多地方需要和原生一样严谨，也就是说原生的Promise会考虑很多特殊情况~🧐



我们在实际运用时可能暂时不会碰到这些情况，可是当我们遇到的时候 **却不知底层的原理，无法精准定位和解决问题，`这就是为什么我们要知道如何手写 Promise`**。



如果你问我为什么看了这么多教程还是不懂如何手写 Promise？那就是因为这里头有很多细节难点，很少人有人愿意把这些都讲出来，不过我今天就要把这里头的细节一个个给抠出来，*所以请大家务必先收藏再观看 ~* 奥力给😸😸😸



手写Promise包含以下知识点 👇：

- Promise
- Class 类
- 改变this指向 (call、apply和bind)
- 事件循环 Event Loop等

**不必担心因为上面的知识点不熟练而无法进行"手写 Promise "的学习，因为本文附带** `包会套餐` 👇：

- 🔍 如果你不太熟悉Promise的话，建议先看我之前的那篇 Promise 文章：通俗易懂的Promise知识点总结，检验一下你是否真的完全掌握了promise？https://github.com/yuanyuanbyte/Blog/issues/102
- 🔍 如果不知道 类 class 是如何使用的，建议参考我的这篇文章：ES6新特性 Class 类的全方面理解 https://github.com/yuanyuanbyte/Blog/issues/103
- 🔍 其他知识点讲解文章，会在文中列出，不用担心，你只需要跟着这篇文中走就完了~

现在我们就来一边回忆一遍实现Promise吧 🪐~

手写 Promsie 的整体结构如下：

**一、定义初始结构**

**二、实现 resolve 和 reject**

- \1. 管理状态和结果
- \2. this 指向问题

**三、实现 then 方法**

- \1. 状态不可变
- \2. 执行异常 throw
- \3. 参数校验

**四、实现异步**

- \1. 添加定时器
- \2. 回调保存
- \3. 验证 then 方法多次调用

**五、实现 then 方法的链式调用**

- \1. Promise/A+ 规范的理解
- \2. Promise/A+ 规范的总结
- \3. then 方法返回一个新的Promise

**六、实现 resolvePromise 方法**

**七、完整的 Promises/A+ 实现**

- \1. 清爽简洁 无注释版
- \2. 按步分析 注释加持版

**八、Promises/A+ 测试**

- \1. 安装官方测试工具
- \2. 使用 ES6 Module 对外暴露 myPromise 类
- \3. 实现静态方法 deferred
- \4. 配置 package.json
- \5. 完美通过官方872个测试用例

**九、其他方法**

- \1. 实现 Promise.resolve
- \2. 实现 Promise.reject
- \3. 实现 Promise.prototype.catch
- \4. 实现 Promise.prototype.finally
- \5. 实现 Promise.all
- \6. 实现 Promise.allSettled
- \7. 实现 Promise.any
- \8. 实现 Promise.race()

手写之前我们先简要的复习一下 Promise，*如果很熟悉 Promsie 可以跳过这一节~ 并不建议*

**Promise 核心要点**

------



> ✨ 本章节内容其实并不多，而且通俗易懂，建议不太熟悉Promise的同学还是循序渐进的看完本章再逐步学习Promise核心手写~

> 熟悉Promise的同学，如果想尽快开始学习手写Promise，可以跳过这一章，直接进入主题：“手写 Promise 第一步 定义初始结构”~

`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）

一个 `Promise` 必然处于以下几种状态之一 👇：

- 待定 `(pending)`: 初始状态，既没有被兑现，也没有被拒绝。
- 已成功 `(fulfilled)` 意味着操作成功完成。
- 已拒绝 `(rejected)`: 意味着操作失败。

当 `promise` 被调用后，它会以**处理中状态** `(pending)` 开始。这意味着调用的函数会继续执行，而 `promise` 仍处于处理中直到解决为止，从而为调用的函数提供所请求的任何数据。

被创建的 `promise` 最终会以**被解决状态** `(fulfilled)` 或 **被拒绝状态**`(rejected)` 结束，并在完成时调用相应的回调函数（传给 **then** 和 **catch**）。

◾ 为了让读者尽快对`promise`有一个整体的理解，我们先来看一段`promise`的例子 🌰：

```javascript
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
})
console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('失败')
    resolve('成功')
})
console.log('p2', p2)

let p3 = new Promise((resolve, reject) => {
    throw('报错')
})
console.log('p3', p3)
```

输出结果为：

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEDpp8aicwWVbZfQTzdhpW3N57cznOpWmv1VyNQsJ3pU5rXI1ujOvGSMw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**这里包含了四个知识点** 👇：

- 1、执行了`resolve()`，Promise状态会变成`fulfilled`，即 **已完成状态**
- 2、执行了`reject()`，Promise状态会变成`rejected`，即 **被拒绝状态**
- 3、Promise只以`第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就永远状态为`rejected`
- 4、Promise中有`throw`的话，就相当于执行了`reject()`

◾ 接下来看下面一段代码，学习新的知识点：

```javascript
let myPromise1 = new Promise(() => {});
console.log('myPromise1 :>> ', myPromise1);
let myPromise2 = new Promise((resolve, reject) => {  
    let a = 1;  
    for (let index = 0; index < 5; index++) {    
    a++;  
    }
})
console.log('myPromise2 :>> ', myPromise2)
myPromise2.then(() => {
	console.log("myPromise2执行了then");
})
```

输出结果：![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEIG0WA21Cu1kVlQPxqic71utDbXJlEaHx4odbG3HSzuia0F3XspRSxJsQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)





**这里包含了三个知识点** 👇：

- 1、Promise的初始状态是`pending`
- 2、Promise里没有执行`resolve()`、`reject()`以及`throw`的话，这个**promise的状态也是`pending`**
- 3、基于上一条，`pending`状态下的promise不会执行回调函数`then()`

**◾ 最后一点：**

```
let myPromise0 = new Promise();
console.log('myPromise0 :>> ', myPromise0);
```

输出结果：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEcLofxNw5pBO9mFUrZB2lr2LJG2WdDVEoAPrBwA8h4W89dg4uaZ45Iw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

这个里包含了一个知识点：

- 规定必须给`Promise`对象传入一个执行函数，否则将会报错。



好啦，复习完 Promise，**我们开始 手写Promise** 💃

**一、手写 Promise 第一步 "定义初始结构"**

------



原生的 promise 我们一般都会用 new 来创建实例 👇 ：

```javascript
let promise = new Promise()
```

所以我们手写的时候可以用构造函数或者class来创建，为了方便代码的整体观看就用class。

🔍 如果不知道 `类 class` 是如何使用的，建议参考我写的这篇文章：ES6新特性 Class 类的全方面理解 https://github.com/yuanyuanbyte/Blog/issues/103

把我们手写的Promise命名为myPromise，*具体名字可以按自己想法，都可以*

首先创建一个`myPromise`类

```javascript
class myPromise {}
```

在new一个promise实例的时候肯定是需要传入参数的

```javascript
let promise = new Promise(() => {})
```

不然这个实例用处不大；而这个参数我们知道是一个函数，并且当我们传入这个函数参数的时候，这个函数参数会自动执行。

因此，我们需要在类的`构造函数constructor`里面添加一个参数，这里就用func来做形参，并且执行一下这个参数

```javascript
class myPromise {
+    constructor(func) {
+       func();
+   }
}
```

**二、实现 resolve 和 reject**

------



接下来，大家都知道需要为这个函数参数传入它自己的函数，也就是`resolve()`和`reject()`



原生的promise里面可以传入`resolve`和`reject`两个参数

```javascript
let promise = new Promise((resolve, reject) => {})
```

那么我们也得允许手写这边可以传入这两个参数：

```javascript
class myPromise {
    constructor(func) {
+       func(resolve, reject);
    }
}
```

这里这样写明显有一个问题 🤨，那就是手写这边不知道哪里调用`resolve()`和`reject()`这两个参数，毕竟`resolve()`和`reject()`还没有定义

因此就需要创造出这两个对象 😀

有一点我们需要知道的是`resolve()`和`reject()`也是以函数的形式来执行的，我们在原生`promise`里也是在`resolve`和`reject`后面加括号`()`来执行的，因此我们可以用类方法的形式来创建这两个函数：

```javascript
class myPromise {
    constructor(func) {
        func(resolve, reject);
    }
+   resolve() {}
+   reject() {}
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEB3gK1vbUH6ROV6ap7lW9hCcibfvyTHRfeAxxYxbXsY4fv5QQCf3OcOw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
创建这两个方法以后我们发现`func`里面的两个参数颜色还是原来的颜色，编辑器就是在告诉我们：这两个参数还没有创建噢~😲

等下，刚刚不是已经创建了吗？🦁

是的，但是我们需要用`this`来调用自身`class`的方法，因此我们需要在构造函数里把两个参数前加上`this`：

```javascript
class myPromise {
    constructor(func) {
+       func(this.resolve, this.reject);
    }
    resolve() {}
    reject() {}
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEjGdAbiaibyXRydwoN6Eve8umdE4eERjowPQq4ic0V8wtCskjUNu6iaawqA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
那么这里的`resolve()`和`reject()`方法应该如何执行呢？里面应该写什么内容呢？😯

这就需要用到状态了 😛

## 1. 管理状态和结果

promise有三种状态：分别是`pending`，`fulfilled`和`rejected`

- 初始状态是`pending`
- `pending`可以转为`fulfilled`状态，但是不能逆转
- `pending`也可以转为`rejected`状态，但是也不能逆转
- 这里`fulfilled`和`rejected`也不能互转

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEgovAm4BJXajF1r3FKR2MLIFv21jx129xH7q7fWq8mpS3fswriaTd95w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
因此我们需要提前先把这些状态定义好，可以用`const`来创建外部的固定变量，但是这里为了统一就用`static`来创建`静态属性`：

```javascript
class myPromise {
+   static PENDING = 'pending';
+   static FULFILLED = 'fulfilled';
+   static REJECTED = 'rejected';
    constructor(func) {
        func(this.resolve, this.reject);
    }
    resolve() {}
    reject() {}
}
```

创建了状态属性以后，还需要为每一个实例添加一个`状态属性`，在前面讲到的 `“Promise 核心要点”` 章节，我们已经知道原生Promise用`PromiseState`这个字段来保存实例的状态属性，这里就也用 `this.PromiseState` 来保存实例的状态属性，这个状态属性默认就是 `待定pending`状态，**这样在每一个实例被创建以后就会有自身的状态属性可以进行判断和变动了**

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
+       this.PromiseState = myPromise.PENDING;
        func(this.resolve, this.reject);
    }
    resolve() {}
    reject() {}
}
```

那么在执行`resolve()`的时候就需要判断状态是否为 `待定 pending`，如果是 `待定 pending`的话就把状态改为 `成功 fulfilled`:

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        func(this.resolve, this.reject);
    }
    resolve() {
+       if (this.PromiseState === myPromise.PENDING) {
+           this.PromiseState = myPromise.FULFILLED;
+       }
    }
    reject() {}
}
```

同样，为给`reject`添加参数，并且把参数赋值给实例的`PromiseResult`属性:

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        func(this.resolve, this.reject);
    }
    resolve() {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
        }
    }
    reject() {
+       if (this.PromiseState === myPromise.PENDING) {
+           this.PromiseState = myPromise.REJECT;
+       }
    }
}
```

**◾ 执行 `resolve()` 和 `reject()` 可以传参**

现在我们再回忆一下原生`Promise` 🙂，在执行`resolve()`或者`reject()`的时候都是可以传入一个参数，这样我们后面就可以使用这个参数了

```javascript
let promise = new Promise((resolve, reject) => {
    resolve('这次一定')
})
```

我们可以把这个结果参数命名为`PromiseResult` *(和原生Promise保持一致)*，不管是成功还是拒绝的结果，两者选其一，我们让每个实例都有`PromiseResult`属性，并且给他们都赋值`null`，这里给空值`null`是因为执行`resolve()`或者`reject()`的时候会给结果赋值：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
+       this.PromiseResult = null;
        func(this.resolve, this.reject);
    }
    resolve() {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
        }
    }
    reject() {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECT;
        }
    }
}
```

接着我们就可以给`resolve()`添加参数，并且把参数赋值给实例的`PromiseResult`属性:

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve, this.reject);
    }
+   resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
+           this.PromiseResult = result;
        }
    }
    reject() {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECT;
        }
    }
}
```

同样，为给`reject()`添加参数，并且把参数赋值给实例的`PromiseResult`属性:

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve, this.reject);
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
+   reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECT;
+           this.PromiseResult = reason;
        }
    }
}
```

## 2. this 指向问题

现在的代码看起来风平浪静的，但很多人会在这里犯错~😥

大家觉得这里有什么错误？🧐

我们来`new`一个实例 🌰 执行一下代码就知道有没有问题了

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve, this.reject);
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECT;
            this.PromiseResult = reason;
        }
    }
}

// 测试代码
+  let promise1 = new myPromise((resolve, reject) => {
+      resolve('这次一定');
+  })
```

运行上面代码，报错 🦁：

```javascript
Uncaught TypeError: Cannot read property 'PromiseState ' of undefined
```

可从报错的信息里面我们貌似发现不了有什么错误🤨，因为`PromiseState`属性我们已经创建了，不应该是`undefined`~

🔍 但我们仔细看看`resolve()`和`reject()`方法里调用`PromiseState`，前面是有`this`关键字的😲

```javascript
    resolve(result) {
➡      if (this.PromiseState === myPromise.PENDING) {
➡          this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
➡      if (this.PromiseState === myPromise.PENDING) {
➡          this.PromiseState = myPromise.REJECT;
            this.PromiseResult = reason;
        }
    }
```

那么只有一种可能🧐，调用`this.PromiseState`的时候并没有调用`constructor`里的`this.PromiseState`，也就是这里的`this`已经跟丢了~

我们在`new`一个新实例的时候执行的是`constructor`里的内容，也就是`constructor`里的`this`确实是新实例的，但现在我们是在新实例被创建后再在外部环境下执行`resolve()`方法的，这里的`resolve()`看着像是和实例一起执行的，其实不然，也就**相当于不在`class`内部使用这个`this`**，而**我们没有在外部定义任何`PromiseState`变量，因此这里会报错**

解决`class`的`this`指向问题一般会用箭头函数，`bind`或者`proxy`，在这里我们就可以使用`bind`来绑定`this`，只需要在构造函数`constructor`中的`this.resolve`和`this.reject`后加上，`.bind（this）`就可以了 😺:

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
+       func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult  = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECT;
            this.PromiseResult = reason;
        }
    }
}

// 测试代码
let promise1 = new myPromise((resolve, reject) => {
    resolve('这次一定');
})
```

🔍 如果这里有点蒙圈，不太懂为什么这样写，可以参考我之前写的关于`this`指向的文章：

- call、apply和bind方法的用法、区别和使用场景https://github.com/yuanyuanbyte/Blog/issues/115
- 手写 实现call、apply和bind方法 超详细！！！https://github.com/yuanyuanbyte/Blog/issues/109

我们接着往下写~

对于`resolve`来说，这里就是给实例的`resolve()`方法绑定这个`this`为当前的实例对象，并且执行`this.resolve()`方法：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICE4qlicH5ibpYK0Pf46QfhNdEvNhwr3B2jLnh9ATCaRlrQQTz80qPwnQyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
对于`reject`来说，这里就是给实例的`reject`方法绑定这个`this`为当前的实例对象，并且执行`this.reject`方法：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEXA543PjdWaZfQtJtwbFEW7ggegVluJpcic7Ltd6ex2pEKMagYYM6jbA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
咱们来测试一下代码吧：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
}

// 测试代码
let promise1 = new myPromise((resolve, reject) => {
    resolve('这次一定');
})
console.log(promise1); 
// myPromise {PromiseState: 'fulfilled', PromiseResult: '这次一定'}
let promise2 = new myPromise((resolve, reject) => {
    reject('下次一定');
})
console.log(promise2); 
// myPromise {PromiseState: 'rejected', PromiseResult: '下次一定'}
```

上面是我们手写的 `myPromise`的执行情况，看看原生Promise的执行情况：

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICE82dfNzllBdPRoqOkib4mtbeibxqQQ6kqzX9hGCe3Rnf60O74T2sxPXng/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
说明执行结果符合我们的预期，是不是觉得离成功又进了一步啦~ 👏👏👏

那么大家觉得下一步我们要做什么？是不是很多同学觉得需要写`then`了？那么我们就先来满足想要写`then`的同学们~

**三、实现 then 方法**

------



**因为`then`是在创建实例后再进行调用的，因此我们再创建一个 类方法，可千万不要创建在 `constructor` 里面了~**😛

我想应该有些同学突然失忆😶，不记得`then`怎么用了，我们就来稍微写一下原生的`then`方法：

```javascript
let promise = new Promise((resolve, reject) => {
    resolve('这次一定')
})

+  promise.then(
+      result => {
+          console.log(result);
+      },
+      reason => {
+          console.log(reason.message);
+      }
+  )
```

`then`方法可以传入两个参数，这两个参数都是函数，一个是当状态为`fulfilled 成功` 时执行的代码，另一个是当状态为 `rejected 拒绝` 时执行的代码。

虽然很多人可能一直只用一个函数参数，但不要忘记这里是两个函数参数🧐。

因此我们就可以先给手写的`then`里面添加 **两个参数**：

- 一个是 `onFulfilled` 表示 `“当状态为成功时”`
- 另一个是 `onRejected` 表示 `“当状态为拒绝时”`

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
+   then(onFulfilled, onRejected) {}
}
```

## 1. 状态不可变

这里我们先看看`原生 Promise` 产生的结果：

```javascript
let promise = new Promise((resolve, reject) => {
    resolve('这次一定')
    reject('下次一定')
})

promise.then(
    result => {
        console.log('fulfilled', result);
    },
    reason => {
        console.log('rejected', reason.message);
    }
)
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICERDPW0Zb9Ghp2d7QLVxO6LGMMlmzPRpVvKUhm95pqYYlKyFkOVOypHw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

可以看到控制台只显示了一个`console.log`的结果，**证明 `Promise` 只会执行`成功状态` 或者 `拒绝状态` 的其中一个**

也就是我们前文讲到的，`Promise` 只以 `第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就`永远`状态为`rejected`

因此我们在手写的时候就必须进行判断 🤖：

◾ 如果当前实例的 `PromiseState` 状态属性为 `fulfilled 成功` 的话，我们就执行传进来的 `onFulfilled` 函数，并且为`onFulfilled`函数传入前面保留的`PromiseResult`属性值：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
+       if (this.PromiseState === myProise.FULFILLED) {
+           onFulfilled(this.PromiseResult);
+       }
    }
}
```

◾ 如果当前实例的 `PromiseState` 状态属性为 `rejected 拒绝` 的话，我们就执行传进来的 `onRejected` 函数，并且为`onRejected`函数传入前面保留的`PromiseResult`属性值：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        if (this.PromiseState === myProise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
+       if (this.PromiseState === myPromise.REJECTED) {
+           onRejected(this.PromiseResult);
+       }
    }
}
```

定义好了判断条件以后，我们就来测试一下代码，也是一样，在实例 🌰 上使用`then`方法：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}

// 测试代码
let promise1 = new myPromise((resolve, reject) => {
    resolve('这次一定');
+   reject('下次一定');
})
+   promise1.then(
+       result => {
+           console.log(result)
+       },
+       reason => {
+           console.log(reason.message)
+       }
+   )
```

执行上面的测试代码，查看控制台：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEFFwqm6O0TzW4G5sibicWHVhSSA8pBia0ugtkd4EhT6Ay4nwRb3cKqrjjg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
可以看到控制台只显示了一个`console.log`的结果：`这次一定` 😎，证明我们已经实现了 `promise的状态不可变` 👏👏👏

写到这里并没有报错，也就是我们`暂时安全`了，为什么说`暂时安全`呢？

因为这里还有很多没有完善的地方，手写Promise的时候，有一个难点就在于有很多地方需要和原生一样严谨，也就是说原生的Promise会考虑很多特殊情况~

我们在实际运用时可能暂时不会碰到这些情况，可是当我们遇到的时候 **却不知底层的原理，`这就是为什么我们要知道如何手写Promise`**

接着写 💪

## 2. 执行异常 throw

在`new Promise`的时候，执行函数里面如果抛出错误，是会触发`then`方法的第二个参数，即`rejected`状态的回调函数

也就是在原生的Promise里面，`then`方法的第二个参数，即`rejected`状态的回调函数可以把错误的信息作为内容输出出来

到这里，有的同学可能会说，执行异常抛错，不是用`catch()`方法去接吗？为什么这里又说 `是会触发then方法的第二个参数，即rejected状态的回调函数`？😵

那我们就说道说道吧🧐：

`catch()` 方法返回一个`Promise`，并且处理拒绝的情况。它的行为与调用`Promise.prototype.then(undefined, onRejected)` 相同。

事实上, calling `obj.catch(onRejected)` 内部calls `obj.then(undefined, onRejected)`。(这句话的意思是，我们显式使用`obj.catch(onRejected)`，内部实际调用的是`obj.then(undefined, onRejected)`)

`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

```javascript
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then(
    null,
    err=> {console.log(err)}
) 

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

◾ 注意看下面的例子 🌰：

```javascript
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test
```

上面代码中，promise抛出一个错误，就被`catch()`方法指定的回调函数捕获。注意，上面的写法与下面两种写法是等价的。

```javascript
// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});
// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```

比较上面两种写法，可以发现`reject()`方法的作用，等同于抛出错误。这一点很重要，因为我们手写Promise就是用`try/catch`来处理异常，用的就是上面的思想。

◾ **一般来说，不要在`then()`方法里面定义 Reject 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。**

```javascript
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });
  
// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法（`try/catch`）。因此，建议总是使用`catch()`方法，而不使用`then()`方法的第二个参数。

**回到正题**

原生Promise在`new Promise`的时候，执行函数里面如果抛出错误，是会触发`then`方法的第二个参数 `(即rejected状态的回调函数)`，把错误的信息作为内容输出出来:

```javascript
let promise = new Promise((resolve, reject) => {
    throw new Error('白嫖不成功');
})

promise.then(
    result => {
        console.log('fulfiiled:', result)
    },
    reason => {
        console.log('rejected:', reason)
    }
)
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEbQibiax3TAiahqJnqKyhGrl8Tm9HjC6iaD2h5sKt3mtw44UsCBfA2rYBCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
但是如果我们在手写这边写上同样道理的测试代码，很多人就会忽略这个细节😥：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}


// 测试代码
let promise1 = new myPromise((resolve, reject) => {
+   throw new Error('白嫖不成功');
})
promise1.then(
+   result => {
+       console.log('fulfiiled:', result)
+   },
+   reason => {
+       console.log('rejected:', reason)
+   }
)
```

我们看看控制台
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICECDABQ1YtZ5p7ZaeynNkibVzYnwTYvc4BZVyicn6HLIwnL9mfsjyE9svQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

> `Uncaught` 未捕获

可以发现报错了😰，没有捕获到错误，没有把内容输出出来

◾ 我们可以在执行`resolve()`和`reject()`之前用`try/catch`进行判断，在`构造函数 constructor`里面完善代码，判断生成实例的时候是否有报错 🔍：

- 如果没有报错的话，就按照正常执行`resolve()`和`reject()`方法
- 如果报错的话，就把错误信息传入给`reject()`方法，并且直接执行`reject()`方法

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
+       try {
            func(this.resolve.bind(this), this.reject.bind(this));
+       } catch (error) {
+           this.reject(error)
+       }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}


// 测试代码
let promise1 = new myPromise((resolve, reject) => {
    throw new Error('白嫖不成功');
})
promise1.then(
    result => {
        console.log('fulfiiled:', result)
    },
    reason => {
        console.log('rejected:', reason)
    }
)
```

◾ **注意这里不需要给`reject()`方法进行`this`的绑定了，因为这里是直接执行，而不是创建实例后再执行。**

▪ `func(this.resolve.bind(this), this.reject.bind(this));` 这里的`this.reject`意思是：把类方法`reject()`作为参数 传到构造函数`constructor` 里要执行的`func()`方法里，只是一个参数，并不执行，只有创建实例后调用`reject()`方法的时候才执行，此时`this`的指向已经变了，所以想要正确调用`myPromise`的`reject()`方法就要通过`.bind(this))`改变`this`指向。

▪ `this.reject(error)`，这里的`this.reject()`，是直接在构造函数里执行类方法，`this`指向不变，`this.reject()`就是直接调用类方法`reject()`，所以不用再进行`this`绑定。

◾ 这里考察了`this`绑定的一个细节🔍：

`call`、`apply`和`bind`都可以改变函数体内部 this 的指向，**但是 `bind` 和 `call/apply` 有一个很重要的区别：一个函数被 `call/apply` 的时候，会立即执行函数，但是 `bind` 会创建一个新函数，不会立即执行。**

这就是前面为什么说，`this.reject.bind(this)`只是作为参数，并没有直接执行的原因了~😀

**回到正文**

结合前面的讲解，刷新一下控制台，我们可以看到手写这边已经没有报错了👏👏![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEVcHRn6iamB734q3iaxSKEM4vHxgHItbdAHjQl8tJJokWbYhIrt83tpxQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 3. 参数校验

大家觉得目前代码是不是没问题了？可以进行下一步了？

如果你觉得是的话就又掉坑了~🦁

原生Promise里**规定`then`方法里面的两个参数如果不是函数的话就要被忽略**，我们就故意在原生代码这里不传入函数作为参数：

```javascript
let promise = new Promise((resolve, reject) => {
    throw new Error('白嫖不成功');
})

promise.then(
    undefined,
    reason => {
        console.log('rejected:', reason)
    }
)
```

运行以后我们发现在这里执行是没有问题的：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEzXZm8NSyEbfEycMblLS5AZ4YibmJSSJYic3Xeiaicbvb3upibcKWjumwwlQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

我们再以同样类似的不传 **函数参数** 的代码应用在 **手写代码** 上面：

```javascript
class myPromise {
	...
}

let promise1 = new myPromise((resolve, reject) => {
    resolve('这次一定');
})

promise1.then(
    undefined,
    reason => {
        console.log('rejected:', reason)
    }
)
```

大家想想会不会有什么问题？来看看结果会怎样？🧐
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICEczxdAgNVSeuciaibU8dWuStu4BZ9fyibEVm6Qa0mrAZRIRM8n4Wb7vDqg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
结果就是 `Uncaught TypeError: onFulfilled is not a function`。浏览器帮你报错了，这不是我们想要的~😥

我们只想要自己来抛出错误，再来看看刚刚的手写`then`部分：

```javascript
then(onFulfilled, onRejected) {
    if (this.PromiseState === myPromise.FULFILLED) {
        onFulfilled(this.PromiseResult);
    }
    if (this.PromiseState === myPromise.REJECTED) {
        onRejected(this.PromiseResult);
    }
}
```

我们会在里面分别执行成功和拒绝两个参数，可是我们不想修改这里的代码，那么就只能把不是函数的参数改为函数

**`Promise` 规范如果 `onFulfilled` 和 `onRejected` 不是函数，就忽略他们，所谓“忽略”并不是什么都不干，对于`onFulfilled`来说“忽略”就是将`value`原封不动的返回，对于`onRejected`来说就是返回`reason`，`onRejected`因为是错误分支，我们返回`reason`应该`throw`一个`Error`:**

这里我们就可以用 `条件运算符`，我们在进行`if`判断之前进行预先判断：

▪ 如果`onFulfilled`参数是一个函数，就把原来的`onFulfilled`内容重新赋值给它，如果`onFulfilled`参数不是一个函数，就将`value`原封不动的返回

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
+       onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}
```

▪ 如果`onRejected`参数是一个函数，就把原来的`onRejected`内容重新赋值给它，如果`onRejected`参数不是一个函数，就`throw`一个`Error`

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
+       onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}
```

现在我们再来测试一下代码：

```javascript
class myPromise {
	...
}

let promise1 = new myPromise((resolve, reject) => {
    resolve('这次一定');
})
promise1.then(
    undefined,
    reason => {
        console.log('rejected:', reason)
    }
)
```

查看控制台，发现没有报错了👏👏👏：
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICERwmDuAUba44tl1osnLt0RMwy1ZYstrwcUs5jukaiaicIdB1333fZENkw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
**当前实现的完整代码：**

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}
```

继续冲 💨

**四、实现异步**

------



**1. 添加定时器**

在对代码进行一些基本修补以后，我们就可以来进行下一个大功能了，也就是Promise的 **异步功能** ✨。

可以说我们在手写的代码里面依旧没有植入异步功能，毕竟最基本的`setTimeout`我们都没有使用，但是我们必须先了解一下原生Promise的一些`运行顺序规则`。

在这里我为原生代码添加上步骤信息：

```javascript
console.log(1);

let promise = new Promise((resolve, reject) => {
    console.log(2);
    resolve('这次一定');
})

promise.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)

console.log(3);
```

我们配合这段原生Promise代码，结合控制台一起看看
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0donzZ1CjWlSulUkdzMr9w3TibKPDovxgw55otZxF7Z7E2f6K2sqexnrXah1CnOePuJp35v6XMXYCOWQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
输出顺序为：

```
1
2
3
fulfilled: 这次一定
```

- 首先执行`console.log(1)`，输出`1`
- 接着创建`promise实例`，输出`2`，因为这里依旧是同步
- 然后碰到`resolve`的时候，修改结果值
- 到了`promise.then`会进行异步操作，也就是我们 **需要先把执行栈的内容清空**，于是就执行`console.log(3)`，输出`3`
- 接着才会执行`promise.then`里面的内容，也就是最后输出`“fulfilled: 这次一定”`

▪ 我们用同样的测试代码应用在 **手写代码** 上面：

```javascript
class myPromise {
	...
}

// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    resolve('这次一定');
})
promise1.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

这次我们发现有些不同了😯，输出顺序为：

```javascript
1
2
fulfilled: 这次一定
3
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0donzZ1CjWlSulUkdzMr9w3TibniaricQ57m7Pu6pMUU7pyTwiaia4YHgkh8K9WMJuOQ6h1oT0jHl24GsdHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
`1` 和 `2` 都没有问题，问题就是`“fulfilled: 这次一定”`和`3`这里的顺序不对

◾ 其实问题很简单，就是我们刚刚说的 **没有设置异步执行** 😶

我们二话不说直接给`then`方法里面添加`setTimeout`就可以了😎，**需要在进行`if`判断以后再添加`setTimeout`，要不然状态不符合添加异步也是没有意义的**，然后在`setTimeout`里执行传入的函数参数：

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.FULFILLED) {
+           setTimeout(() => {
                onFulfilled(this.PromiseResult);
+           });
        }
        if (this.PromiseState === myPromise.REJECTED) {
+           setTimeout(() => {
                onRejected(this.PromiseResult);
+           });
        }
    }
}
```

我们使用前面的用例重新测试一下代码：

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}

// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    resolve('这次一定');
})
promise1.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

输出顺序为:

```
1
2
3
fulfilled: 这次一定
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0donzZ1CjWlSulUkdzMr9w3TibnLgXAbsfahI7tVwcjkbfAw7ITuDweia5nTIBMoBrNTpks0tgiaOXviblg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
这次的顺序就比较顺眼了~👏👏👏

**在这里我们解决异步的方法是给****`resolve`****和`reject`添加`setTimeout`，但是为什么要这么做呢？**

◾ 这就要讲到 **`Promise/A+` 规范** 了

规范 `2.2.4` ：

> `onFulfilled` or `onRejected` must not be called until the `execution context` stack contains only platform code. [3.1].

译文：

2.2.4 `onFulfilled` 和 `onRejected` 只有在`执行环境`堆栈仅包含平台代码时才可被调用 `注1`

规范对2.2.4做了注释：

> 3.1 Here “platform code” means engine, environment, and promise implementation code. In practice, this requirement ensures that `onFulfilled` and `onRejected` execute asynchronously, after the event loop turn in which `then` is called, and with a fresh stack. This can be implemented with either a “macro-task” mechanism such as setTimeout or `setImmediate`, or with a “micro-task” mechanism such as MutationObserver or process.nextTick. Since the promise implementation is considered platform code, it may itself contain a task-scheduling queue or “trampoline” in which the handlers are called.

译文：

**3.1 这里的平台代码指的是引擎、环境以及 promise 的实施代码。实践中要确保 `onFulfilled` 和 `onRejected` 方法异步执行，且应该在 `then`方法被调用的那一轮事件循环之后的新执行栈中执行。这个事件队列可以采用“宏任务（macro-task）”机制，比如`setTimeout` 或者 `setImmediate`；也可以采用“微任务（micro-task）”机制来实现， 比如 `MutationObserver` 或者`process.nextTick`。** 由于 promise 的实施代码本身就是平台代码（译者注：即都是 JavaScript），故代码自身在处理在处理程序时可能已经包含一个任务调度队列或『跳板』)。

**这里我们用的就是规范里讲到的 “宏任务” `setTimeout`**。

## 2. 回调保存

异步的问题真的解决了吗？现在又要进入Promise另一个难点了，大家务必竖起耳朵啦😛

我们来给原生的Promise里添加`setTimeout`，使得`resolve`也异步执行，那么就会出现一个问题了，`resolve`是异步的，`then`也是异步的，究竟谁会先被调用呢？

```javascript
console.log(1);
let promise = new Promise((resolve, reject) => {
    console.log(2);
+   setTimeout(() => {
        resolve('这次一定');
+       console.log(4);
+   });
})
promise.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

输出顺序为：

```javascript
1
2
3
4
fulfilled: 这次一定
```

特别要注意的是当遇到`setTimeout`的时候被异步执行了，而`resolve('这次一定')`没有被马上执行，而是先执行`console.log(4)`，等到`then`的时候再执行`resolve`里保存的值。

这里涉及到了浏览器的事件循环，`promise.then()` 和 `setTimeout()` 都是异步任务，但实际上异步任务之间并不相同，因此他们的执行优先级也有区别。不同的异步任务被分为两类：`微任务 (micro task)` 和 `宏任务 (macro task)`。

- `setTimeout()`属于宏任务
- `promise.then()`属于微任务

在一个事件循环中，异步事件返回结果后会被放到一个任务队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的宏任务队列或者微任务队列中去。并且在当前执行栈为空的时候，主线程会 查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈…如此反复，进入循环。

我们只需记住 **当 当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。**

> 🔍 如果想要学习事件循环、微任务和宏任务，可以看我写的这篇文章：详解宏任务、微任务与事件循环 Event Loop  https://github.com/yuanyuanbyte/Blog/issues/92

**回到正文**

我们用同样的代码应用到手写的部分：

```javascript
class myPromise {
	...
}

// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        resolve('这次一定');
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

控制台输出：

```
1
2
3
4
```

可以发现 `fulfilled: 这次一定` 并没有输出

我们可以先猜测一下，没有输出的原因很可能是因为`then`方法没有被执行，看看`then`方法里面是根据条件判断来执行代码的：

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}
```

也就是说很可能没有符合的条件，再换句话说可能没有符合的状态

那么我们就在三个位置分别输出当前的状态，这样分别来判断哪个位置出了问题:

```javascript
class myPromise {
	...
}

// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
+       console.log('A',promise1.PromiseState);
        resolve('这次一定');
+       console.log('B',promise1.PromiseState);
        console.log(4);
    });
})
promise1.then(
    result => {
+       console.log('C',promise1.PromiseState);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

输出结果为：

```javascript
1
2
3
A pending
B fulfilled
4
```

发现只有两组状态被输出，这两组都在`console.log(4)`前被输出，证明`setTimeout`里面的状态都被输出了，只有`then`里面的状态没有被输出

这基本就可以确定是因为`then`里的状态判断出了问题

这里涉及到事件循环，我们详细解读一下：

▪ **首先**，执行`console.log(1)`，输出`1`

▪ **第二步**，创建promise，执行函数体里的`console.log(2)`，输出`2`

▪ **第三步**，遇到`setTimeout`，`setTimeout`是宏任务，将`setTimeout`加入宏任务队列，等待执行

▪ **第四步**，遇到`promise.then()`，`promise.then()`是微任务，将`promise.then()`加入微任务队列，等待执行

▪ **第五步**，执行`console.log(3)`，输出`3`，此时当前执行栈已经清空

▪ **第六步**，当前执行栈已经清空，先执行微任务队列的任务 `promise.then()`，发现promise的状态并没有改变，还是`pending`，所以没有输出。状态并没有改变的原因是：`resolve('这次一定')`是在`setTimeout`里的，但此时还没开始执行`setTimeout`，因为`setTimeout`是宏任务，宏任务在微任务后面执行

▪ **第七步**，微任务队列已经清空，开始执行宏任务 `setTimeout`：

```javascript
 setTimeout(() => {
     console.log('A',promise1.PromiseState);
     resolve('这次一定');
     console.log('B',promise1.PromiseState);
     console.log(4);
 });
```

▪ **第八步**，执行 `console.log('A',promise1.PromiseState)`，此时promise状态还没发生变化，还是`pending`，所以输出 `A pending`

▪ **第九步**，执行 `resolve('这次一定');`，改变promise的状态为`fulfilled`

▪ **第十步**，执行 `console.log('B',promise1.PromiseState)`，输出 `B fulfilled`

▪ **第十一步**，执行 `console.log(4)`，输出`4`

> 这里暂且认为我们写的promise.then()和原生一样，方便理解

◾ 分析完上面的代码，我们知道了，因为先执行了`then`方法，但发现这个时候状态依旧是 `pending`，而我们手写部分没有定义`pending`待定状态的时候应该做什么，因此就少了`fulfilled: 这次一定` 这句话的输出

所以我们就 **直接给`then`方法里面添加待定状态的情况就可以了**，也就是用`if`进行判断:

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
+       if (this.PromiseState === myPromise.PENDING) {
+ 		
+ 		}
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}
```

◾ 但是问题来了，当`then`里面判断到 `pending` 待定状态时我们要干什么？

因为这个时候`resolve`或者`reject`还没获取到任何值，因此我们必须让`then`里的函数稍后再执行，等`resolve`执行了以后，再执行`then`

为了保留`then`里的函数，我们可以创建 `数组` 来 **保存函数**。

**为什么用 `数组` 来保存这些回调呢？因为一个promise实例可能会多次 `then`，也就是经典的 `链式调用`**，而且数组是先入先出的顺序

在实例化对象的时候就让每个实例都有这两个数组：

- `onFulfilledCallbacks` ：用来 **保存成功回调**
- `onRejectedCallbacks` ：用来 **保存失败回调**

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
+       this.onFulfilledCallbacks = []; // 保存成功回调
+       this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
}
```

◾ 接着就完善`then`里面的代码，也就是当判断到状态为 `pending` 待定时，暂时保存两个回调，也就是说暂且把`then`里的两个函数参数分别放在两个数组里面：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
        onRejected = typeof onRejected === 'function' ? onRejected : () => {};
        if (this.PromiseState === myPromise.PENDING) {
+           this.onFulfilledCallbacks.push(onFulfilled);
+           this.onRejectedCallbacks.push(onRejected);
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}
```

◾ 数组里面放完函数以后，就可以完善`resolve`和`reject`的代码了

**在执行`resolve`或者`reject`的时候，遍历自身的`callbacks`数组**，看看数组里面有没有`then`那边 **保留** 过来的 **待执行函数**，**然后逐个执行数组里面的函数**，执行的时候会传入相应的参数：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
+           this.onFulfilledCallbacks.forEach(callback => {
+               callback(result)
+           })
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
 +          this.onRejectedCallbacks.forEach(callback => {
 +              callback(reason)
 +          })
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}
```

完善好代码后，让我们再来测试以下刚才的实例：

```javascript
class myPromise {
	...
}


// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A', promise1.PromiseState);
        resolve('这次一定');
        console.log('B', promise1.PromiseState);
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('C', promise1.PromiseState);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

输出结果：

```javascript
1
2
3
A pending
C fulfilled
fulfilled: 这次一定
B fulfilled
4
```

**从上面的结果我们可以看到 `fulfilled: 这次一定` 打印出来啦，`promise1.then()`方法也正常执行，打印出了当前的状态：`B fulfilled`**

**但是**

细心的同学可能已经发现了，代码输出顺序还是不太对，原生Promise中，`fulfilled: 这次一定` 是最后输出的

◾ 这里有一个很多人忽略的小细节，**`resolve` 和 `reject` 是要在 `事件循环末尾` 执行的**，因此我们就 **给 `resolve` 和 `reject` 里面加上 `setTimeout`** 就可以了

**我们在判断完 `promise` 状态后再加 `setTimeout` ：**

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
+           setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
+           });
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
+           setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
+           });
        }
    }
}
```

为什么不像下面这样呢？

```javascript
 resolve(result) {
 	 // bad
     setTimeout(() => {
         if (this.PromiseState === myPromise.PENDING) {
             this.PromiseState = myPromise.FULFILLED;
             this.PromiseResult = result;
             this.onFulfilledCallbacks.forEach(callback => {
                 callback(result)
             })
         }
     });
 }
 reject(reason) {
 	 // bad
     setTimeout(() => {
         if (this.PromiseState === myPromise.PENDING) {
             this.PromiseState = myPromise.REJECTED;
             this.PromiseResult = reason;
             this.onRejectedCallbacks.forEach(callback => {
                 callback(reason)
             })
         }
     });
 }
```

因为在一个promise里，可能有的人会不注意同时用了`resolve()` 和 `reject()` ，像这样：

```javascript
let promise = new Promise((resolve, reject) => {
    resolve('这次一定')
    reject('下次一定')
})
```

▪ 如果把 `setTimeout` 放到 `if` 判断之前，那岂不是就算状态不满足条件，我们也要开启一个定时器，上面的情况，同时用了`resolve()` 和 `reject()`，那我们是不是要同时开启两个定时器？如果在一个promise里多次使用 `resolve()` 和 `reject()` 方法，那岂不是要开启更多的无用的定时器？

▪ 如果先判断状态再添加定时器，这样我们就 **只会满足条件后才开启一个定时器**，相比上面的情况，这样的 **开销** 就小了很多

聊完细节，我们回到正文，检验一下这次是否能行：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
            });
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
            });
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}


// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A', promise1.PromiseState);
        resolve('这次一定');
        console.log('B', promise1.PromiseState);
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('C', promise1.PromiseState);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

输出顺序：

```
1
2
3
A pending
B pending
4
C fulfilled
fulfilled: 这次一定
```

**可以看到最后输出 `fulfilled: 这次一定` ，和原生Promise顺序一致！**

到这里我们已经完成了 **promise的回调保存**，已经越来越接近胜利了😺

## 3. 验证 then 方法多次调用

Promise 的 then 方法可以被多次调用。

用一个 🌰 ，来验证一下我们写的promise `then` 方法是否可以多次调用：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
            });
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
            });
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}


// 测试代码
const promise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000);
})
promise.then(value => {
    console.log(1)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(2)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(3)
    console.log('resolve', value)
})
```

运行上面 🌰，输出结果👇

```javascript
1
resolve success
2
resolve success
3
resolve success
```

所有 `then` 中的回调函数都已经执行 😎

说明我们当前的代码，已经可以实现 `then` 方法的多次调用✨

👏👏👏 完美，继续

**五、实现 then 方法的链式调用**

------



**我们常常用到** `new Promise().then().then()`**，这就是链式调用，用来解决回调地狱**

举个例子 🌰

```javascript
let p1 = new Promise((resolve, reject) => {
    resolve(10)
})
p1.then(res => {
    console.log('fulfilled', res);
    return 2 * res
}).then(res => {
    console.log('fulfilled', res)
})
```

输出👇：

```javascript
fulfilled 100
fulfilled 200
```

再举一个例子 🌰 ：

```javascript
const p2 = new Promise((resolve, reject) => {
    resolve(100)
})

p2.then(res => {
    console.log('fulfilled', res);
    return new Promise((resolve, reject) => resolve(3 * res))
}).then(res => {
    console.log('fulfilled', res)
})
```

输出👇：

```javascript
fulfilled 100
fulfilled 300
```

我们先试一下当前的`myPromise`是否可以实现链式调用：

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
            });
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
            });
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        if (this.PromiseState === myPromise.PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            setTimeout(() => {
                onFulfilled(this.PromiseResult);
            });
        }
        if (this.PromiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.PromiseResult);
            });
        }
    }
}


// 测试代码
let p1 = new myPromise((resolve, reject) => {
    resolve(10)
})
p1.then(res => {
    console.log('fulfilled', res);
    return 2 * res
}).then(res => {
    console.log('fulfilled', res)
}) 
```

毫无疑问在控制台里面是会报错的，提示 `then` 方法没有定义：

```
Uncaught TypeError: Cannot read property 'then' of undefined
```

**`Promise.prototype.then()` 方法返回一个新的Promise实例（注意，不是原来那个`Promise`实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。**

## 1. Promise/A+ 规范的理解

◾ **想要实现`then`方法的链式调用，就必须彻底搞懂`then`方法，这里我们参考 `Promise/A+` 规范（https://promisesaplus.com）** 👇
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokAYzbNBlWib33G1j3KYjx99BEMAtxI48ZKhMBU1pmbx6kuM1BUrFjyEMJMFhibOUnSvcX48WGRKeLA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
**规范在`2.2.7`中这样描述** 👇**：**

◾ **2.2.7 then 方法必须返回一个 promise 对象**

```
promise2 = promise1.then(onFulfilled, onRejected);
```

- **2.2.7.1** 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行下面的 **Promise 解决过程：****`[[Resolve]](promise2, x)`**
- **2.2.7.2** 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
- **2.2.7.3** 如果 `onFulfilled` 不是函数且 `promise1` 成功执行， `promise2` 必须成功执行并返回相同的值
- **2.2.7.4** 如果 `onRejected` 不是函数且 `promise1` 拒绝执行， `promise2` 必须拒绝执行并返回相同的据因

理解上面的`“返回”`部分非常重要，即：**不论 promise1 被 reject 还是被 resolve 时 promise2 都会执行 Promise 解决过程：`[[Resolve]](promise2, x)`，只有出现异常时才会被 rejected。**

注意 **2.2.7.1** ：

> If either onFulfilled or onRejected returns a value x, **`run the Promise Resolution Procedure [[Resolve]](promise2, x).`**

即：如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行下面的 **Promise 解决过程：`[[Resolve]](promise2, x)`**

规范在 **2.3** 中详细描述 **Promise 解决过程** `The Promise Resolution Procedure` 👇
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokAYzbNBlWib33G1j3KYjx99pWrSqmuwkLVZRcIMlQkqVrjsoEXmCthOHftadl1bVYEgv2IyYOYBxw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
译过来 👇：

◾ **2.3 Promise 解决过程**

**Promise 解决过程** 是一个抽象的操作，其需输入一个 `promise` 和一个值，我们表示为 `[[Resolve]](promise, x)`，如果 `x` 有 `then` 方法且看上去像一个 `Promise` ，解决程序即尝试使 `promise` 接受 `x` 的状态；否则其用 `x` 的值来执行 `promise` 。

这种 `thenable` 的特性使得 `Promise` 的实现更具有通用性：**只要其暴露出一个遵循 `Promise/A+` 协议的 `then` 方法即可；这同时也使遵循 `Promise/A+` 规范的实现可以与那些不太规范但可用的实现能良好共存。**

**运行 `[[Resolve]](promise, x)` 需遵循以下步骤：**

▪ **2.3.1 `x` 与 promise 相等**

如果 `promise` 和 `x` 指向同一对象，以 `TypeError` 为拒因拒绝执行 `promise`

▪ **2.3.2 `x` 为 Promise**

如果 `x` 为 Promise ，则使 `promise` 接受 `x` 的状态

- 2.3.2.1 如果 `x` 处于等待态， `promise` 需保持为等待态直至 `x` 被执行或拒绝
- 2.3.2.2 如果 `x` 处于执行态，用相同的值执行 `promise`
- 2.3.2.3 如果 `x` 处于拒绝态，用相同的拒因拒绝 `promise`

▪ **2.3.3 `x` 为对象或函数**

如果 x 为对象或者函数：

- 2.3.3.1 把 `x.then` 赋值给 `then`

- 2.3.3.2 如果取 `x.then` 的值时抛出错误 `e` ，则以 `e` 为据因拒绝 `promise`

- 2.3.3.3 如果 `then` 是函数，将 `x` 作为函数的作用域 `this` 调用之。传递两个回调函数作为参数，第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`:

- - 2.3.3.3.4.1 如果 `resolvePromise` 或 `rejectPromise` 已经被调用，则忽略之
  - 2.3.3.3.4.2 否则以 `e` 为拒因拒绝 `promise`
  - 2.3.3.3.1 如果 `resolvePromise` 以值 `y` 为参数被调用，则运行 `[[Resolve]](promise, y)`
  - 2.3.3.3.2 如果 `rejectPromise` 以拒因 `r` 为参数被调用，则以据因 `r` 拒绝 `promise`
  - 2.3.3.3.3 如果 `resolvePromise` 和 `rejectPromise` 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
  - 2.3.3.3.4 如果调用 `then` 方法抛出了异常 `e`：
  - 2.3.3.4 如果 `then` 不是函数，以 `x` 为参数执行 `promise`

**▪ 2.3.4 如果 `x` 不为对象或者函数，以 `x` 为参数执行 `promise`**

如果一个 `promise` 被一个循环的 `thenable` 链中的对象解决，而 `[[Resolve]](promise, thenable)` 的递归性质又使得其被再次调用，根据上述的算法将会陷入无限递归之中。算法虽不强制要求，但也鼓励施者检测这样的递归是否存在，若检测到存在则以一个可识别的 `TypeError` 为据因来拒绝 `promise`。

## 2. Promise/A+ 规范的总结

基于规范的描述，我们得到以下几点：

**◾ 1.** `then`方法本身会返回一个新的`Promise`对象，返回一个新的Promise以后它就有自己的`then`方法，这样就能实现无限的链式

**◾ 2.** 不论 `promise1` 被 `resolve()` 还是被 `reject()` 时 `promise2` 都会执行 **`Promise 解决过程：[[Resolve]](promise2, x)`**

在手写这里我们把这个 **`Promise 解决过程：[[Resolve]](promise2, x)`** 命名为 `resolvePromise()` 方法，参数为 `(promise2, x, resolve, reject)` 即：

```
function resolvePromise(promise2, x, resolve, reject) {}
```

`resolvePromise()`各参数的意义：

```javascript
/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {}
```

其实，这个`resolvePromise(promise2, x, resolve, reject)` 即 `Promise 解决过程：[[Resolve]](promise2, x)` 就是对`resolve()、reject()` 进行**改造增强**， 针对`resolve()`和`reject()`中不同值情况 进行处理。

`resolve()`和`reject()` 返回的 `x` 值的几种情况：

1. 普通值
2. Promise对象
3. thenable对象/函数



**下面我们就根据总结的两点，结合 `Promise/A+ 规范` 来实现 `then` 方法的链式调用** 💪💪💪

## 3. then 方法返回一个新的Promise

◾ **2.2.7规范 then 方法必须返回一个 promise 对象**

我们在`then`方法里面返回一个 `新的手写Promise实例`，再把原来的代码复制上去：

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
        
+       const promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
                    onFulfilled(this.PromiseResult);
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    onRejected(this.PromiseResult);
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
+       })
        
+       return promise2
    }
}
```

**◾ 2.2.7.1规范** 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行下面的 **Promise 解决过程：`[[Resolve]](promise2, x)`**

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : +reason => {
            throw reason;
        };

        const promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
+                   let x = onFulfilled(this.PromiseResult);
+                   resolvePromise(promise2, x, resolve, reject);
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
+                   let x = onRejected(this.PromiseResult);
+                   resolvePromise(promise2, x, resolve, reject);
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
        })

        return promise2
    }
}

+/**
+ * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
+ * @param  {promise} promise2 promise1.then方法返回的新的promise对象
+ * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
+ * @param  {[type]} resolve   promise2的resolve方法
+ * @param  {[type]} reject    promise2的reject方法
+ */
+ function resolvePromise(promise2, x, resolve, reject) {}
```

我们在 `myPromise` 类外面声明了一个 **Promise 解决过程**：

```javascript
function resolvePromise(promise2, x, resolve, reject) {

}
```

**`resolvePromise()` 具体方法我们后面会补充~**

**◾ 2.2.7.2 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`**

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        const promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
+                   try {
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
+                   } catch (e) {
+                       reject(e); // 捕获前面onFulfilled中抛出的异常
+                   }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
+                   try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
+                   } catch (e) {
+                       reject(e)
+                   }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
        })

        return promise2
    }
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {}
```

**◾ `fulfilled` 和 `rejected` 状态处理完，不要忘了 `pending` 状态的情况**

我们在 `pending` 状态保存的 `resolve()` 和 `reject()` 回调也要符合 `2.2.7.1 和 2.2.7.2 规范`：

> 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行 Promise 解决过程：`[[Resolve]](promise2, x)`

> 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        const promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e); // 捕获前面onFulfilled中抛出的异常
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
+               this.onFulfilledCallbacks.push(() => {
+                   setTimeout(() => {
+                       try {
+                           let x = onFulfilled(this.PromiseResult);
+                           resolvePromise(promise2, x, resolve, reject)
+                       } catch (e) {
+                           reject(e);
+                       }
+                   });
                });
                this.onRejectedCallbacks.push(() => {
+                   setTimeout(() => {
+                       try {
+                           let x = onRejected(this.PromiseResult);
+                           resolvePromise(promise2, x, resolve, reject);
+                       } catch (e) {
+                           reject(e);
+                       }
+                   });
                });
            }
        })

        return promise2
    }
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {}
```

搞定 `then` 方法 😎

下面我们开始着手写 **promise 解决过程 `resolvePromise(promise2, x, resolve, reject)`**

**六、实现 resolvePromise 方法**

------



**◾ 2.3.1 如果 `promise` 和 `x` 指向同一对象，以 `TypeError` 为拒因拒绝执行 `promise`**

```javascript
class myPromise {
	...
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
        onRejected = typeof onRejected === 'function' ? onRejected : () => {};

        const promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e); // 捕获前面onFulfilled中抛出的异常
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        })

        return promise2
    }
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
	// 如果从onFulfilled或onRejected中返回的 x 就是promise2，会导致循环引用报错
+   if (x === promise2) {
+       return reject(new TypeError('Chaining cycle detected for promise'));
+   }
}
```

例如下面这种情况👇

```javascript
const promise = new Promise((resolve, reject) => {
  resolve(100)
})
const p1 = promise.then(value => {
  console.log(value)
  return p1
})
```

使用原生 Promise 执行这个代码，会报类型错误：

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokAYzbNBlWib33G1j3KYjx99npv1FSgJGzvnDajP5vZDMt8ZicyAgry9iclcC8dP5MrOw5ZjlibQicvIFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
**◾ 2.3.2 如果 `x` 为 Promise ，则使 `promise` 接受 `x` 的状态**

```javascript
class myPromise {
	...
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    // 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
+   if (x instanceof myPromise) {
+       if (x.PromiseState === myPromise.PENDING) {
+           /**
+            * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
+            *         注意"直至 x 被执行或拒绝"这句话，
+            *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
+            */
+           x.then(y => {
+               resolvePromise(promise2, y, resolve, reject)
+           }, reject);
+       } else if (x.PromiseState === myPromise.FULFILLED) {
+           // 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
+           resolve(x.PromiseResult);
+       } else if (x.PromiseState === myPromise.REJECTED) {
+           // 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
+           reject(x.PromiseResult);
+       }
+   }
}
```

马上就要成功啦😸，还有最后一条😎

**◾ 2.3.3 如果 `x` 为对象或者函数**
**◾ 2.3.4 如果 `x` 不为对象或者函数，以 `x` 为参数执行 `promise`**

在判断`x`是对象或函数时，`x` 不能是 `null`，因为 `typeof null`的值也为 `object`
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokAYzbNBlWib33G1j3KYjx997k6XhicSc7IDbE1nXPdZnQ2BMqgkI5WRC7kKE2ldebxnH2Y9QiaAjW1A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
我们应该显式的声明 `x != null`，这样 当 `x` 为 `null` 时，直接执行`resolve(x)`，否则，如果不这样不声明，`x` 为 `null` 时就会走到`catch`然后`reject`，这不是我们要的，所以需要检测下`null`：

```
if (x != null && ((typeof x === 'object' || (typeof x === 'function'))))
```

**◾ 2.3.3 和 2.3.4 规范实现如下：**

```javascript
class myPromise {
	...
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    // 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
    if (x instanceof myPromise) {
        if (x.PromiseState === myPromise.PENDING) {
            /**
             * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
             *         注意"直至 x 被执行或拒绝"这句话，
             *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
             */
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject);
        } else if (x.PromiseState === myPromise.FULFILLED) {
            // 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
            resolve(x.PromiseResult);
        } else if (x.PromiseState === myPromise.REJECTED) {
            // 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
            reject(x.PromiseResult);
        }
+   } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
+       // 2.3.3 如果 x 为对象或函数
+       try {
+           // 2.3.3.1 把 x.then 赋值给 then
+           var then = x.then;
+       } catch (e) {
+           // 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
+           return reject(e);
+       }
+
+       /**
+        * 2.3.3.3 
+        * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
+        * 传递两个回调函数作为参数，
+        * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
+        */
+       if (typeof then === 'function') {
+           // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
+           let called = false; // 避免多次调用
+           try {
+               then.call(
+                   x,
+                   // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
+                   y => {
+                       if (called) return;
+                       called = true;
+                       resolvePromise(promise2, y, resolve, reject);
+                   },
+                   // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
+                   r => {
+                       if (called) return;
+                       called = true;
+                       reject(r);
+                   }
+               )
+           } catch (e) {
+               /**
+                * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
+                * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
+                */
+               if (called) return;
+               called = true;
+
+               /**
+                * 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
+                */
+               reject(e);
+           }
+       } else {
+           // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
+           resolve(x);
+       }
+   } else {
+       // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
+       return resolve(x);
+   }
}
```

**`resolvePromise()`方法 完整代码：**

```javascript
/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    // 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
    if (x instanceof myPromise) {
        if (x.PromiseState === myPromise.PENDING) {
            /**
             * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
             *         注意"直至 x 被执行或拒绝"这句话，
             *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
             */
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject);
        } else if (x.PromiseState === myPromise.FULFILLED) {
            // 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
            resolve(x.PromiseResult);
        } else if (x.PromiseState === myPromise.REJECTED) {
            // 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
            reject(x.PromiseResult);
        }
    } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
        // 2.3.3 如果 x 为对象或函数
        try {
            // 2.3.3.1 把 x.then 赋值给 then
            var then = x.then;
        } catch (e) {
            // 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(e);
        }

        /**
         * 2.3.3.3 
         * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
         * 传递两个回调函数作为参数，
         * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
         */
        if (typeof then === 'function') {
            // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            let called = false; // 避免多次调用
            try {
                then.call(
                    x,
                    // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (e) {
                /**
                 * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
                 * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
                 */
                if (called) return;
                called = true;

                /**
                 * 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
                 */
                reject(e);
            }
        } else {
            // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
        return resolve(x);
    }
}
```

**七、完整的 Promises/A+ 实现**

------



到这里我们的`myPromsie`已经完成了 **Promise/A+ 规范** 😸

> ES6的官方Promise还有很多API，但这些都不在Promise/A+里面

这里为大家提供了两个完整的 Promise/A+ 实现版本：

1. 清爽简洁 无注释版
2. 按步分析 注释加持版

如果这篇文章有帮到你

欢迎关注 **前端圆圆**

第一时间获得文章更新

**前端圆圆**

我是圆圆，输出前端优质文章，和大家一起成长🚀

2篇原创内容



公众号

## 1. 清爽简洁 无注释版

**完整的 Promise/A+ 实现 `(清爽简洁 无注释版)`：**

完整版的代码较长，这里如果看不清楚的可以去我的GitHub上看，我专门维护了一个 手写 Promsie 的仓库：https://github.com/yuanyuanbyte/Promise‍

```javascript
class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
            });
        }
    }
    
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
            });
        }
    }
    
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        let promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        })

        return promise2
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    if (x instanceof myPromise) {
        if (x.PromiseState === myPromise.PENDING) {
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject);
        } else if (x.PromiseState === myPromise.FULFILLED) {
            resolve(x.PromiseResult);
        } else if (x.PromiseState === myPromise.REJECTED) {
            reject(x.PromiseResult);
        }
    } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
        try {
            var then = x.then;
        } catch (e) {
            return reject(e);
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (e) {
                if (called) return;
                called = true;

                reject(e);
            }
        } else {
            resolve(x);
        }
    } else {
        return resolve(x);
    }
}
```

## 2. 按步分析 注释加持版

**完整的 Promise/A+ 实现 `(按步分析 注释加持版)`：**

完整版的代码较长，这里如果看不清楚的可以去我的GitHub上看，我专门维护了一个 手写 Promsie 的仓库：https://github.com/yuanyuanbyte/Promise‍

```javascript
class myPromise {
    // 为了统一用static创建静态属性，用来管理状态
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    // 构造函数：通过new命令生成对象实例时，自动调用类的构造函数
    constructor(func) { // 给类的构造方法constructor添加一个参数func
        this.PromiseState = myPromise.PENDING; // 指定Promise对象的状态属性 PromiseState，初始值为pending
        this.PromiseResult = null; // 指定Promise对象的结果 PromiseResult
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            /**
             * func()传入resolve和reject，
             * resolve()和reject()方法在外部调用，这里需要用bind修正一下this指向
             * new 对象实例时，自动执行func()
             */
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            // 生成实例时(执行resolve和reject)，如果报错，就把错误信息传入给reject()方法，并且直接执行reject()方法
            this.reject(error)
        }
    }

    resolve(result) { // result为成功态时接收的终值
        // 只能由pedning状态 => fulfilled状态 (避免调用多次resolve reject)
        if (this.PromiseState === myPromise.PENDING) {
            /**
             * 为什么resolve和reject要加setTimeout?
             * 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.
             * 注1 这里的平台代码指的是引擎、环境以及 promise 的实施代码。实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
             * 这个事件队列可以采用“宏任务（macro-task）”机制，比如setTimeout 或者 setImmediate；也可以采用“微任务（micro-task）”机制来实现， 比如 MutationObserver 或者process.nextTick。
             */
            setTimeout(() => {
                this.PromiseState = myPromise.FULFILLED;
                this.PromiseResult = result;
                /**
                 * 在执行resolve或者reject的时候，遍历自身的callbacks数组，
                 * 看看数组里面有没有then那边 保留 过来的 待执行函数，
                 * 然后逐个执行数组里面的函数，执行的时候会传入相应的参数
                 */
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(result)
                })
            });
        }
    }

    reject(reason) { // reason为拒绝态时接收的终值
        // 只能由pedning状态 => rejected状态 (避免调用多次resolve reject)
        if (this.PromiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.PromiseState = myPromise.REJECTED;
                this.PromiseResult = reason;
                this.onRejectedCallbacks.forEach(callback => {
                    callback(reason)
                })
            });
        }
    }

    /**
     * [注册fulfilled状态/rejected状态对应的回调函数] 
     * @param {function} onFulfilled  fulfilled状态时 执行的函数
     * @param {function} onRejected  rejected状态时 执行的函数 
     * @returns {function} newPromsie  返回一个新的promise对象
     */
    then(onFulfilled, onRejected) {
        /**
         * 参数校验：Promise规定then方法里面的两个参数如果不是函数的话就要被忽略
         * 所谓“忽略”并不是什么都不干，
         * 对于onFulfilled来说“忽略”就是将value原封不动的返回，
         * 对于onRejected来说就是返回reason，
         *     onRejected因为是错误分支，我们返回reason应该throw一个Error
         */
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        // 2.2.7规范 then 方法必须返回一个 promise 对象
        let promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                /**
                 * 为什么这里要加定时器setTimeout？
                 * 2.2.4规范 onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用 注1
                 * 这里的平台代码指的是引擎、环境以及 promise 的实施代码。
                 * 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
                 * 这个事件队列可以采用“宏任务（macro-task）”机制，比如setTimeout 或者 setImmediate；也可以采用“微任务（micro-task）”机制来实现， 比如 MutationObserver 或者process.nextTick。
                 */
                setTimeout(() => {
                    try {
                        // 2.2.7.1规范 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)，即运行resolvePromise()
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
   // 2.2.7.2 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
                        reject(e); // 捕获前面onFulfilled中抛出的异常
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
// pending 状态保存的 resolve() 和 reject() 回调也要符合 2.2.7.1 和 2.2.7.2 规范
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        })

        return promise2
    }
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
    // 2.3.1规范 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    // 2.3.2规范 如果 x 为 Promise ，则使 promise2 接受 x 的状态
    if (x instanceof myPromise) {
        if (x.PromiseState === myPromise.PENDING) {
            /**
             * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
             *         注意"直至 x 被执行或拒绝"这句话，
             *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
             */
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject);
        } else if (x.PromiseState === myPromise.FULFILLED) {
            // 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
            resolve(x.PromiseResult);
        } else if (x.PromiseState === myPromise.REJECTED) {
            // 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
            reject(x.PromiseResult);
        }
    } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
        // 2.3.3 如果 x 为对象或函数
        try {
            // 2.3.3.1 把 x.then 赋值给 then
            var then = x.then;
        } catch (e) {
            // 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(e);
        }

        /**
         * 2.3.3.3 
         * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
         * 传递两个回调函数作为参数，
         * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
         */
        if (typeof then === 'function') {
            // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            let called = false; // 避免多次调用
            try {
                then.call(
                    x,
                    // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (e) {
                /**
                 * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
                 * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
                 */
                if (called) return;
                called = true;

                /**
                 * 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
                 */
                reject(e);
            }
        } else {
            // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
        return resolve(x);
    }
}
```

**八、Promises/A+ 测试**

------



如何证明我们写的`myPromise`就符合 **Promises/A+** 规范呢？

跑一下 Promise A+ 测试 就好啦~

## 1. 安装官方测试工具

我们使用Promises/A+官方的测试工具 promises-aplus-tests 来对我们的`myPromise`进行测试

**安装** **`promises-aplus-tests`:**

```
npm install promises-aplus-tests -D
```

**安装完测试工具后的项目目录：**
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dono6jxac88ND6EYCdZuO1DAADcicACj7mdKldKzibZs73Pq8SPTQ81DZ7ZibU8okVRQxRVjjgzoAibic5Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 2. 使用 ES6 Module 对外暴露 myPromise 类

```javascript
class myPromise {
	...
}

function resolvePromise(promise2, x, resolve, reject) { 
	...
}

+ module.exports = myPromise;
```

## 3. 实现静态方法 deferred

要使用 `promises-aplus-tests` 这个工具测试，必须实现一个静态方法`deferred()`，官方对这个方法的定义如下:
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dono6jxac88ND6EYCdZuO1DAF6bPPFx5EJ7z0icTVAB60I767EkXBeaR1TjO8SqCTp47sLNp0WuaPeg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
意思就是：

我们要给自己手写的`myPromise`上实现一个静态方法`deferred()`，该方法要返回一个包含`{ promise, resolve, reject }`的对象：

- `promise` 是一个处于`pending`状态的 Promsie。
- `resolve(value)` 用`value`解决上面那个`promise`
- `reject(reason)` 用`reason`拒绝上面那个`promise`

**`deferred()`****的实现如下：**

```javascript
class myPromise {
	...
}

function resolvePromise(promise2, x, resolve, reject) { 
	...
}

+  myPromise.deferred = function () {
+      let result = {};
+      result.promise = new myPromise((resolve, reject) => {
+          result.resolve = resolve;
+          result.reject = reject;
+      });
+      return result;
+  }

module.exports = myPromise;
```

## 4. 配置 package.json

我们实现了`deferred`方法，也通过 ES6 Module 对外暴露了`myPromise`，最后配置一下`package.json`就可以跑测试啦~😺

新建一个 `package.json` ，**配置如下：**

```javascript
// package.json
{
  "devDependencies": {
    "promises-aplus-tests": "^2.1.2"
  },
  "scripts": {
    "test": "promises-aplus-tests myPromise"
  }
}
```

**项目目录：**
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dono6jxac88ND6EYCdZuO1DAPQ6SOKy1RwwXicQXaAFbQ8TdBsFDYYiakiaePQKIDYG0KFSQhKrPxqr6w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
准备工作已就绪👏👏👏

激动人心的时刻马上就要到啦，嘿嘿😸

## 5. 完美通过官方872个测试用例

**执行测试命令：**

```javascript
npm run test
```

肯定都等不及了吧~😜 快来看看我们的测试结果吧，走起 🚀

![图片](https://mmbiz.qpic.cn/mmbiz_gif/CuJDopk0dono6jxac88ND6EYCdZuO1DAF9efl3PvsYzC6ZEnbpUuhxNibVaheVVSSJ3GwEAQZGMKRYHe4cwnXkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)
Promises/A+ 官方测试总共872用例，我们手写的Promise完美通过了所有用例 🎉🎉🎉:
![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dono6jxac88ND6EYCdZuO1DAzAeX2C4DtAibd7esWt1pptQ7U4iaQv5Wuwn2fkgfBh9ZygAZ8SQS2pIQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**九、其他方法**

------



在 ES6 的官方 Promise 还有很多API，比如：

- Promise.resolve
- Promise.reject
- Promise.prototype.catch
- Promise.prototype.finally
- Promise.all
- Promise.allSettled
- Promise.any
- Promise.race

![图片](https://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dono6jxac88ND6EYCdZuO1DAwtcIa4dndDeTkoFLnibAlMgtpkiaq3M1xZcpdxpT4tqdf8FC9XGHOe3g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

虽然这些都不在 Promises/A+ 规范里面，但是我们也来实现一下吧，加深理解。其实我们前面我们用了很大功夫实现了 Promises/A+ ，现在再来实现这些已经是小菜一碟了，因为这些API全部是前面的封装而已。

1. 实现 Promise.resolve

2. 实现 Promise.reject

3. 实现 Promise.prototype.catch

4. 实现 Promise.prototype.finally

5. 实现 Promise.all

6. 实现 Promise.allSettled

7. 实现 Promise.any

8. 实现 Promise.race()

**因文章字数限制，Promise 其他方法的手写实现放在下篇**



💖**结尾**

------



如果这篇文章 **对你的学习** 有所 **帮助**，欢迎 **点赞** 👍 **转发** 🔁 **留言** 📝 ，**你的支持** 是我 **创作分享** 的 **动力！**

**关注公众号「前端圆圆」**，第一时间获取文章更新。

![img](http://mmbiz.qpic.cn/mmbiz_png/CuJDopk0dokznuVFFIcNiaHiaKicY7PEICErxUka6PLMQhRSk7t0MuFJ3B3439ZPVd2cVugxaSRxtnic6uJFwDuibZA/0?wx_fmt=png)

**前端圆圆**

我是圆圆，输出前端优质文章，和大家一起成长🚀

2篇原创内容



公众号

**更多更全更详细** 的 **优质内容**，欢迎访问我的博客：https://github.com/yuanyuanbyte/Blog

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/CuJDopk0dono6jxac88ND6EYCdZuO1DADUZgq4wfRt5uRNwurBt8bam8Us6CPzFw7dztlIEzK4SdsCJ1oowVgA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**声明**

------



本文 **“\**第四节：实现异步\**” 之前的内容** 都是学习自B站 up主 **技术蛋老师（已交流获认可免责）**：https://www.bilibili.com/video/BV1RR4y1p7my

没有 蛋老师 的视频，这篇文章可能要很晚才能跟大家见面~

**蛋老师 https://space.bilibili.com/327247876** 的视频质量都很高，节流和防抖我就是通过蛋老师的视频学习的，里面还有很多视频内容，通俗易懂，我自己都后悔没有早点接触蛋老师，少走多少弯路啊，欢迎大家支持关注蛋老师💝~

#  

**参考**

------



  链接放在最下面了

- Promises/A+ (promisesaplus.com)
- Promise A+ 规范 (malcolmyu.github.io)
- 手写Promise核心代码
- Promise详解与实现（Promise/A+规范）
- 手写一个Promise/A+,完美通过官方872个测试用例
- 剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类
- Promise.prototype.then() - JavaScript | MDN (mozilla.org)
- Promise.prototype.catch() - JavaScript | MDN (mozilla.org)
- 从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节

**参考文章链接**

- https://promisesaplus.com
- https://malcolmyu.github.io/2015/06/12/Promises-A-Plus
- https://www.bilibili.com/video/BV1RR4y1p7my?spm_id_from=333.999.0.0
- https://www.jianshu.com/p/459a856c476f
- https://www.cnblogs.com/dennisj/p/12660388.html
- https://github.com/xieranmaya/blog/issues/3
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
- https://juejin.cn/post/6945319439772434469#heading-19

# 下篇  手写Promise

我们在 上篇文章 用了很大功夫实现了 Promise 的核心方法，并且通过了 Promises/A+ 官方872个测试用例测试，接下来实现这些静态方法已经是小菜一碟了，因为这些 API 全部是对前面的封装而已。

上篇文章在这里：手把手一行一行代码教你 "手写 Promise"，完美通过 Promises/A+ 官方872个测试用例

官方 Promise 还有很多API ，除了 then 方法以外还有 两个实例方法：

Promise.prototype.catch

Promise.prototype.finally

◾ 以及目前 Promise 规范的 六个静态方法：

```javascript
Promise.resolve

Promise.reject

Promise.all

Promise.allSettled

Promise.any

Promise.race
```

图片

虽然这些都不在 Promise/A+ 规范里面，但是我们也来实现一下吧，加深理解。其实我们前面我们用了很大功夫实现了 Promise/A+ ，现在再来实现这些已经是小菜一碟了，因为这些API全部是前面的封装而已。

### 实现 Promise.resolve

Promise.resolve(value) 将给定的一个值转为Promise对象。

如果这个值是一个 promise ，那么将返回这个 promise ；

如果这个值是thenable（即带有<font color=red>"then"</font> 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；

否则返回的promise将以此值完成，即以此值执行<font color=red>resolve()</font>方法 (状态为fulfilled)。

根据规范我们这样实现（写法一）：

```javascript
class myPromise {
    ...
}

function resolvePromise(promise2, x, resolve, reject) {
    ...
}

/**

 * Promise.resolve()
 * @param {[type]} value 要解析为 Promise 对象的值 
   */

+ myPromise.resolve = function (value) {
+ // 如果这个值是一个 promise ，那么将返回这个 promise 
+ if (value instanceof myPromise) {
+ return value;
+ } else if (value instanceof Object && 'then' in value) {
+ // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
+ return new myPromise((resolve, reject) => {
+ value.then(resolve, reject);
+ })
+ }
+ 
+ // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
+ return new myPromise((resolve) => {
+ resolve(value)
+ })
+ }

module.exports = myPromise;
```


使用官方例子测试一下：

```javascript
const myPromise = require('./promiseOtherAPI');

const promise1 = myPromise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // expected output: 123
});

// Resolve一个thenable对象
var p1 = myPromise.resolve({
    then: function (onFulfill) {
        onFulfill("Resolving");
    }
});
console.log(p1 instanceof myPromise) // true, 这是一个Promise对象

setTimeout(() => {
    console.log('p1 :>> ', p1);
}, 1000);

p1.then(function (v) {
    console.log(v); // 输出"fulfilled!"
}, function (e) {
    // 不会被调用
});

// Thenable在callback之前抛出异常
// myPromise rejects
var thenable = {
    then: function (resolve) {
        throw new TypeError("Throwing");
        resolve("Resolving");
    }
};

var p2 = myPromise.resolve(thenable);
p2.then(function (v) {
    // 不会被调用
}, function (e) {
    console.log(e); // TypeError: Throwing
});
输出结果：

true
123
Resolving
TypeError: Throwing
p1 :>> myPromise {PromiseState: 'fulfilled', PromiseResult: 'Resolving', onFulfilledCallbacks: Array(1), onRejectedCallbacks: Array(1)}
```


图片

测试通过 ✌

静态方法改造

类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

写法二、使用静态方法 static：

```javascript
class myPromise {
	...
	

 * resolve(result) {
   	...
   }

   reject(reason) {
   	...
   }

   then(onFulfilled, onRejected) {
   	...
   }

   /**

    * Promise.resolve()
    * @param {[type]} value 要解析为 Promise 对象的值 
      */

   

+   static resolve(value) {
+   // 如果这个值是一个 promise ，那么将返回这个 promise 
+   if (value instanceof myPromise) {
+   return value;
+   } else if (value instanceof Object && 'then' in value) {
+   // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
+   return new myPromise((resolve, reject) => {
+   value.then(resolve, reject);
+   })
+   }
    +
+   // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
+   return new myPromise((resolve) => {
+   resolve(value)
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

module.exports = myPromise;
```


### 实现 Promise.reject

Promise.reject()方法返回一个带有拒绝原因的Promise对象。

官方例子：

```javascript
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.error(error); // Stacktrace
});
输出结果：

图片

根据规范我们这样实现（写法一）：

class myPromise {
	...
}

function resolvePromise(promise2, x, resolve, reject) {
	...
}

myPromise.resolve = function (value) {
	...
}

/**

 * myPromise.reject
 * @param {*} reason 表示Promise被拒绝的原因
 * @returns 
   */

+ myPromise.reject = function (reason) {
+ return new myPromise((resolve, reject) => {
+ reject(reason);
+ })
+ }

module.exports = myPromise;
```


使用官方用例测试一下：

```javascript
const myPromise = require('./promiseOtherAPI')

myPromise.reject(new Error('fail')).then(function () {
    // not called
}, function (error) {
    console.error(error); // Error: fail
});
```


输出结果：

Error: fail
图片

测试通过 ✌

写法二、使用静态方法 static：

```javascript
class myPromise {
	...
	

resolve(result) {
	...
}

reject(reason) {
	...
}

then(onFulfilled, onRejected) {
	...
}

/**

 * Promise.resolve()

 * @param {[type]} value 要解析为 Promise 对象的值 
   */
   static resolve(value) {
   // 如果这个值是一个 promise ，那么将返回这个 promise 
   if (value instanceof myPromise) {
       return value;
   } else if (value instanceof Object && 'then' in value) {
       // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
       return new myPromise((resolve, reject) => {
           value.then(resolve, reject);
       })
   }

   // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
   return new myPromise((resolve) => {
       resolve(value)
   })
   }

/**

 * myPromise.reject
 * @param {*} reason 表示Promise被拒绝的原因
 * @returns 
   */

+   static reject(reason) {
+   return new myPromise((resolve, reject) => {
+   reject(reason);
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

module.exports = myPromise;
```


### 实现 Promise.prototype.catch

catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。

事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)。(这句话的意思是，我们显式使用obj.catch(onRejected)，内部实际调用的是obj.then(undefined, onRejected))

Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

因此我们可以这样来实现：

```javascript
class myPromise {
	...
	

then(onFulfilled, onRejected) {
	...
}

+   catch (onRejected) {
+   return this.then(undefined, onRejected)
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

module.exports = myPromise;
```


就一行代码，我的天，居然这么简单😱

我们用官方例子来测试一下吧

```javascript
const myPromise = require('./promiseOtherAPI')

var p1 = new myPromise(function (resolve, reject) {
    resolve('Success');
});

p1.then(function (value) {
    console.log(value); // "Success!"
    throw 'oh, no!';
}).catch(function (e) {
    console.log(e); // "oh, no!"
}).then(function () {
    console.log('after a catch the chain is restored');
}, function () {
    console.log('Not fired due to the catch');
});

// 以下行为与上述相同
p1.then(function (value) {
    console.log(value); // "Success!"
    return Promise.reject('oh, no!');
}).catch(function (e) {
    console.log(e); // "oh, no!"
}).then(function () {
    console.log('after a catch the chain is restored');
}, function () {
    console.log('Not fired due to the catch');
});

// 捕获异常
const p2 = new myPromise(function (resolve, reject) {
    throw new Error('test');
});
p2.catch(function (error) {
    console.log(error);
});
// Error: test
```


输出：

Success
Success
Error: test
oh, no!
oh, no!
after a catch the chain is restored
after a catch the chain is restored
测试通过，没毛病😏

### 实现 Promise.prototype.finally

finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。

这避免了同样的语句需要在then()和catch()中各写一次的情况。该方法是 ES2018 引入标准的。

由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。

根据规范我们这样实现：

```javascript
class myPromise {
	...
    catch (onRejected) {
        return this.then(undefined, onRejected)
    }

/**

 * finally
 * @param {*} callBack 无论结果是fulfilled或者是rejected，都会执行的回调函数
 * @returns 
   */

+   finally(callBack) {
+   return this.then(callBack, callBack)
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

myPromise.resolve = function (value) {
	...
}

myPromise.reject = function (reason) {
	...
}

module.exports = myPromise;
```


对，就这么简单 ✌

测试一下：

```javascript
const myPromise = require('./promiseOtherAPI')

let p1 = new Promise(function (resolve, reject) {
    resolve(1)
}).then(function (value) {
    console.log(value);
}).catch(function (e) {
    console.log(e);
}).finally(function () {
    console.log('finally');
});
```


输出结果：

1
finally
测试通过 👏👏👏

### 实现 Promise.all

Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个Promise实例， 输入的所有promise的resolve回调的结果是一个数组。

返回的这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。

Promise.all 等待所有都完成（或第一个失败）

如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise

如果参数中包含非 promise 值，这些值将被忽略，但仍然会被放在返回数组中，如果 promise 完成的话 (也就是如果参数里的某值不是Promise，则需要原样返回在数组里)

在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 promise 值）。

如果传入的 promise 中有一个失败（rejected），Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成

根据规范我们这样实现：

```javascript
class myPromise {
	...

resolve(result) {
	...
}
reject(reason) {
	...
}
then(onFulfilled, onRejected) {
	...
}
static resolve(value) {
	...
}
static reject(reason) {
	...
}
catch (onRejected) {
	...
}
finally(callBack) {
	...
}

/**

 * Promise.all
 * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
 * @returns 
   */

+   static all(promises) {
+   return new myPromise((resolve, reject) => {
+   // 参数校验
+   if (Array.isArray(promises)) {
+   let result = []; // 存储结果
+   let count = 0; // 计数器
    +
+   // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
+   if (promises.length === 0) {
+   return resolve(promises);
+   }
    +
+   promises.forEach((item, index) => {
+   //  判断参数是否为promise
+   if (item instanceof myPromise) {
+   myPromise.resolve(item).then(
+   value => {
+   count++;
+   // 每个promise执行的结果存储在result中
+   result[index] = value;
+   // Promise.all 等待所有都完成（或第一个失败）
+   count === promises.length && resolve(result);
+   },
+   reason => {
+   /**
+   * 如果传入的 promise 中有一个失败（rejected），
+   * Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
+   */
+   reject(reason);
+   }
+   )
+   } else {
+   // 参数里中非Promise值，原样返回在数组里
+   count++;
+   result[index] = item;
+   count === promises.length && resolve(result);
+   }
+   })
+   } else {
+   return reject(new TypeError('Argument is not iterable'))
+   }
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

module.exports = myPromise;
```


使用官方例子测试一下：

```javascript
const myPromise = require('../promiseOtherAPI');

const promise1 = myPromise.resolve(3);
const promise2 = 42;
const promise3 = new myPromise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

myPromise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// expected output: Array [3, 42, "foo"]
```


输出结果：

(3) [3, 42, 'foo']
图片

测试通过 👏👏👏

测试 Promise.all 的快速返回失败行为

Promise.all 在任意一个传入的 promise 失败时返回失败。例如，如果你传入的 promise中，有四个 promise 在一定的时间之后调用成功函数，有一个立即调用失败函数，那么 Promise.all 将立即变为失败。

```javascript
const myPromise = require('../promiseOtherAPI');

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
    reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
}, reason => {
    console.log(reason)
});

//From console:
//"reject"
```


输出结果：

图片

测试通过 👏👏👏

### 实现 Promise.allSettled

`Promise.allSettled(iterable)`方法返回一个在所有给定的`promise`都已经`fulfilled`或`rejected`后的`promise`，并带有一个对象数组，每个对象表示对应的`promise`结果。

当你有多个彼此不依赖的异步任务成功完成时，或者你总是想知道每个`promise`的结果时，通常使用它。

相比之下，`Promise.all()` 更适合彼此相互依赖或者在其中任何一个`reject`时立即结束。

参数 `iterable` 是一个可迭代的对象，例如`Array`，其中每个成员都是`Promise`。

对于每个结果对象，都有一个 `status` 字符串。如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。如果值为 `rejected`，则存在一个 `reason` 。`value`（或 `reason` ）反映了每个 `promise` 决议（或拒绝）的值。

在实现前我们需要验证一点，输入的非promise值应该怎么处理？

为此我们在 `Promise.allSettled(iterable)` 的参数 `iterable` 中传入一个非`promise`值，看一下 `Promise.allSettled()` 方法内部会怎么处理：

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 1;
const promises = [promise1, promise2];

Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result)));
```


输出结果：

{status: 'fulfilled', value: 3}
{status: 'fulfilled', value: 1}
图片

我们发现 `Promise.allSettled()` 方法内部将非 `Promise` 值转换成 `Promise` 了

那下面我们就将非 `Promise` 值通过 `Promise.resolve` 转换为 `Promise` 进行统一处理

根据规范我们这样实现：

```javascript
class myPromise {
    ...

resolve(result) {
    ...
}

reject(reason) {
    ...
}

then(onFulfilled, onRejected) {
    ...
}

static resolve(value) {
    ...
}

static reject(reason) {
    ...
}

catch (onRejected) {
    ...
}

finally(callBack) {
    ...
}

static all(promises) {
    ...
}

/**

 * Promise.allSettled 
 * @param {*} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
 * @returns 
   */

+   static allSettled(promises) {
+   return new myPromise((resolve, reject) => {
+   // 参数校验
+   if (Array.isArray(promises)) {
+   let result = []; // 存储结果
+   let count = 0; // 计数器
    +
+   // 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
+   if (promises.length === 0) return resolve(promises);
    +
+   promises.forEach((item, index) => {
+   // 非promise值，通过Promise.resolve转换为promise进行统一处理
+   myPromise.resolve(item).then(
+   value => {
+   count++;
+   // 对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。
+   result[index] = {
+   status: 'fulfilled',
+   value
+   }
+   // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
+   count === promises.length && resolve(result);
+   },
+   reason => {
+   count++;
+   /**
+   * 对于每个结果对象，都有一个 status 字符串。如果值为 rejected，则存在一个 reason 。
+   * value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
+   */
+   result[index] = {
+   status: 'rejected',
+   reason
+   }
+   // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
+   count === promises.length && resolve(result);
+   }
+   )
+   })
+   } else {
+   return reject(new TypeError('Argument is not iterable'))
+   }
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
    ...
}

module.exports = myPromise;
```


使用官方例子测试一下：

```javascript
const myPromise = require('../promiseOtherAPI');

const promise1 = myPromise.resolve(3);
const promise2 = 1;
const promises = [promise1, promise2];

myPromise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result)));

setTimeout(() => {
    const p1 = myPromise.resolve(3);
    const p2 = new myPromise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const ps = [p1, p2];

myPromise.allSettled(ps).
then((results) => results.forEach((result) => console.log(result)));

}, 1000);

myPromise.allSettled([]).then((results) => console.log(results))
```


输出结果：

(0) []
{status: 'fulfilled', value: 3}
{status: 'fulfilled', value: 1}
{status: 'fulfilled', value: 3}
{status: 'rejected', reason: 'foo'}
图片

测试通过 perfect ✌✌✌

### 实现 Promise.any

本质上，这个方法和Promise.all()是相反的。

Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。

如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。

如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。

如果传入的参数不包含任何 promise，则返回一个 异步完成 （asynchronously resolved）的 Promise。(即将非Promise值，转换为Promise并当做成功)

只要传入的迭代对象中的任何一个 promise 变成成功（resolve）状态，或者其中的所有的 promises 都失败，那么返回的 promise 就会 异步地（当调用栈为空时） 变成成功/失败（resolved/reject）状态。(如果所有Promise都失败，则报错)

注意！Promise.any() 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 TC39 第四阶段草案（Stage 4）

图片

在 node v14.15.4 版本下测试 Promise.any() 发现还没有被支持：

Uncaught TypeError: Promise.any is not a function

图片

图片

既然是处于草案阶段的实验性 API ，如果想要在各版本浏览器中兼容性使用，那实现 Promise.any() 就很有必要 💪

根据规范我们这样实现：

```javascript
class myPromise {
    ...

resolve(result) {
    ...
}

reject(reason) {
    ...
}

then(onFulfilled, onRejected) {
    ...
}

static resolve(value) {
    ...
}

static reject(reason) {
    ...
}

catch (onRejected) {
    ...
}

finally(callBack) {
    ...
}

static all(promises) {
    ...
}

static allSettled(promises) {
    ...
}

/**

 * Promise.any()
 * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
 * @returns 
   */

+   static any(promises) {
+   return new myPromise((resolve, reject) => {
+   // 参数校验
+   if (Array.isArray(promises)) {
+   let errors = []; // 
+   let count = 0; // 计数器
    +
+   // 如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
+   if (promises.length === 0) return reject(new AggregateError('All promises were rejected'));
    +
+   promises.forEach(item => {
+   // 非Promise值，通过Promise.resolve转换为Promise
+   myPromise.resolve(item).then(
+   value => {
+   // 只要其中的一个 promise 成功，就返回那个已经成功的 promise 
+   resolve(value);
+   },
+   reason => {
+   cout++;
+   errors.push(reason);
+   /**
+   * 如果可迭代对象中没有一个 promise 成功，就返回一个失败的 promise 和AggregateError类型的实例，
+   * AggregateError是 Error 的一个子类，用于把单一的错误集合在一起。
+   */
+   cout === promises.length && reject(new AggregateError(errors));
+   }
+   )
+   })
+   } else {
+   return reject(new TypeError('Argument is not iterable'))
+   }
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
    ...
}

module.exports = myPromise;
```


使用官方例子测试一下：

图片

发现报错了，提示 AggregateErro 没有定义，这里不是我们代码的问题，是因为这个 AggregateErro ，node v14.15.4 版本没有支持，按理说这个版本已经很高了，为什么还没有支持呢？

和 Promise.any() 一样，这个 AggregateError 也是一个实验中的功能，处于Stage 3 Draft (第三阶段草案)：

图片

我们通过升级 node 版本来兼容这些处于草案阶段的实验功能~

从 node v14.15.4 升级到最新的 node v16.13.0

图片

再次验证即可通过：

图片

用其他用例测试一下该方法：

```javascript
const myPromise = require('../myPromiseFully');

/**

 * 验证Promise.any()方法
   */

// console.log(new AggregateError('All promises were rejected'));

myPromise.any([]).catch(e => {
    console.log(e);
});

const pErr = new Promise((resolve, reject) => {
    reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // 期望输出: "很快完成"
})


const pErr1 = new myPromise((resolve, reject) => {
    reject("总是失败");
});

const pErr2 = new myPromise((resolve, reject) => {
    reject("总是失败");
});

const pErr3 = new myPromise((resolve, reject) => {
    reject("总是失败");
});

myPromise.any([pErr1, pErr2, pErr3]).catch(e => {
    console.log(e);
})
```

输出结果:

AggregateError: All promises were rejected
AggregateError: All promises were rejected
很快完成
测试通过 😊

### 实现 Promise.race()

`Promise.race(iterable)` 方法返回一个 `promise`，一旦迭代器中的某个`promise`解决或拒绝，返回的 `promise`就会解决或拒绝。

一个待定的 `Promise` 只要给定的迭代中的一个`promise`解决或拒绝，就采用第一个`promise`的值作为它的返回值，从而异步地解析或拒绝（一旦堆栈为空）。

`race` 函数返回一个 `Promise`，它将与第一个传递的 `promise` 相同的完成方式被完成。它可以是完成（ `resolves`），也可以是失败（`rejects`），这要取决于第一个完成的方式是两个中的哪个。

如果传的迭代是空的，则返回的 `promise` 将永远等待。

如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 `Promise.race` 将解析为迭代中找到的第一个值。

根据规范我们这样实现：

```javascript
class myPromise {
	...

static resolve(value) {
	...
}

static reject(reason) {
	...
}

catch (onRejected) {
	...
}

finally(callBack) {
	...
}

static all(promises) {
	...
}

static allSettled(promises) {
	...
}

static any(promises) {
	...
}

/**

 * Promise.race()
 * @param {iterable} promises 可迭代对象，类似Array。详见 iterable。
 * @returns 
   */

+   static race(promises) {
+   return new myPromise((resolve, reject) => {
+   // 参数校验
+   if (Array.isArray(promises)) {
+   // 如果传入的迭代promises是空的，则返回的 promise 将永远等待。
+   if (promises.length > 0) {
+   promises.forEach(item => {
+   /**
+   * 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，
+   * 则 Promise.race 将解析为迭代中找到的第一个值。
+   */
+   myPromise.resolve(item).then(resolve, reject);
+   })
+   }
+   } else {
+   return reject(new TypeError('Argument is not iterable'))
+   }
+   })
+   }
    }

function resolvePromise(promise2, x, resolve, reject) {
	...
}

module.exports = myPromise;
```


最后测试一下代码：

```javascript
const myPromise = require('../myPromiseFully');

/**

 * 验证Promise.race()方法
   */

// 数组全是非Promise值，测试通过
let p1 = myPromise.race([1, 3, 4]);
setTimeout(() => {
    console.log('p1 :>> ', p1);
});

// 空数组，测试通过
let p2 = myPromise.race([]);
setTimeout(() => {
    console.log('p2 :>> ', p2);
});

const p11 = new myPromise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const p22 = new myPromise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

// // 数组里有非Promise值，测试通过
myPromise.race([p11, p22, 10]).then((value) => {
    console.log('p3 :>> ', value);
    // Both resolve, but p22 is faster
});
// expected output: 10

// 数组里有'已解决的Promise' 和 非Promise值 测试通过
let p12 = myPromise.resolve('已解决的Promise')
setTimeout(() => {
    myPromise.race([p12, p22, 10]).then((value) => {
        console.log('p4 :>> ', value);
    });
    // expected output:已解决的Promise
});

// Promise.race的一般情况 测试通过
const p13 = new myPromise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const p14 = new myPromise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

myPromise.race([p13, p14]).then((value) => {
    console.log('p5 :>> ', value);
    // Both resolve, but promise2 is faster
});
// expected output: "two"
```


输出结果为：

p1 :>>  myPromise {PromiseState: 'pending', PromiseResult: null, onFulfilledCallbacks: Array(0), onRejectedCallbacks: Array(0)}
p2 :>>  myPromise {PromiseState: 'pending', PromiseResult: null, onFulfilledCallbacks: Array(0), onRejectedCallbacks: Array(0)}
p3 :>>  10
p4 :>>  已解决的Promise
p5 :>>  two
测试通过 🎉🎉🎉

完整代码
手写 Promise 全部方法的完整版代码较长，这里如果看不清楚的可以去我的GitHub上看:

手写 Promise 核心原理，完整的 Promise/A+ 实现，通过了 Promise/A+ 官方872个测试用例测试，根据规范实现了 ES6+ 的全部 API，包括处于 TC39 第四阶段草案的 Promise.any()  https://github.com/yuanyuanbyte/Promise



```javascript
/**

 * 在 myPromise.js 基础上，根据规范实现了 Promise 的全部方法：

 * - Promise.resolve()

 * - Promise.reject()

 * - Promise.prototype.catch()

 * - Promise.prototype.finally()

 * - Promise.all()

 * - Promise.allSettled()

 * - Promise.any()

 * - Promise.race()
     */
     class myPromise {
     static PENDING = 'pending';
     static FULFILLED = 'fulfilled';
     static REJECTED = 'rejected';

     constructor(func) {
         this.PromiseState = myPromise.PENDING;
         this.PromiseResult = null;
         this.onFulfilledCallbacks = [];
         this.onRejectedCallbacks = [];
         try {
             func(this.resolve.bind(this), this.reject.bind(this));
         } catch (error) {
             this.reject(error)
         }
     }

     resolve(result) {
         if (this.PromiseState === myPromise.PENDING) {
             setTimeout(() => {
                 this.PromiseState = myPromise.FULFILLED;
                 this.PromiseResult = result;
                 this.onFulfilledCallbacks.forEach(callback => {
                     callback(result)
                 })
             });
         }
     }

     reject(reason) {
         if (this.PromiseState === myPromise.PENDING) {
             setTimeout(() => {
                 this.PromiseState = myPromise.REJECTED;
                 this.PromiseResult = reason;
                 this.onRejectedCallbacks.forEach(callback => {
                     callback(reason)
                 })
             });
         }
     }

     /**

      * [注册fulfilled状态/rejected状态对应的回调函数] 

      * @param {function} onFulfilled  fulfilled状态时 执行的函数

      * @param {function} onRejected  rejected状态时 执行的函数 

      * @returns {function} newPromsie  返回一个新的promise对象
        */
        then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        let promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.PromiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        })

        return promise2
        }

     /**

      * Promise.resolve()

      * @param {[type]} value 要解析为 Promise 对象的值 
        */
        static resolve(value) {
        // 如果这个值是一个 promise ，那么将返回这个 promise 
        if (value instanceof myPromise) {
            return value;
        } else if (value instanceof Object && 'then' in value) {
            // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
            return new myPromise((resolve, reject) => {
                value.then(resolve, reject);
            })
        }

        // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
        return new myPromise((resolve) => {
            resolve(value)
        })
        }

     /**

      * Promise.reject()
      * @param {*} reason 表示Promise被拒绝的原因
      * @returns 
        */
        static reject(reason) {
        return new myPromise((resolve, reject) => {
            reject(reason);
        })
        }

     /**

      * Promise.prototype.catch()
      * @param {*} onRejected 
      * @returns 
        */
        catch (onRejected) {
        return this.then(undefined, onRejected)
        }

     /**

      * Promise.prototype.finally()
      * @param {*} callBack 无论结果是fulfilled或者是rejected，都会执行的回调函数
      * @returns 
        */
        finally(callBack) {
        return this.then(callBack, callBack)
        }

     /**

      * Promise.all()

      * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入

      * @returns 
        */
        static all(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                let result = []; // 存储结果
                let count = 0; // 计数器

        ​    // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
        ​    if (promises.length === 0) {
        ​        return resolve(promises);
        ​    }

        ​    promises.forEach((item, index) => {
        ​        //  判断参数是否为promise
        ​        if (item instanceof myPromise) {
        ​            myPromise.resolve(item).then(
        ​                value => {
        ​                    count++;
        ​                    // 每个promise执行的结果存储在result中
        ​                    result[index] = value;
        ​                    // Promise.all 等待所有都完成（或第一个失败）
        ​                    count === promises.length && resolve(result);
        ​                },
        ​                reason => {
        ​                    /**

           * 如果传入的 promise 中有一个失败（rejected），
             将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
                                  */
                                 reject(reason);
                             }
                         )
                     } else {
                         // 参数里中非Promise值，原样返回在数组里
                         count++;
                         result[index] = item;
                         count === promises.length && resolve(result);
                     }
                 })
             } else {
                 return reject(new TypeError('Argument is not iterable'))
             }

        })
        }

     /**

      * Promise.allSettled()

      * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入

      * @returns 
        */
        static allSettled(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                let result = []; // 存储结果
                let count = 0; // 计数器

        ​    // 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
        ​    if (promises.length === 0) return resolve(promises);

        ​    promises.forEach((item, index) => {
        ​        // 非promise值，通过Promise.resolve转换为promise进行统一处理
        ​        myPromise.resolve(item).then(
        ​            value => {
        ​                count++;
        ​                // 对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。
        ​                result[index] = {
        ​                    status: 'fulfilled',
        ​                    value
        ​                }
        ​                // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
        ​                count === promises.length && resolve(result);
        ​            },
        ​            reason => {
        ​                count++;
        ​                /**

           * 对于每个结果对象，都有一个 status 字符串。如果值为 rejected，则存在一个 reason 。
             son ）反映了每个 promise 决议（或拒绝）的值。
                              */
                             result[index] = {
             status: 'rejected',
             reason
                             }
                             // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
                             count === promises.length && resolve(result);
                         }
                     )
                 })
             } else {
                 return reject(new TypeError('Argument is not iterable'))
             }

        })
        }

     /**

      * Promise.any()

      * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入

      * @returns 
        */
        static any(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                let errors = []; // 
                let count = 0; // 计数器

        ​    // 如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
        ​    if (promises.length === 0) return reject(new AggregateError([], 'All promises were rejected'));

        ​    promises.forEach(item => {
        ​        // 非Promise值，通过Promise.resolve转换为Promise
        ​        myPromise.resolve(item).then(
        ​            value => {
        ​                // 只要其中的一个 promise 成功，就返回那个已经成功的 promise 
        ​                resolve(value);
        ​            },
        ​            reason => {
        ​                count++;
        ​                errors.push(reason);
        ​                /**

           * 如果可迭代对象中没有一个 promise 成功，就返回一个失败的 promise 和AggregateError类型的实例，
             ror是 Error 的一个子类，用于把单一的错误集合在一起。
                              */
                             count === promises.length && reject(new AggregateError(errors, 'All promises were rejected'));
                         }
                     )
                 })
             } else {
                 return reject(new TypeError('Argument is not iterable'))
             }

        })
        }

     /**

      * Promise.race()
      * @param {iterable} promises 可迭代对象，类似Array。详见 iterable。
      * @returns 
        */
        static race(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                // 如果传入的迭代promises是空的，则返回的 promise 将永远等待。
                if (promises.length > 0) {
                    promises.forEach(item => {
                        /**
                         * 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，
                         * 则 Promise.race 将解析为迭代中找到的第一个值。
                         */
                        myPromise.resolve(item).then(resolve, reject);
                    })
                }
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
        }
        }

/**

 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理

 * @param  {promise} promise2 promise1.then方法返回的新的promise对象

 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值

 * @param  {[type]} resolve   promise2的resolve方法

 * @param  {[type]} reject    promise2的reject方法
   */
   function resolvePromise(promise2, x, resolve, reject) {
   if (x === promise2) {
       return reject(new TypeError('Chaining cycle detected for promise'));
   }

   if (x instanceof myPromise) {
       if (x.PromiseState === myPromise.PENDING) {
           x.then(y => {
               resolvePromise(promise2, y, resolve, reject)
           }, reject);
       } else if (x.PromiseState === myPromise.FULFILLED) {
           resolve(x.PromiseResult);
       } else if (x.PromiseState === myPromise.REJECTED) {
           reject(x.PromiseResult);
       }
   } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
       try {
           var then = x.then;
       } catch (e) {
           return reject(e);
       }

   if (typeof then === 'function') {
       let called = false;
       try {
           then.call(
               x,
               y => {
                   if (called) return;
                   called = true;
                   resolvePromise(promise2, y, resolve, reject);
               },
               r => {
                   if (called) return;
                   called = true;
                   reject(r);
               }
           )
       } catch (e) {
           if (called) return;
           called = true;

   ​        reject(e);
   ​    }
   } else {
   ​    resolve(x);
   }

   } else {
       return resolve(x);
   }
   }

myPromise.deferred = function () {
    let result = {};
    result.promise = new myPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
}

module.exports = myPromise;
```

