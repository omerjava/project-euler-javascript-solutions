// https://projecteuler.net/problem=25

let number1 = 1n;
let number2 = 1n;
let sum=0n;
let fibonacciNumbers = [1n,1n];
let i=1;

while(i>0){
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
    fibonacciNumbers.push(sum);
    //console.log(sum);
    if(sum>=10n**999n){
      break;
    } 
    i++;
}

console.log(fibonacciNumbers.length);