// function identity(arg: number): number {
//   return arg;
// }

// function identity(arg:any):any{
//     return arg
// }

function identity<Type>(arg:Type):Type{
    return arg;
}
// let output=identity<string>('myString');
// let output=identity('myString')

// function loggingIdentity<Type>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }

// function loggingIdentity<Type>(arg: Array<Type>): Type[] {
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity([100, 200, 300]);

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let myIdentity:<Type>(arg:Type)=>Type = identity;
// let myIdentity: <Input>(arg: Input) => Input = identity;
// let myIdentity:{<Type>(arg:Type):Type}=identity

// interface GenericIdentityFn{
//   <Type>(arg:Type):Type
// }
//  let myIdentity:GenericIdentityFn=identity

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
let myIdentity: GenericIdentityFn<string> = identity;
