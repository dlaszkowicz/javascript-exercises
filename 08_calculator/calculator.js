const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function ([...args]) {
  let fin = 0;
  for (let arg of args) {
    fin += arg;
  }
  return fin;
};

const multiply = function (array) {
  let fin = 1;
  for (let arg of array) {
    fin *= arg;
  }
  return fin;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (x) {
  let fin = x;
  if (x == 0) {
    return 1;
  } else {
    for (let i = x - 1; i > 0; i--) {
      fin *= i;
    }
    return fin;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
