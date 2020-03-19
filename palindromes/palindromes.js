const palindromes = function(string) {
  let oldString = string.toLowerCase().replace(/(?![a-zA-Z])./g, '');
  let arr = oldString.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  let newString = newArr.join('');
  return (newString === oldString) ? true : false;
}

module.exports = palindromes
