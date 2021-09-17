function findShort(s){
    let sorted = s.split(' ').map(w => w.length);
    let min = sorted[0];
    sorted.forEach(element => {
        if (element < min)
        {
            min = element;
        }
    });
    return min;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// 3 
console.log(findShort("Let's travel abroad shall we"));
// 2