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
 * @function letterPositions
 * @param sentence a string
 * @returns the indexed positions of each occurrence of each letter in the string
*/

const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
  }
  return results;
};

console.log(letterPositions("hello"));