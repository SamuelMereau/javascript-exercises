const getTheTitles = function (obj) {
  let output = [];
  output.push(obj[0].title);
  output.push(obj[1].title);
  return output;
};

module.exports = getTheTitles;
