const assert = require('chai').assert;
const findKey = require('../index').findKey;

const object1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

const object2 = findKey({
  name: "Kane",
  breed: "GSD",
  barks: "very loudly",
}, x => x.color === "black and tan");

describe("#findKey", () => {
  it("returns the correct value (noma) when two keys match the callback condition", () => {
    assert.strictEqual(object1, "noma");
  });
  it("returns undefined when none of the keys match the callback condition", () => {
    assert.strictEqual(object2, undefined);
  });
});