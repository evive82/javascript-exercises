
const findTheOldest = function(array) {
  const year = new Date().getFullYear();
  let person;
  let age = 0;
  for (let i = 0; i < array.length; i++) {
    let born = array[i].yearOfBirth;
    let dead = (array[i].yearOfDeath) ? array[i].yearOfDeath : year;
    let thisAge = dead - born;
    if (thisAge > age) {
      age = thisAge;
      person = array[i];
    }
  }
  return person;
}


module.exports = findTheOldest

