const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Empty
assertArraysEqual(middle([]), []);
// Too few
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// Odd
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// Even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);