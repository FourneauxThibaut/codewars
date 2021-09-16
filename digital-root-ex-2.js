function digital_root(n) {
    let nLenght = n.toString().length;
    let result = 0;

    if ( nLenght >= 2 )
    {
        for ( let i=0 ; i < nLenght ; i++)
        {
            let nString = n.toString();
            let tempNbr = nString[i];
            result += parseInt(tempNbr);
        }
        let resultLenght = result.toString().length;
        if (resultLenght > 1)
        {
            return digital_root(result);
        }
        else{
           return result; 
        }
    }
    else{
        return n; 
    }
}

console.log(digital_root(6));
console.log(digital_root(16));
console.log(digital_root(456));