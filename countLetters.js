/**
 * @function countLetters A function that takes in a string and returns a count of each letter in that string
 * @param sentence a string with spaces
 * @returns an object with a count of each letter
*/
const countLetters = (sentence) => {
  const result = {};
  for (const letter of sentence) {
    // if the letter exists (not a space)
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;