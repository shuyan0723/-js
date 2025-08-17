let arr=[1,2,3,4,1,2]
console.log(new Set(arr)); //{1, 2, 3, 4} new set()返回的是对象
console.log(Array.from( new Set(arr))); //[1, 2, 3, 4]
console.log([...new Set(arr)]); //[1, 2, 3, 4]
//面试的时候可能会让你封装成一个函数
function unique(arr){
    return [...new Set(arr)]
}
console.log(unique(arr));//[1, 2, 3, 4]


