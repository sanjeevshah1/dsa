//Checking for if the array is sorted ascendingly or not.


//Using linear search.
const isSorted = (arr : number[]) : Boolean =>{
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(isSorted([1,2,5,4]))

//Using Recursion
const isSortedRecursive = (arr : number[]) : Boolean => {
    if(arr.length <= 1) return true;
    if(arr[0] > arr[1]) return false;
    // return isSortedRecursive(arr.splice(1));
    // or
    return isSortedRecursive(arr.slice(1));
}
console.log(isSortedRecursive([1,1,2,3,4,8]))