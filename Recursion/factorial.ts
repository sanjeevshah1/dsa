const factorial = (number : number) : number => {
    if(number === 1) return 1;
    return number * factorial(number - 1)
}
console.log(`The value of factorial(5) is ${factorial(5)}`);