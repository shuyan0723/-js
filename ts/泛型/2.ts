 // 泛型类型
 // 定义泛型接口
// interface GenericIdentityFn(){
//     <Type>(arg:Type):Type;
// }
function identity<Type>(arg:Type):Type{
    return arg;
}

let my=identity