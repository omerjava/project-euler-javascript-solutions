/* The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million? 

https://projecteuler.net/problem=35
*/

//this function checks whether the number is prime number or not.
function isPrime(x) {
  let i = 0;
  let k = Math.floor(Math.sqrt(x));
  if (x <= 1) {
    return false;
  }
  for (i = 2; i <= k; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}


//the function below find all prime numbers below 1 million and add them to array of primeNumbers
const primeNumbers = [2];

function findPrimeNumbers() {
  let j = 3;
  while (j < 1000000) {
    if (isPrime(j) === true) {
      primeNumbers.push(j);
      //console.log(j);
    }
    j = j + 2;
  }
}

//the function below decrease the length of primeNumbers array by eliminating prime numbers includes 0,2,4,5,6,8
//because if those numbers come to the last digit, it does not become prime number and hence not circular prime
const potentialCircularPrimes = [2];

function potentialCircularNumbers() {
  const divisible = [0, 2, 4, 5, 6, 8];
  let i = 0;

  for (i = 0; i < primeNumbers.length; i++) {
    if (
      !String(primeNumbers[i]).includes(divisible[0]) &&
      !String(primeNumbers[i]).includes(divisible[1]) &&
      !String(primeNumbers[i]).includes(divisible[2]) &&
      !String(primeNumbers[i]).includes(divisible[3]) &&
      !String(primeNumbers[i]).includes(divisible[4]) &&
      !String(primeNumbers[i]).includes(divisible[5])
    ) {
      //console.log(primeNumbers[i]);
      potentialCircularPrimes.push(primeNumbers[i]);
    }
  }
}

//this function checks whether a prime number is a circular prime number.
//For this, it rotates the digits of number and check that whether all rotated numbers are also prime
function isCircularNumber(x) {
  let a = potentialCircularPrimes[x];
  let allCircularArr = [];
  let circularNumbers = String(a).split("");
  let i;
  let j;
  for (i = 0; i < circularNumbers.length; i++) {
    circularNumbers = String(a).split("");
    let b = circularNumbers[0];
    circularNumbers.shift();
    circularNumbers.push(b);
    let c = circularNumbers.join("");
    allCircularArr.push(c);
    a = c;
  }
  //console.log(allCircularArr);

  let arrPrimeCheck = [];
  for (j = 0; j < allCircularArr.length; j++) {
    if (isPrime(allCircularArr[j]) === true) {
      arrPrimeCheck.push(allCircularArr[j]);
      //console.log(allCircularArr[j]);
    }
  }
  if (allCircularArr.length === arrPrimeCheck.length) {
    return true;
    //console.log("These numbers are circular prime numbers");
  } else {
    return false;
    //console.log("These numbers are NOT circular prime numbers");
  }
}

//test all potential prime numbers whether they are circular prime by using isCircularNumber() function
const allCircularPrimeNumbers = [5]; //5 is exception
function testPrimeNumbersForCircular() {
  let i;

  for (i = 0; i < potentialCircularPrimes.length; i++) {
    if (isCircularNumber(i) === true) {
      allCircularPrimeNumbers.push(potentialCircularPrimes[i]);
      //console.log(potentialCircularPrimes[i]);
    }
  }
}

findPrimeNumbers();
console.log(primeNumbers.length);
potentialCircularNumbers();

isCircularNumber(4);
testPrimeNumbersForCircular();
console.log(allCircularPrimeNumbers);
console.log(allCircularPrimeNumbers.length);


