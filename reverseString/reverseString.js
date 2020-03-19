const reverseString = function(string) {
  let str = string.split('');
  let newStr = []
  while (str.length > 0) {
    newStr.push(str.pop());
  }
  newStr = newStr.join('');
  return newStr;
}

module.exports = reverseString
