const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {

  it("should return 1 when counting a single name (Jason)", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("should return undefined when counting a name that does not exist in the object (Karima)", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("should return 2 when counting a name that appears twice (Fang)", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("should return undefined when a name is specified false (Agouhanna)", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});