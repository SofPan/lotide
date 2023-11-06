// Compare two arguments and output if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;