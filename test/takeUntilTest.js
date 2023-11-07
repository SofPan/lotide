const assert = require('chai').assert;
const takeUntil = require('../index').takeUntil;

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] when the callback condition is to take until the number is less than zero", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepStrictEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] when the callback condition is to take until it arrives at a comma", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepStrictEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
  it("returns the entire array when the callback condition is never met", () => {
    const data3 = [1, 2, 3, 4, 5];
    const results3 = takeUntil(data3, x => x < 0);
    assert.deepStrictEqual(results3, data3);
  });
});