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
    // if the value is an object, recursion occurs
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      }
      return eqObjects(obj1[key], obj2[key]);

    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// NEW TESTS
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// test for Arrays
assertEqual(eqObjects({ a: [1, 2], b: 0 }, { a: [1, 2], b: 0 }), true);

assertEqual(eqObjects({ a: [1, 2], b: 0 }, { a: [1, 2, 3], b: 0 }), false);

module.exports = eqObjects;