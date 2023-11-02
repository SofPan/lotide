const eqArrays = require('./eqArrays');

// A function that prints the result of eqArrays to the console
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) ? `💅 Assertion passed: ${arr1} === ${arr2}` : `💔 Assertion failed: ${arr1} !== ${arr2}`);
};

// A function that takes an array as argument and re-modulates it into a single array
const flatten = (arr) => {
  let flatArray = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      flatArray = flatArray.concat(elem);
    } else {
      flatArray.push(elem);
    }
  }
  return flatArray;
};

// TESTS
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([[1, 2, 3], ["a", "b", "c"]]), [1, 2, 3, "a", "b", "c"]); // => [1, 2, 3, "a", "b", "c"]
// assertArraysEqual(flatten([[], [""]]), [""]); // => [""]
// assertArraysEqual(flatten([[], []]), []); // => []

module.exports = flatten;
