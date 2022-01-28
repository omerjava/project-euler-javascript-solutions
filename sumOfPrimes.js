/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. 

https://projecteuler.net/problem=10
*/



function isPrime(x){
    let y=Math.floor(Math.sqrt(x));
    if(x<=1){
        return false;
    }
    for(let i=2; i<=y; i++) {
        if(x%i===0){
        return false;
        }
    }
    return true;
}
function primeNumbersSumUntil(n){
    let sum=2;
    for(let j=3; j<n; j=j+2){
        if(isPrime(j)===true){
            sum+=j;
        }
    }
    return sum;
}
console.log(primeNumbersSumUntil(2000000));


