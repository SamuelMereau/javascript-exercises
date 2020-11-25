let findTheOldest = function (obj) {
  let date = new Date();
  if (obj[0].yearOfDeath == null) {
    //person is still living
    obj[0].yearOfDeath = date.getFullYear();
  }
  if (obj[1].yearOfDeath == null) {
    //person is still living
    obj[1].yearOfDeath = date.getFullYear();
  }
  if (obj[2].yearOfDeath == null) {
    //person is still living
    obj[2].yearOfDeath = date.getFullYear();
  }

  const person1Age = obj[0].yearOfDeath - obj[0].yearOfBirth;
  const person2Age = obj[1].yearOfDeath - obj[1].yearOfBirth;
  const person3Age = obj[2].yearOfDeath - obj[2].yearOfBirth;
  const mainArray = [person1Age, person2Age, person3Age];

  function reduceArray() {
    let i;
    let largest = 0;
    for (i = 0; i <= largest; i++) {
      if (mainArray[i] > largest) {
        largest = mainArray[i];
      }
    }
    console.log('LARGEST: ' + largest);
    switch (largest) {
      case person1Age:
        console.log('**PERSON1 CASE** returned: ' + obj[0].name);
        return obj[0];
      case person2Age:
        console.log('**PERSON2 CASE** returned: ' + obj[1].name);
        return obj[1];
      case person3Age:
        console.log('**PERSON3 CASE** returned: ' + obj[2].name);
        return obj[2];
    }
  }

  return reduceArray();
};

module.exports = findTheOldest;
