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

// Time Complexity: O(n^2)
// - Each recursive call does O(n) comparisons in the worst case.
// - There are O(n) recursive calls.
// => Total = O(n^2)

// Space Complexity: O(n)
// - Recursive calls are added to the call stack.
// - In the worst case, there are n recursive calls on the call stack.

var swap = (arr: number[], i : number, j : number) : void => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


console.log(recursiveSelectionSort([2,1,3,6,0,-9,8, 0]))