// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

/**
 * @function countLetters A function that takes in a string and returns a count of each letter in that string
 * @param sentence a string with spaces
 * @returns an object with a count of each letter
*/
const countLetters = (sentence) => {
  const result = {};
  for (const letter of sentence) {
    // if the letter exists (not a space)
    if (letter) {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  return result;
};

// TESTS
const oneWord = "hello";
const resultOneWord = countLetters(oneWord);
assertEqual(resultOneWord["l"], 2);

const withSpace = "hello there";
const resultWithSpace = countLetters(withSpace);
assertEqual(resultWithSpace["e"], 3);
// test that spaces did not get counted
assertEqual(resultWithSpace[" "], undefined);

const onlySpace = "     ";
const resultOnlySpace = countLetters(onlySpace);
assertEqual(resultOnlySpace[" "], undefined);