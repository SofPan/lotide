const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe("#flatten", () => {
  it("returns a 1D array of numbers when passed nested arrays of numbers", () => {
    assert.deepStrictEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns a 1D array of mixed elements when passed nested arrays of mixed elements", () => {
    assert.deepStrictEqual(flatten([[1, 2, 3], ["a", "b", "c"]]), [1, 2, 3, "a", "b", "c"]);
  });
  it("returns an array with an empty string when passed empty arrays and arrays of empty strings", () => {
    assert.deepStrictEqual(flatten([[], [""]]), [""]);
  });
  it("returns an empty array when passed nested empty arrays", () => {
    assert.deepStrictEqual(flatten([[], []]), []);
  });
});