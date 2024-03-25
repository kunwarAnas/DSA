let str = "pePcOdiNg";
// output -> PEpCoDInG
let convertedStr = '';
for (let i = 0; i < str.length; i++) {
  let c = str[i];
  if (c >= "a" && c <= "z") {
    let smallToBig = String.fromCharCode("A".charCodeAt(0) + c.charCodeAt(0) - "a".charCodeAt(0));
    convertedStr += smallToBig
  } else if (c >= "A" && c <= "Z") {
    const bigToSmall = String.fromCharCode("a".charCodeAt(0) + c.charCodeAt(0) - "A".charCodeAt(0));
    convertedStr += bigToSmall
  }
}
console.log(convertedStr);

