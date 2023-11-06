const assert = require('chai').assert;
const countLetters = require('../index').countLetters;

describe("#countLetters", () => {
  it("returns 2 when counting the letter l in 'hello'", () => {
    assert.strictEqual(countLetters("hello")["l"], 2);
  });
  it("ignores spaces and returns 3 when counting the letter e in 'hello there'", () => {
    assert.strictEqual(countLetters("hello there")["e"], 3);
  });
  it("returns undefined for spaces", () => {
    assert.strictEqual(countLetters("hello there")[" "], undefined);
  });
});