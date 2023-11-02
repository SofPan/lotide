const assertEqual = require('./assertEqual');

/**
 * @function findKey takes two arguments, an object and a callback
 * @param object an object to be scanned
 * @param callback an anonymous function that will be scanned against for the relevant key-value pair
 * @returns the first truthy key, or if no key is found returns undefined
 */

const findKey = (object, callback) => {
  const keyArr = Object.keys(object);
  for (const key of keyArr) {
    if (callback(object[key])) {
      return key;
    }
  }

};

// Tests
// two keys match the callback condition
// const object1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(object1, "noma");

// // No keys match the callback condition
// const object2 = findKey({
//   name: "Kane",
//   breed: "GSD",
//   barks: "very loudly",
// }, x => x.color === "black and tan");
// assertEqual(object2, undefined);

module.exports = findKey;
