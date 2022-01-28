/* https://projecteuler.net/problem=6 */

let i=1;
let j=1;
let sumSquare=0;
let total=0;
let squareTotal;
function sumSquareNumbers(x){
        while(i<=x){
            sumSquare+=i*i;
            i++;
        }
    return sumSquare;    
}
function squareSumNumbers(x){
        while(j<=x){
             total+=j;
             j++;
        }
    squareTotal= total*total;
    return squareTotal;
}

console.log(squareSumNumbers(100)-sumSquareNumbers(100));
