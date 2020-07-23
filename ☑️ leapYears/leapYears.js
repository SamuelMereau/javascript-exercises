//Years divisible by 4 are leap years
//Years divisible by 100 are not leap years
//However, if they are also divisable by 400, as well as 100, then it is a leap year (it will overule the 'divisible by 100' rule)

//This is identifiable by only accepting numbers as true if they do not have any decimals

const leapYears = function (year) {
  let isLeapYear = year % 4;
  let isNotLeapYear = year % 100;
  let isLeapYearBy400 = year % 400;

  //Return false on century years
  if (isLeapYear === 0 && isNotLeapYear === 0 && isLeapYearBy400 !== 0) {
    return false;
  }

  if (isLeapYear === 0) {
    //The year is divisible by 4; it is a leap year
    return true;
  } else if (isLeapYear !== 0) {
    //The year is not divisible by 4; it is not a leap year
    return false;
  } else if (isNotLeapYear === 0) {
    //The year is divisible by 100; it is not a leap year
    return false;
  } else if (isNotLeapYear !== 0) {
    //The year is not divisble by 100; it is a leap year
    return true;
  } else if (isLeapYearBy400 === 0) {
    //The year is divisible by 400; it is a leap year
    return true;
  } else if (isLeapYearBy400 !== 0) {
    //The year is not divisble by 400; it is not a leap year
    return false;
  }
};

module.exports = leapYears;
