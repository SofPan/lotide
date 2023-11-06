const assert = require('chai').assert;
const middle = require('../index').middle;

describe("#middle", () => {
  it("returns [2] when passed [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] when passed [1, 2, 3, 4, 5]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] when passed [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [] when passed []", () => {
    assert.deepStrictEqual(middle([]), []);
  });
  it("returns [] when passed [1]", () => {
    assert.deepStrictEqual(middle([1]), []);
  });
  it("returns [] when passed [1, 2]", () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });
});