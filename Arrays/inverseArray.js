let arr = [1,2,3,0]
let inverse = []
// index      0 1 2 3
// input     [1,2,3,0] 
// inverse   [3,0,1,2]

for(let i=0; i< arr.length; i++){
    let elem = arr[i];
    inverse[elem] = i;
}
// inverse[1] = 5;


console.log(inverse);