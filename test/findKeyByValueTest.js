const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama": "The Wire"
};

const multipleMatchingValues = {
  notAMatch: "nope",
  isAMatch: "yes",
  alsoAMatch: "yes",
  somethingElse: "nothing to see here"
};

describe("#findKeyByValue", () => {
  it("returns the correct key (drama) when passing the value (The Wire)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when none of the keys match the value (That 70's show)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns undefined when passed an empty object and asked to find any value", () => {
    assert.strictEqual(findKeyByValue({}, "anything"), undefined);
  });
  it("returns the first instance of a matching value when there are multiple matches", () => {
    assert.strictEqual(findKeyByValue(multipleMatchingValues, "yes"), "isAMatch");
  });
});