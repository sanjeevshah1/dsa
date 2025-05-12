const searchTarget = process.argv[2];
const linearSearch = (arr : number[], target : number) : Boolean =>{
    if(arr[0] === target) return true;
    if(arr.length === 1 && arr[0] !== target) return false;
    return linearSearch(arr.splice(1),target)
}

console.log(linearSearch([1,2,3,4,5], Number(searchTarget)));