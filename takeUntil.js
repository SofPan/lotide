// A function that takes two arrays as arguments and compares if they are a perfect match
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// A function that prints the result of eqArrays to the console
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) ? `💅 Assertion passed: ${arr1} === ${arr2}` : `💔 Assertion failed: ${arr1} !== ${arr2}`);
};

/**
 * @function takeUntil takes two arguments, an array and a callback function
 * @param array an array of any kind of items
 * @param callback an anonymous callback function
 * @returns a slice of the array with elements taken from the beginning until the callback output
 */

const takeUntil = (array, callback) => {
  const result = [];

  return result;
};

console.log(takeUntil());