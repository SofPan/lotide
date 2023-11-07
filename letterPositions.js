/**
 * @function letterPositions takes in a string and returns the indexed positions of each occurrence of each letter in the string
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
  return Object.keys(results).length > 0 ? results : [];
};

module.exports = letterPositions;