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

module.exports = findKey;
