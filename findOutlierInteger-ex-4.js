function findOutlier(integers){
    let oddArr = [];
    let evenArr = [];

    integers.forEach(element => {
        if ( element % 2 == 0)
        {
            evenArr.push(element);
        }
        else
        {
            oddArr.push(element);
        }
    });

    if ( oddArr.length > 1 )
    {
        return parseInt(evenArr);
    }
    else
    {
        return parseInt(oddArr);
    }
}


console.log(findOutlier([0, 1, 2])) 
// 1
console.log(findOutlier([1, 2, 3])) 
// 2
console.log(findOutlier([2,6,8,10,3])) 
// 3
console.log(findOutlier([0,0,3,0,0])) 
// 3
console.log(findOutlier([1,1,0,1,1])) 
// 0