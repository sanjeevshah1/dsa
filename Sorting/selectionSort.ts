const selectionSort = (arr : number[]) : number[] => {
    const size = arr.length;
    for(let i = 0; i <= size - 2; i++){
        let min = i;
        for(let j = i + 1; j <= size - 1; j++){
            if(arr[j] < arr[min]) min = j;
        }
        swap(arr, i, min)
    }
    return arr;
}

//Time Complexity : O(n^2)
//Space complexity: O(1)

var swap = (arr: number[], i : number, j : number) : void => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(selectionSort([2,1,3,6,0,-9,8, 0]))
