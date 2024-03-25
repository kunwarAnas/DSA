let str = "abdgca";
// output -> a1b2d3g-4c-2a
let lastCharAsciiCount = str[0].charCodeAt(0);
let outputStr = str[0]
for (let i = 1; i < str.length; i++) {
  let charCode = str[i].charCodeAt(0);
  let diff = charCode - lastCharAsciiCount
  lastCharAsciiCount = charCode;
  outputStr += diff + str[i]
}
console.log(outputStr);

