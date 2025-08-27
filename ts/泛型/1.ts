// // 泛型
// function identify(arg:number):number{
//     return arg;
// } // arg 是number类型，返回值也只能是number类型
// // 如果想使用别的数据类型就不行了 
// // 怎么办？我们可以使用any这个函数去改造它

// function identify(arg:any):any{
//     return arg;
// }
// //但是函数返回却失去了这个函数的信息
// //我们传入的是number，返回的确是string，改变了我们定义
// // 这个类型的初衷

// // 我们需要一种方法来捕获这个参数的类型，
// // 以便我们可以用它来表示返回的内容
// // 我们用一个类型变量，对类型起作用，而不是对数值起作用

// function identify<T>(arg:T):T{
//     return arg;
// }
// // 类型的输入从函数一侧输入，从函数的另一侧输出

// let output =identify<string>('myString');
// // 根据我们传入的类型，自动为我们设置这个开发的值得类型
// let output =identify('myString');
// // 编译器将type设置为这个类型

// function loggingIdentity<Type>(arg:Type):Type{
//     console.log(arg.length);
//     //如果是array没有问题，number就不可以
//     return arg;
// }

// function loggingIdentity<Type>(arg:Array<Type>):Type[]{
//     console.log(arg.length);
//     // 会报错
//     // 类型Type 上不存在属性length
//     return arg;
// }
// loggingIdentity([1,2,3]);
