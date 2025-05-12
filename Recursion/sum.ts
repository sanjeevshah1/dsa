const sumArray = (arr : number[]) : number => {
    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr[0];
    // return arr[0] + sumArray(arr.splice(1));
    //or
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1,2,3,4,5, 0, -5]))