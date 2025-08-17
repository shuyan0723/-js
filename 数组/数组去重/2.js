let arr=[1,2,3,4,1,2];
function unique(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])==-1){
            newArr.push(arr[i]);
            // 如果当前元素不存在于 newArr 中，
            // 则使用 push 方法将其添加到 newArr 的末尾
        }
    }
    return newArr;
}
console.log(unique(arr));//[1, 2, 3, 4]



