// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

// This function returns every element in an array except the head
const tail = (arr) => {
  return arr.slice(1);
};

// TESTS
const words = ["word", "wordy", "wordiest"];
const empty = [];
const oneElement = [1];

// Test that the original array in unchanged
tail(words);
assertEqual(words.length, 3);

// passing test cases
assertEqual(words.length - 1, tail(words).length);
assertEqual("wordy", tail(words)[0]);
assertEqual("wordiest", tail(words)[1]);
assertEqual(0, tail(empty).length);
assertEqual(0, tail(oneElement).length);

// failing test cases
assertEqual(tail(words)[0], "word");
assertEqual(tail(words).length, 3);

