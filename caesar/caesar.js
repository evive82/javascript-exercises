const caesar = function(string, shift) {
  let lowA = 'abcdefghijklmnopqrstuvwxyz';
  let capA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let oldArr = string.split('');
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (!oldArr[i].match(/[A-Za-z]/)) {
      newArr.push(oldArr[i]);
    } else {
      let alpha = ((lowA).includes(oldArr[i])) ? lowA : capA;
      let index = alpha.indexOf(oldArr[i]);
      index += shift;
      if (index > 25 ) {
        while (index > 25){
          index -= 26;
        }
      }
      if (index < 0) {
        while (index < 0) {
          index += 26;
        }
      }
      newArr.push(alpha[index]);
    }
  }
  let newString = newArr.join('');
  return newString;
}

module.exports = caesar

