function isPalindrome(x) {
    let tempArrOne = [];
    let tempArrTwo = [];
    if (isNaN(x)) 
    {
        if ( x.lenght % 2 == 0 )
        {
            console.log("non");
            for ( let i = 0; x.lenght/2 > i; i++){
                tempArrOne.push(x[i]);
                console.log(x[i]);
            }
            console.log(tempArrOne);
            for ( let j = 0; x.lenght/2 > j; j++){
                tempArrTwo.push(x[x.lenght-j]);
                console.log(x.lenght-j);
            }
            console.log(tempArrTwo);
        }
        else
        {
            console.log("oui");
            for ( let i = 0; Math.floor(x.lenght/2) > i; i++){
                tempArrOne.push(x[i]);
                console.log(x[i]);
            }
            console.log(tempArrOne);
            for ( let j = 0; Math.floor(x.lenght/2) > j; j++){
                tempArrTwo.push(x[x.lenght-j]);
                console.log(x.lenght-j);
            }
            console.log(tempArrTwo);
        }
    }
    else if ( x == ""){
        return true;
    }
    else
    {   
        return isPalindrome( x.toString() );
    }
}



console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome(""));