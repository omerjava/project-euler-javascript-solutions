/* Each new term in the Fibonacci sequence is generated 
by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms. 

https://projecteuler.net/problem=2
*/

let number1 = 1;
let number2 = 2;
let sum;
let fibonacciNumbers = [1,2];

for(let i = 0; i <= 4000; i++){
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
    fibonacciNumbers.push(sum);
   // console.log(sum);
    if(sum>=4000000){
      break;
    } 
}
let totalEvenNumbers=0;
for(let i = 0; i < fibonacciNumbers.length; i++){
    if(fibonacciNumbers[i] % 2===0){
        totalEvenNumbers+=fibonacciNumbers[i];
    }
    
}

console.log(totalEvenNumbers);
