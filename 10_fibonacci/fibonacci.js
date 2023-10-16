const fibonacci = function (index) {
  if (index < 0) {
    return "OOPS";
  } else {
    let final = 1;
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= index; i++) {
      final = firstPrev + secondPrev;
      secondPrev = firstPrev;
      firstPrev = final;
    }
    return final;
  }
};

// Do not edit below this line
module.exports = fibonacci;
// start from 1 second number will be 1 and 3rd number will be 2 next will be 3 and next will be 5 so i should equal itself + i[-1]
