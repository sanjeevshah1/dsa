const target = process.argv[2]
const binarySearch = (arr: number[], target: number) : number => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] === target) return mid;
        if(arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], Number(target)))

// Now using recursion

const recursiveBinarySearch = (arr: number[], target: number,left:number, right: number) : number => {
    if(left > right) return -1;
    const mid = left + Math.floor((right - left) / 2);
    if(arr[mid] == target) return mid;
    if(arr[mid] > target) return recursiveBinarySearch(arr, target, left, mid - 1);
    else return recursiveBinarySearch(arr, target, left + 1, right);
}

console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10], Number(target), 0 ,9))