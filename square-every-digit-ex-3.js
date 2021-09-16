function squareDigits(num){
    let numString = num.toString();
    let resultArr = [];

    if (isNaN(num)) {
      return 'Not a Number!';
    }
    else{
        for ( let i=0 ; i < numString.length ; i++)
        {
            let tempNum = numString[i];
            let tempResult = parseInt(tempNum) * parseInt(tempNum);
            resultArr.push(tempResult); 
        }
        return parseInt(resultArr.join(''));
    }
}


console.log( squareDigits(3212) );
// 3212 => 9414
console.log( squareDigits(2112) );
// 2112 => 4114
console.log( squareDigits(0) );
// 0 => 0