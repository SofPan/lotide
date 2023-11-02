const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

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
// const myDog = {
//   name: "Kane",
//   breed: "GSD",
//   bark: "loud",
// };

// const alsoMyDog = {
//   breed: "GSD",
//   bark: "loud",
//   name: "Kane",
// };

// assertObjectsEqual(myDog, alsoMyDog); // => Pass

// const notMyDog = {
//   name: "Fido",
//   breed: "Beagle",
//   bark: "more of a woof",
// };

// assertObjectsEqual(myDog, notMyDog); // => Fail

// assertObjectsEqual({}, {}); // => Should pass even though empty
// assertObjectsEqual({ key: "value" }, { key: "value", key2: "value2" }); // => Fail

module.exports = assertObjectsEqual;