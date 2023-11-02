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
      // TODO: Test Arrays in objects
      // if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //   return eqArrays(obj1[key], obj2[key]);
      // }
      return eqObjects(obj1[key], obj2[key]);

    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
// NEW TESTS
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

module.exports = eqObjects;
// OLD TESTS
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

