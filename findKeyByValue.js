/**
 * @function findKeyByValue takes in an object and a value and returns the matching key
 * @param compareObject an object to be iterated over
 * @param compareValue a value to be compared against
 * @returns the key associated with compareValue or undefined
 */

const findKeyByValue = (compareObject, compareValue) => {
  for (const key in compareObject) {
    if (compareObject[key] === compareValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;