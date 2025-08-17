let arr=[1,2,3,4,1,2];
function unique(arr){
    arr=arr.sort();
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(arr));


