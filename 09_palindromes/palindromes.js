const palindromes = function (string) {
  let withoutUps = string.replaceAll("!", "");
  let withoutDots = withoutUps.replaceAll(".", "");
  let withoutCommas = withoutDots.replaceAll(",", "");
  let newString = withoutCommas.split(" ").join("");
  let reverseString = newString.split("").reverse().join("");

  if (newString.toLowerCase() === reverseString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
//first I need to delete all of spaces and commas from a string
