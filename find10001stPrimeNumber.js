/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? 

https://projecteuler.net/problem=7
*/

let x;
let i;
function isPrime(x){
    if(x<=1){
        return false;
    }
    for(i=2; i<x; i++) {
        if(x%i===0){
        return false;
        }
    }
    return true;
}

const arrPrime=[2];
let j=3;
while(j>2){
    if(isPrime(j)===true){
        arrPrime.push(j);
        if(arrPrime.length===10001){
            break;
            }
        }
    j=j+2;
}

console.log(arrPrime[10000]);