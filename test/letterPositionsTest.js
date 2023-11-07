const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

describe("#letterPositions", () => {
  it("returns [2,3] when searching for the positions of 'l' in 'hello'", () => {
    assert.deepStrictEqual(letterPositions("hello")["l"], [2, 3]);
  });
  it("returns [6] when searching for the position of 't' when there is a space in the string", () => {
    assert.deepStrictEqual(letterPositions("hello there")["t"], [6]);
  });
  it("returns all positions of the letter 'e' when there are multiple spaces in the string", () => {
    assert.deepStrictEqual(letterPositions("hello there friend")["e"], [1, 8, 10, 15]);
  });
  it("ignores punctuation", () => {
    assert.deepStrictEqual(letterPositions("Hello there! General Kenobi!")["n"], [15, 23]);
  });
  it("ignores capitalization and counts the appropriate letter", () => {
    assert.deepStrictEqual(letterPositions("Hello there! General Kenobi!")["g"], [13]);
  });
  it("returns an empty array when an empty string is passed", () => {
    assert.deepStrictEqual(letterPositions(" "), []);
  });
});