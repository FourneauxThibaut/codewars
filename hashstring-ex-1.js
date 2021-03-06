// return masked string

function maskify(cc) {
  let temp = '';
  let tempArr = [];
  if ( cc.length > 4 )
  {
    const lastFourDigits = cc.slice(-4);
    for ( let i=0; i < cc.length - 4; i++ ){
      
      const regex = /[a-zA-Z0-9]+/;
      temp = cc[i].replace(regex, '#');
      tempArr.push(temp);
    }
    for ( let j = 0; j < lastFourDigits; j++){
      tempArr.push(lastFourDigits[j]);
    }
    return tempArr.join('');
  }
  else
  {
      return cc;
  }
}


console.log( maskify('4556364607935616') );
console.log( maskify('1') );
console.log( maskify('1111') );
