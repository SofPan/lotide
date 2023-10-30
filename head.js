const assertEqual = require('./assertEqual');

// This function returns the first element of an array;
const head = (arr) => {
  return arr[0];
};

// TESTS
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), 3);
assertEqual(head(["one", "two", "three"]), "two");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([]), "something");

module.exports = head;