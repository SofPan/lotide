const assertArraysEqual = require('./assertArraysEqual');

/**
 * @function takeUntil takes two arguments, an array and a callback function
 * @param array an array of any kind of items
 * @param callback an anonymous callback function
 * @returns a slice of the array with elements taken from the beginning until the callback output
 */

// A function that takes two arguments, an array and a callback
// Adds the array elements to the result array until the callback condition returns true
// If the callback condition is not met, return the entire array
const takeUntil = (array, callback) => {
  const result = [];
  for (const item of array) {
    // if the callback condition returns true, return result array
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

// TESTS
// test numbers
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

// Test strings
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

// Test callback condition is never met
const data3 = [1, 2, 3, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, data3);

module.exports = takeUntil;