const assertArraysEqual = require('./assertArraysEqual');

/**
 * @function letterPositions
 * @param sentence a string
 * @returns the indexed positions of each occurrence of each letter in the string
*/

const letterPositions = (sentence) => {
  const results = {};
  const lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    // if character is a letter, add to results
    if (/[a-z]/.test(lowerCaseSentence[i])) {
      if (!results[lowerCaseSentence[i]]) {
        results[lowerCaseSentence[i]] = [i];
      } else {
        results[lowerCaseSentence[i]].push(i);
      }
    }
  }
  return results;
};

// TESTS
// assertArraysEqual(letterPositions("hello")["l"], [2, 3]);

// // correct index with space
// assertArraysEqual(letterPositions("hello there")["t"], [6]);

// // correct index with multiple spaces
// assertArraysEqual(letterPositions("hello there friend")["e"], [1, 8, 10, 15]);

// // punctuation is ignored
// assertArraysEqual(letterPositions("Hello there! General Kenobi!")["n"], [15, 23]);

// // no capital letters
// assertArraysEqual(letterPositions("Hello there! General Kenobi!")["g"], [13]);

// // empty string returns empty array
// assertArraysEqual(letterPositions(" "), {});

module.exports = letterPositions;