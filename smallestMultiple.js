/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any 
remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? 

https://projecteuler.net/problem=5
*/

/**
 * Given a number `n`, the function will find the all numbers until `n` and find the first number
 * which can be divided with all these numbers until `n`.
 *
 * @param {number} n - The first number will be found which can be divided with all numbers until `n`
 * @returns {number} - It will return the first number which can be divided with all numbers until `n`.
 */

function smallestMultiple(n){
   const numbers=[];
   for(let i=1; i<n+1; i++){
      numbers.push(i);
   }
   let i=n;
   for(i; i<n*1000000000; i++){
      let check;
      check=numbers.every(v => i%v===0)
      if(check===true) break;
   }
   return i;
}

console.log(smallestMultiple(20));



/*
below are my first code problem solving efforts :)

let i=1;

for(i=1; i<100000000000000; i++) {

   if(i % 11===0 && i % 12===0 && i % 13===0 && i % 14===0 && i % 15===0 && i % 16===0 
    && i % 17===0 && i % 18===0 && i % 19===0 && i % 20===0 ){
        break;    
     }
}

console.log(i);


let i;
let x;
let j;
let k;

let numbers=[];

function makeArrayFrom1toX(x){
   for(i=1;i<=x;i++){
      numbers.push(i);
   }
   
   
}

makeArrayFrom1toX(15);

let j;
let k;

while(j>0){
   for(k=0; k<numbers.length; k++){
      if(j%numbers[k]!==0){
         return false;
      }
   }
return true;

   j++;
}
console.log(j); 

let i=1;
let j=1;
let numbers=[1,2,3,4,5,6,7,8]

function divisible(i){
   for(j=1; j<=numbers.length;j++){
   if(i % numbers[j]!==0){
        return false;    
     }
   }
   return true;
    
}

while(i>0) {
  
  for(j=1; j<=numbers.length;j++){
   if(i % numbers[j]!==0){
        return false;    
     }
   }
   return true;
    
}

     i++;
}

console.log(i);
/*
function isDivisible(multiple, n) {
   for (let i = 2; i <= n; i++) {
       if (multiple % i !== 0) {
           return false;
       }
   }
   return true;
   console.log(i);
}


console.log(isDivisible(120,5));


/* let i=1;

for(i=1; i<10000; i++) {

   if(i % 1===0 && i % 2===0 && i % 3===0 && i % 4===0 && 
    i % 5===0 && i % 6===0 && i % 7===0 && i % 8===0 && i % 9===0 && i % 10===0 ){
        break;
        
   }
   

}

console.log(i); 

let i=100;
let maxNumber=20;
let j;

while(i>0) {
   for(j=1; j<=maxNumber; j++){
   if(i % j!==0){
        return false;    
      }
   }
   i++;
}

console.log(i); 
```
let i=1;

while(i>0) {

   if(i % 11===0 && i % 12===0 && i % 13===0 && i % 14===0 && i % 15===0 && i % 16===0 
      && i % 17===0 && i % 18===0 && i % 19===0 && i % 20===0 ){
        break;    
   }
   i++;
}

console.log(i);
```

*/