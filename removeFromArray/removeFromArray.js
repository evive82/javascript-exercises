const removeFromArray = function(arr, l, m, n, o) {
  let newArray = arr;
  for (let i = 0; i < newArray.length; i++) {
    switch(newArray[i]) {
      case l:
      case m:
      case n:
      case o:
        newArray.splice(i, 1);
        i--;
    }
  }
  return newArray;
}

module.exports = removeFromArray
