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

// A function that takes two arrays as arguments and removes the elements in the second array from the first array, then returns the newly made array
const without = (arr1, arr2) => {
  const filteredArray = [];

  for (const elem of arr1) {
    // if the second array does not include the current element, it should be kept as part of the filtered array
    if (!arr2.includes(elem)) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
};

// TESTS
// remove the first index
const first = without([1, 2, 3], [1]); // => [2, 3]
// remove the last index
const last = without([1, 2, "3"], ["3"]);// => [1, 2]
// not all elements are present in the first array
const someNotIncluded = without([1, 2, "3", 4, 5], [3, "5", 5]); // => [1, 2, "3", 4]
// all but one element should be removed
const allButOne = without([1, 2, 3, 4, 5], [1, 2, 3, 4]); // => [5]

// Test the original array is not modified
const originalArray = ["a", "b", "c"];
without(originalArray, ["b"]);
assertArraysEqual(originalArray, ["a", "b", "c"]); // => should PASS

// Testing assertions
assertArraysEqual(first, [2, 3]);
assertArraysEqual(last, [1, 2]);
assertArraysEqual(someNotIncluded, [1, 2, "3", 4]);
assertArraysEqual(allButOne, [5]);