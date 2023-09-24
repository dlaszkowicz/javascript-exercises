const reverseString = function (word) {
  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  let joinWord = reverseWord.join("");
  return joinWord;
};

// Do not edit below this line
module.exports = reverseString;
//npm test reverseString.spec.js
