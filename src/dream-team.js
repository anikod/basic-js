//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (array === null || !array || !Array.isArray(array) ) return false;

  let result = '';

  for (let index = 0; index < array.length; index++) {

    if (typeof array[index] === 'string') {
      result += firstLetter(array[index]);
    }
  }

  function firstLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') return str[i];
    }
  }

  if (result == '') return false;
  return result.toUpperCase().split('').sort().join('');
};

