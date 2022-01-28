/* Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1**4 + 6**4 + 3**4 + 4**4
8208 = 8**4 + 2**4 + 0**4 + 8**4
9474 = 9**4 + 4**4 + 7**4 + 4**4
As 1 = 1**4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits. 

https://projecteuler.net/problem=30
*/


function isSumOfFifthPowersOfTheirDigitsEqualToSelf(x,y){
    const digits=String(x).split("");
    let total=0;
    for(let i=0; i<digits.length; i++){
        total+=Number(digits[i])**y;
    }
    if(total===x) return true;
    else return false;
}
function findSumOfAllThoseNumbers(n){
    let sumAll=0;
    for(let j=2;j<n;j++){
        if(isSumOfFifthPowersOfTheirDigitsEqualToSelf(j,5)) sumAll+=j;
    }
    return sumAll;
}
console.log(findSumOfAllThoseNumbers(10000000));




















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
