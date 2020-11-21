const fibonacci = function (num) {
  //cannot accept strings
  if (typeof num === 'string') {
    num = parseInt(num);
  }
  //cannot accept negative numbers
  if (num < 0) {
    return 'OOPS';
  }

  let sequence = [1];

  for (let i = 1; i < num; i++) {
    if (i === num) {
      //return number in series
      break;
    } else {
      if (sequence.length >= 2) {
        //The sequence length is more than two, allowing the fibonacci sequence to begin.
        //Get the sum of the two previous array items
        sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
      } else {
        //Sequence does not have enough population to begin fibonacci sequence
        sequence.push(i);
      }
    }
  }

  return sequence[sequence.length - 1];
};

module.exports = fibonacci;
