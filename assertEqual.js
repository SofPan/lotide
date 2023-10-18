const assertEqual = (actual, expected) => {
  return actual === expected ? `💅 Assertion passed: ${actual} === ${expected}`
    : `💔 Assertion failed: ${actual} !== ${expected}`;
};

// Tests
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Sofia Panchaud", "Sofia Panchaud"));
console.log(assertEqual("SOFIA", "Sofia"));
console.log(assertEqual(1 + 1, 2));
console.log(assertEqual(20 + 5, 100));