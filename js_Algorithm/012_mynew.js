// - 一个继承自 `Foo.prototype` 的新对象被创建。
// - 使用指定的参数调用构造函数 `Foo`，并将 this 绑定到新创建的对象。`new Foo` 等同于 `new Foo()`，也就是没有指定参数列表，`Foo` 不带任何参数调用的情况。
// - 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
// - 一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤

function Ctor(){
    console.log('这是Ctor函数!');
}

function myNew(ctor,...args){
    if(typeof ctor !== 'function'){
      throw 'myNew function the first param must be a function';
    }
    var newObj = Object.create(ctor.prototype); //1 创建一个继承自ctor.prototype的新对象
    var ctorReturnResult = ctor.apply(newObj, args); // 2 将构造函数ctor的this绑定到newObj中
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    return newObj; //3 返回这个对象
}

let c = myNew(Ctor);