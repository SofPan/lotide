// A function that takes two arrays as arguments and compares if they are a perfect match
const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`💔 Assertion failed: ${arr1} !== ${arr2}`);
    }
  }
  console.log(`💅 Assertion passed: ${arr1} === ${arr2}`);
};