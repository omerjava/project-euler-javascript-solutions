/* Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1**4 + 6**4 + 3**4 + 4**4
8208 = 8**4 + 2**4 + 0**4 + 8**4
9474 = 9**4 + 4**4 + 7**4 + 4**4
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits. 

https://projecteuler.net/problem=30
*/


let i=0;
let j=2;
let y=5;

function sum(x){
    let arr1=[];
    let total=0;
    arr1=String(x).split("");

    for(i=0; i<arr1.length; i++){
        total+=Number(arr1[i])**y;
    }
    if(total===x){
        return true;
    }
    else{
        return false;
    }
    
}

let arr2=[];
let sumAll=0;

for(j=2;j<10000000;j++){

   if(sum(j)===true){
       arr2.push(j);
       sumAll+=j;
   }
}

console.log(sumAll);

console.log(arr2);

















/*
let arr1=[];
let i=0;
let total=0;
let j=2;
let k=4;
let x;
let y;

function sum(x,y){
    arr1=String(x).split("");

    for(i=0; i<arr1.length; i++){
        total+=Number(arr1[i])**y;
    }
    if(total===x){
        return true;
    }
    else{
        return false;
    }
    
}

console.log(sum(1624,4));
console.log(sum(1634,4));
console.log(sum(8208,4));

debugger;

for(j=1633;j<1650;j++){

    for(k=3;k<5;k++){
        console.log(sum(j,k));
    }
    
}

*/
