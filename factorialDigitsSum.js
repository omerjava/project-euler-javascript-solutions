/* n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! 

https://projecteuler.net/problem=20
*/

function factorialDigitsSum(num) {
  let k = BigInt(num);
  let factorial = 1n;
  let sum = 0;
  for (let i = 1n; i <= k; i++) {
    factorial *= i;
  }
  let factorialString = String(factorial);
  let factorialDigitsArr = factorialString.split("");
  for (let j = 0; j < factorialDigitsArr.length; j++) {
    sum += Number(factorialDigitsArr[j]);
  }
  //console.log(factorial);
  return sum;
}

console.log(factorialDigitsSum(100));
