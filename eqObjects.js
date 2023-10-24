// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

/**
 * @function eqObjects a function that compares two objects for equality
 * @param obj1
 * @param obj2
 * @returns true or false
 */

const eqObjects = (obj1, obj2) => {

};

// TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);