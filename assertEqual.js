const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("💅 Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("💔 Assertion failed: " + actual + " !== " + expected);
  }
};

// Tests
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Sofia Panchaud", "Sofia Panchaud");
assertEqual("SOFIA", "Sofia");
assertEqual(1 + 1, 2);
assertEqual(20 + 5, 100);