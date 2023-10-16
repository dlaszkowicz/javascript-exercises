const findTheOldest = function (people) {
  let winner = 0;
  let oldest = "";
  people.forEach((person) => {
    if ("yearOfDeath" in person === false) {
      person.yearOfDeath = 2023;
    }
    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > winner) {
      winner = age;
      oldest = person;
    } else {
      person.yearOfDeath = new Date();
    }
  });
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
