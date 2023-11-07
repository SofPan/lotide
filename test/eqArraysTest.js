const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;

describe("#eqArrays", () => {
  it("returns true when nested arrays match perfectly", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false when nested arrays do not match", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns false when arrays are mixed with numbers", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});