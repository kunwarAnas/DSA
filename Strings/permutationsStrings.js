let str = "abc";
// output -> 'abc', 'bac', 'cab', 'acb', 'bca', 'cba'

let combinations = []
const findFactorial = (int) => {
  let factotial = 1;
  for (let i = 2; i <= int; i++) {
    factotial = factotial * i;
  }
  return factotial;
};

const findPermutations = (str) => {
  const factorial = findFactorial(str.length);

  for (let i = 0; i < factorial; i++) {
    let temp = i;
    let tempStr = ''
    let str2 = str
    for (let j = str2.length; j >= 1; j--) {
        let reminder = Math.floor(temp %  j)
        temp = Math.floor(temp /  j)
        tempStr += str2[reminder];
        str2 = str2.split('')
        str2.splice(reminder,1);
        str2 = str2.join('')
    }
    combinations.push(tempStr);
  }

 console.log(combinations);
};

findPermutations(str);
