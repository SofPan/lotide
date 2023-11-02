const assertEqual = require('./assertEqual');
// A function that takes two arrays as arguments and compares if they are a perfect match
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = false;
  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i])) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      } else {
        result = true;
      }
    } else {
      result = eqArrays(arr1[i], arr2[i]);
    }
  }
  return result;
};


// TESTS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

module.exports = eqArrays;