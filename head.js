// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

// This function returns the first element of an array;
const head = (arr) => {
  return arr[0];
};

// TESTS
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), "wow!");
assertEqual(head(["one", "two", "three"]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([]), "something");