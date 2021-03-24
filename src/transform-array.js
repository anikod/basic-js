//const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  //  function transform(array) {
  // if (array === null || !array || !Array.isArray(array) ) return false;

  //if (array === null || !array || !Array.isArray(array) ) return false;

  if (!Array.isArray(array)) throw new Error('Where\'s your array, sir?');
  if (array === [] || array.length == 0) return [];


  let result = [];

  for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    /*
    --discard-next excludes the next element of the array from the transformed array.
    --discard-prev excludes the previous element of the array from the transformed array.
    --double-next doubles the next element of the array in the transformed array.
    --double-prev doubles the previous element of the array in the transformed array.
    */

    switch (array[index]) {
      case '--discard-next':


        break;


      case '--discard-prev':
        break;
      case '--double-next':

        break;
      case '--double-prev':

        break;

      default:
        result += array[index];
        break;
    }

  }

  return result;

};





/*




*/
