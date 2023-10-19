// A function that takes two arrays as arguments and compares if they are a perfect match
const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`💔 Assertion failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`💅 Assertion passed: ${arr1} === ${arr2}`);
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);