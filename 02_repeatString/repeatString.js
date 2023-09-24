function repeatString(string, num) {
  let final = "";
  if (num < 0) {
    final = "ERROR";
  } else if (num > 0) {
    for (let i = 0; i < num; i++) {
      final += string;
    }
  } else {
    final = "";
  }
  return final;
}

// Do not edit below this line
module.exports = repeatString;
//npm test repeatString.spec.js
