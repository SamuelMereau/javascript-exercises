const reverseString = function (string) {
  //Split string into array
  let arr = string.split("");
  //Reverse array characters
  arr = arr.reverse();
  //Concatenate characters
  let output = arr.join("");
  return output;
};

module.exports = reverseString;
