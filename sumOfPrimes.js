/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. 

https://projecteuler.net/problem=10
*/

let x;
let i;
let y;
function isPrime(x){
    y=Math.floor(Math.sqrt(x));
    if(x<=1){
        return false;
    }
    for(i=2; i<=y; i++) {
        if(x%i===0){
        return false;
        }
    }
    return true;
}

let j;
let sum=2;
for(j=3; j<2000000; j=j+2){
    if(isPrime(j)===true){
        sum+=j;
       // console.log(j); // The prime numbers can be seen if wanted   
    }
}
console.log(sum);

/* solution 2:
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
let j;
for(j=3; j<2000; j=j+2){
    if(isPrime(j)===true){
        arrPrime.push(j);
        //console.log(j); // The prime numbers can be seen if wanted
    }
}

let result=arrPrime.reduce(sumFunc);

function sumFunc(total, num){
    return total + num;
}

console.log(result);  */

