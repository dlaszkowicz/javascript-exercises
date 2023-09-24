const removeFromArray = function (array, ...theArgs) {
  for (const arg of theArgs) {
    if (array.includes(arg)) {
      let numDel = arg - 1;
      array.splice(numDel, 1);
    }
  }
  return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
//npm test removeFromArray.spec.js
