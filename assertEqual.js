// This function compares two arguments and outputs if they are equal or not
const assertEqual = (actual, expected) => {
  console.log(actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`);
};

// Tests
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Sofia Panchaud", "Sofia Panchaud");
assertEqual("SOFIA", "Sofia");
assertEqual(1 + 1, 2);
assertEqual(20 + 5, 100);