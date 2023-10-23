// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

/**
  * A function that takes in a collection of items and returns a count for a specific subset of those items
  * @param allItems an array of strings
  * @param itemsToCount an object for a subset of items to be counted
*/
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    // if the key does not exist, create and set value to 1, otherwise increment value by 1
    !results[item] ? results[item] = 1 : results[item] += 1;
  }
  console.log(results);

  return results;
};

// TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



