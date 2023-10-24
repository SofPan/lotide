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

// A function that takes two objects as arguments and compares if they are a perfect match
const eqObjects = (obj1, obj2) => {
  // test that each object has the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // compare the values of each key match for both objects
  for (const key in obj1) {
    // if the value is an array, compare arrays
    if (Array.isArray(obj1[key])) {
      // if the compared arrays do not match, return false
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

/**
 * @function assertObjectsEqual a function that takes in two objects and prints a pass or fail message
 * @param actual the actual object
 * @param expected the expected output
 * @print pass/fail message
 */

// prints pass/fail depending on equality of two objects
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `💅 Assertion passed: ${inspect(actual)} === ${inspect(expected)}` : `💔 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TESTS
const myDog = {
  name: "Kane",
  breed: "GSD",
  bark: "loud",
};

const alsoMyDog = {
  breed: "GSD",
  bark: "loud",
  name: "Kane",
};

assertObjectsEqual(myDog, alsoMyDog); // => Pass

const notMyDog = {
  name: "Fido",
  breed: "Beagle",
  bark: "more of a woof",
};

assertObjectsEqual(myDog, notMyDog); // => Fail

assertObjectsEqual({}, {}); // => Should pass even though empty
assertObjectsEqual({ key: "value" }, { key: "value", key2: "value2" }); // => Fail