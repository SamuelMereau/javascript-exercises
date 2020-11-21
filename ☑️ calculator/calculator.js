function add() {
  return arguments[0] + arguments[1];
}

function subtract() {
  return arguments[0] - arguments[1];
}

function sum() {
  return arguments[0].reduce((a, b) => a + b, 0);
}

function multiply() {
  return arguments[0].reduce((a, b) => a * b);
}

function power() {
  return Math.pow(arguments[0], arguments[1]);
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n > 0 && n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
