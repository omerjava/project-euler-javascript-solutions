/* 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included. 

https://projecteuler.net/problem=34
*/

let arrCurious=[];

function findFactorial(y){
    let factorial=1;
    let j=1;
    while(j<y+1){
        factorial*=j;
        j++;
     }    
     return factorial;
}

function isCuriousNumber(x){
    let i=0;
    let sum=0;
    let arrDigits=String(x).split("");
    //console.log(arrDigits);
    for(i=0;i<arrDigits.length;i++){
        sum+=findFactorial(Number(arrDigits[i])); 
    }
    //console.log(sum);
    //console.log(x);
    if(sum===x){
        return true;
        //console.log("This number is a curious number");
    }
    else{
        return false;
    }
}

//2540160=7*9! is used as upper limit
function testCuriousNumber(){
    let k=0;
    for(k=3;k<2540160;k++){
        if(isCuriousNumber(k)===true){
            arrCurious.push(k);
        }
    }
}

console.log(findFactorial(9)*7);

testCuriousNumber();
console.log(arrCurious);
console.log(145+40585);


/*
const potentialCuriousNumbersArr=[];

function potentialCuriousNumbers(){
    const allNumbers=[];
    let i=1;
    let j=0;
    
    for(i=1;i<362880;i++){
        allNumbers.push(i);
    }
    for(j=0;j<allNumbers.length;j++){
       if(!String(allNumbers[j]).includes(9)){
           potentialCuriousNumbersArr.push(allNumbers[j]);
       }
    }

}




function testCuriousNumber2(){
    let k=0;
    for(k=0;k<potentialCuriousNumbersArr.length;k++){
        if(isCuriousNumber(potentialCuriousNumbersArr[k])===true){
            arrCurious.push(potentialCuriousNumbersArr[k]);
        }
    }
}
*/