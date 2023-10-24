// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

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

/**
 * @function eqObjects a function that compares two objects for equality
 * @param obj1
 * @param obj2
 * @returns true or false
 */

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
    }
    if (!Array.isArray(obj1[key]) && obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// test for array values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { colors: ["red", "blue"], size: "medium", sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);