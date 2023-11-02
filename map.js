const assertArraysEqual = require('./assertArraysEqual');

// A function that takes in an array and a callback function as arguments
// It applies a callback function to each element of the array
// and returns a new array with the results
const map = (array, callback) => {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};

// TESTS
// // should return the first letter of each word as an array
// const words = ["kane", "the", "german", "shepherd", "doggy"];
// const result1 = map(words, word => word[0]);

// assertArraysEqual(result1, ["k", "t", "g", "s", "d"]);

// // should return the square of each number
// const numbers = [1, 3, 5, 7, 9];

// const result2 = map(numbers, number => number * number);
// assertArraysEqual(result2, [1, 9, 25, 49, 81]);

// // should return empty array
// const empty = [];
// assertArraysEqual(map(empty, em => em), []);

// // Pig latin translator 2.0!!
// const moreWords = ["pig", "latin", "is", "silly"];
// const pigLatin = map(moreWords, word => word.slice(1) + word[0] + "ay");

// assertArraysEqual(pigLatin, ["igpay", "atinlay", "siay", "illysay"]);

module.exports = map;