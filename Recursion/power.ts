const calculatePower = (base, power) : number => {
    if(power === 0) return 1;
    return base * calculatePower(base, power - 1)
}

console.log(`The value of calculatePower(4,4) is ${calculatePower(4,4)}`);

const printNumber = (number : number) => {
    if(number === 0) return;
    printNumber(number - 1);
    console.log(number)
}
printNumber(10);