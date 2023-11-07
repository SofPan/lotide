/**
 * @function takeUntil takes two arguments, an array and a callback function
 * @param array an array of any kind of items
 * @param callback an anonymous callback function
 * @returns a slice of the array with elements taken from the beginning until the callback output, or the entire array if the callback condition is not met
 */
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

module.exports = takeUntil;