// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

// This function returns every element in an array except the head
const tail = (arr) => {
  return arr.slice(1);
};

// This function maps over the input arrays (original and tail), and compares each element individually

const mapToAssertEqual = (original, modified) => {
  return original.map((a, i) => {
    if (i !== 0) {
      assertEqual(a, modified[i - 1]);
    }
  });
};

// TESTS
const words = ["word", "wordy", "wordiest"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["word", 2, false, 4, "wordy", true, true];
const empty = [];
const oneElement = [1];

// Test that the original array in unchanged
tail(words);
assertEqual(words.length, 3);

// passing test cases
mapToAssertEqual(words, tail(words));
mapToAssertEqual(numbers, tail(numbers));
mapToAssertEqual(mixed, tail(mixed));

// should return empty array
console.log(tail(oneElement));
console.log(tail(empty));

// failing test cases
mapToAssertEqual(words, tail(numbers));


