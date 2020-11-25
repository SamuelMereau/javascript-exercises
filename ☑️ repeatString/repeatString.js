const repeatString = function (string, count) {
  //Create an array to concatinate string parameter
  let strarray = [];
  //Return Error if number cannot be used in for loop
  if (count < 0) {
    return 'ERROR';
  }
  //Loop array push for array to be length of count
  for (i = 0; i < count; i++) {
    strarray.push(string);
    //Break the loop once array length is equal with count
    if (i === count) {
      break;
    }
  }
  //Concatenate array and return output
  let output = strarray.join('');
  return output;
};

module.exports = repeatString;
