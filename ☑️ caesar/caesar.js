const caesar = function (str, num) {
  //Reduce larger numbers to be more manageable
  num = num % 26;

  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let punctuation = '.,/#!$%^&*;:{}=-_`~()'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === ' ') {
      //add spaces
      newString += lowerCaseString[i];
      continue;
    }
    if (punctuation.includes(lowerCaseString[i])) {
      //retain punctuation
      newString += lowerCaseString[i];
      continue;
    }
    let currentIndex = alphabet.indexOf(lowerCaseString[i]);
    let newIndex = currentIndex + num;
    //is the index larger than the size of the alphabet?
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    //is the index a negative number?
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    //retain capital letters
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
};

module.exports = caesar;
