const sumAll = function (a, b) {
  let finalNumber = 0;
  //If a or b is an object that cannot be used, return an error
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  //If a or b is a negative number, return an error
  if (a < 0 || b < 0) {
    return 'ERROR';
  }
  //If a is larger than b, decrement a to reach b
  if (a > b) {
    for (i = a; i >= b; i--) {
      finalNumber += i;
    }
  }
  //If b is larger than a, increment a to reach b
  if (b > a) {
    for (i = a; i <= b; i++) {
      finalNumber += i;
    }
  }
  //Throw an error if anything else appears
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  //Return final number
  return finalNumber;
};

module.exports = sumAll;
