const recursiveSelectionSort = (arr : number[], start = 0) : number[] => {
    const size = arr.length;
    // Base Case
    if(start >= size - 1) return arr;

    //Swapping the start index's element with min element
    let min = start;
    for(let i = start; i <= size - 1; i++){
        if(arr[i] < arr[min]) min = i;
    }
    swap(arr, start , min)

    return recursiveSelectionSort(arr, start + 1)
}
var swap = (arr: number[], i : number, j : number) : void => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


console.log(recursiveSelectionSort([2,1,3,6,0,-9,8, 0]))