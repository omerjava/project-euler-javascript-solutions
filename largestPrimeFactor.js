/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? 

https://projecteuler.net/problem=3
*/

function prime(x){
   const primeFactors=[];
   for (let i=2; i<x+1; i++){
      if(x % i===0){
         primeFactors.push(i);
         x=x/i;   
         //console.log(x);
      }
   }
   return Math.max(...primeFactors);
}

console.log(prime(600851475143));


