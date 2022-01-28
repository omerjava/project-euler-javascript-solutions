/* n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! 

https://projecteuler.net/problem=20
*/

function factorialDigitSum(num) {
     let k= BigInt(num);
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
    console.log(factorial);
    return sum;
}

//2432902008176640000 => 20!
//21! is exactly: 51090942171709440000
//93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000;
console.log(factorialDigitSum(100));

let result = Array.from({ length: 100 }, (v, k) => BigInt(k) + 1n)
  .reduce((acc, cur) => acc * cur)
  .toString()
  .replace("n", "")
  .split("")
  .map((v) => parseInt(v))
  .reduce((acc, cur) => acc + cur);

console.log(result);

let result2 = Array.from({ length: 100 }, (v, k) => BigInt(k) + 1n);
//console.log(result2);

// calculate the sum of all digits from the factorial of the given value
function problemTwenty(x = 100) {
  // Create a BigInt Array from 1n to 100n
  let n = 100;
  const arr = Array.from({ length: n }, (v, k) => BigInt(k) + 1n);

  // Define a factorial function
  const factorial = (n) => arr.reduce((acc, cur) => acc * cur);

  // Define a function that takes a string, splits it into separate characters and summises their int values
  const reduceToSum = (t) =>
    t
      .split("")
      .map((v) => parseInt(v))
      .reduce((acc, cur) => acc + cur);

  // Call the factorial function and remove the 'n' at the end
  const numberAsString = factorial(x).toString().replace("n", "");

  // Calculate the sum of the string
  return reduceToSum(numberAsString);
}
//console.log(problemTwenty(100));


