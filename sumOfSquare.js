/* https://projecteuler.net/problem=6 */


function sumSquareNumbers(x){
    let i=1;
    let sumSquare=0;
    while(i<=x){
            sumSquare+=i*i;
            i++;
    }
    return sumSquare;    
}
function squareSumNumbers(x){
    let j=1;
    let total=0;
    let squareTotal;
    while(j<=x){
             total+=j;
             j++;
    }
    squareTotal= total*total;
    return squareTotal;
}

console.log(squareSumNumbers(100)-sumSquareNumbers(100));
