//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
//function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  for (let index = 0; index < matrix.length; index++) {
    //const element = array[index];
    //console.log('index: ', index);

    for (let m = 0; m < matrix[index].length; m++) {
      //const element = array[m];
      //console.log('m is: ', matrix[index][m]);
      if (matrix[index][m] == '^^') result++;
    }

  }






  return result;
};

