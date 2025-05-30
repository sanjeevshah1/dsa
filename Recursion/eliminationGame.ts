// 390. Elimination Game

// You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

// Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
// Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
// Given the integer n, return the last number that remains in arr.

function lastRemaining(n: number): number {
    let arr: number[] = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    let direction : "leftToRight" | "rightToLeft" = "leftToRight"
    return recursion(arr, direction)
};

function recursion(arr: number[], direction : "leftToRight" | "rightToLeft") : number {
    if(arr.length === 1) return arr[0];
    if(direction === "leftToRight"){
        let newArr : number[] = [];
        for(let i = 1; i <= arr.length - 1; i += 2){
            newArr.push(arr[i])
        }
        return recursion(newArr, "rightToLeft")
    }
    else {
        let newArr : number[] = [];
        for(let i = arr.length - 1; i >= 0; i -= 2){
            newArr.push(arr[i])
        }
        return recursion(newArr, "leftToRight")
    } 
}