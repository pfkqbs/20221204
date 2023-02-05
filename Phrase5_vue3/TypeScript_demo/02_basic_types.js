var isDone = false;
// 接下来来到 number，注意 es6 还支持2进制和8进制，让我们来感受下
var age = 10;
var binaryNumber = 15;
// 之后是字符串，注意es6新增的模版字符串也是没有问题的
var firstName = 'viking';
var message = "Hello, ".concat(firstName, ", age is ").concat(age);
// 还有就是两个奇葩兄弟两，undefined 和 null
var u = undefined;
var n = null;
// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = undefined;
