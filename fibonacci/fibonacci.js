const fibonacci = function(x) {
  if (x < 1) return 'OOPS';
  let place = 1;
  let newNum;
  let firstNum = 0;
  let secondNum = 0;
  while (place <= x) {
    newNum = ((firstNum + secondNum) < 1) ? 1 : firstNum + secondNum;
    firstNum = secondNum;
    secondNum = newNum;
    place++;
  }
  return newNum;
}

module.exports = fibonacci
