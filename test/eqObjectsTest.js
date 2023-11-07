const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe("#eqObjects", () => {
  it("returns true when objects are a perfect match", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false when objects do not match", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns true when objects are a perfect match, with arrays", () => {
    assert.strictEqual(eqObjects({ a: [1, 2], b: 0 }, { a: [1, 2], b: 0 }), true);
  });
  it("returns false when objects do not match, with arrays", () => {
    assert.strictEqual(eqObjects({ a: [1, 2], b: 0 }, { a: [1, 2, 3], b: 0 }), false);
  });
});