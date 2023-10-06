const convertToCelsius = function (num) {
  let tempCels = (num - 32) * (5 / 9);
  if (Number.isInteger(tempCels)) {
    return tempCels;
  } else {
    tempCels = tempCels.toFixed(1);
    tempCels = parseFloat(tempCels);
    return tempCels;
  }
};

const convertToFahrenheit = function (num) {
  let tempFahr = num * (9 / 5) + 32;
  if (Number.isInteger(tempFahr)) {
    return tempFahr;
  } else {
    tempFahr = tempFahr.toFixed(1);
    tempFahr = parseFloat(tempFahr);
    return tempFahr;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
