const ftoc = function (num) {
  let convert = ((num - 32) * 5) / 9;
  let rounded = Math.round(convert * 10) / 10;
  return rounded;
};

const ctof = function (num) {
  let convert = (num * 9) / 5 + 32;
  let rounded = Math.round(convert * 10) / 10;
  return rounded;
};

module.exports = {
  ftoc,
  ctof,
};
