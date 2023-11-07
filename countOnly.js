/**
  * @function countOnly takes an array of strings and an object of items to count, then returns the total for the specified subset of those items
  * @param allItems an array of strings
  * @param itemsToCount an object for a subset of items to be counted
*/
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    // Check if the current item exists in the itemsToCount object
    if (itemsToCount[item]) {
      // if the key does not exist, create and set value to 1, otherwise increment value by 1
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item] += 1;
      }
    }
  }

  return results;
};
module.exports = countOnly;



