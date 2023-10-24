// A function that takes two arrays as arguments and compares if they are a perfect match
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// A function that prints the result of eqArrays to the console
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) ? `💅 Assertion passed: ${arr1} === ${arr2}` : `💔 Assertion failed: ${arr1} !== ${arr2}`);
};

/**
 * @function letterPositions
 * @param sentence a string
 * @returns the indexed positions of each occurrence of each letter in the string
*/

const letterPositions = (sentence) => {
  const results = {};
  const lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    // if character is not a space and is not punctuation, add to results object
    if (lowerCaseSentence[i] !== " " && /[.,?!]/.test(lowerCaseSentence[i]) === false) {
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
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);

// correct index with space
assertArraysEqual(letterPositions("hello there")["t"], [6]);

// correct index with multiple spaces
assertArraysEqual(letterPositions("hello there friend")["e"], [1, 8, 10, 15]);

// punctuation is ignored
assertArraysEqual(letterPositions("Hello there! General Kenobi!")["n"], [15, 23]);

// no capital letters
assertArraysEqual(letterPositions("Hello there! General Kenobi!")["g"], [13]);

// empty string returns empty array
assertArraysEqual(letterPositions(" "), {});
