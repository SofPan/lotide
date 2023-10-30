const assertEqual = require('./assertEqual');

/**
 * @function findKeyByValue takes in an object and a value and outputs the matching key
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

//TESTS

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama": "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// empty object test
const emptyObject = {};

assertEqual(findKeyByValue(emptyObject, "anything"), undefined);

// multiple matching values should stop at first match
const multipleMatchingValues = {
  notAMatch: "nope",
  isAMatch: "yes",
  alsoAMatch: "yes",
  somethingElse: "nothing to see here"
};

assertEqual(findKeyByValue(multipleMatchingValues, "yes"), "isAMatch");

module.exports = findKeyByValue;