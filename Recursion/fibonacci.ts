const fibonacci = (number : number) : number => {
    if(number === 0) return 0;
    if(number === 1) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(`The 10th element of fibonacci series is ${fibonacci(10)}`)

