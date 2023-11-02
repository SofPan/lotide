const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

/**
 * @function eqObjects a function that compares two objects for equality
 * @param obj1
 * @param obj2
 * @returns true or false
 */

// compares two objects for equality
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

// TESTS
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// // test for array values
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { colors: ["red", "blue"], size: "medium", sleeveLength: "long" };

// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;

// NEW CALLS
eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false