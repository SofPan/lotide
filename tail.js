const assertEqual = require('./assertEqual');

// This function returns every element in an array except the head
const tail = (arr) => {
  return arr.slice(1);
};

// TESTS
// const words = ["word", "wordy", "wordiest"];
// const empty = [];
// const oneElement = [1];

// // Test that the original array in unchanged
// tail(words);
// assertEqual(words.length, 3);

// // Test that the array is the correct length
// assertEqual(words.length - 1, tail(words).length);
// // Test that the first index of the tail array is correct
// assertEqual("wordy", tail(words)[0]);
// // Test another index of the tail array is correct
// assertEqual("wordiest", tail(words)[1]);
// // Test for an empty array when expected
// assertEqual(0, tail(empty).length);
// assertEqual(0, tail(oneElement).length);

// // Test that the wrong index was not pulled in
// assertEqual(tail(words)[0], "word");
// // Test that the array not too long
// assertEqual(tail(words).length, 3);

module.exports = tail;