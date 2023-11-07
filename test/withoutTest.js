const assert = require('chai').assert;
const without = require('../index').without;

describe("#without", () => {
  it("returns [2, 3] when filtering for [1] in [1, 2, 3]", () => {
    assert.deepStrictEqual(without([1, 2, 3], [1]), [2, 3]);

    it("returns [1, 2, '3', 4] when filtering for [3, '5', 5] in [1, 2, '3', 4, 5]", () => {
      assert.deepStrictEqual(without([1, 2, "3", 4, 5], [3, "5", 5]), [1, 2, "3", 4]);
    });
    it("returns an array with a single element ([5]) when all the other elements have been filtered out", () => {
      assert.deepStrictEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4]), [5]);
    });
    it("returns an empty array when passed nested empty arrays", () => {
      assert.deepStrictEqual(without([[], []]), []);
    });
    it("returns a new array, the original array is not modified", () => {
      const originalArray = ["a", "b", "c"];
      without(originalArray, ["b"]);
      assert.deepStrictEqual(originalArray, ["a", "b", "c"]);
    });
  });
});