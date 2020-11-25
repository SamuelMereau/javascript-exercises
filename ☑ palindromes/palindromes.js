const palindromes = function (input) {
  input = input.toLowerCase().replace(/[^A-Za-z]/g, '');
  return input.split('').reverse().join('') == input;
};

module.exports = palindromes;
