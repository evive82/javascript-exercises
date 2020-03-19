const sumAll = function(x, y) {
  let bigger = (x < y) ? y : x;
  let smaller = (x > y) ? y : x;
  let num1 = smaller;
  let num2 = bigger;
  if (typeof x !== 'number' || x < 0 ||
      typeof y !== 'number' || y < 0) {
    return 'ERROR';
  } else {
    while (smaller < bigger) {
      num2 = num2 + smaller;
      smaller++
    }
    return num2;
  }
}

module.exports = sumAll
