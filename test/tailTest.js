const assert = require('chai').assert;
const tail = require('../index').tail;

const words = ["word", "wordy", "wordiest"];
const empty = [];
const oneElement = [1];

describe("#tail", () => {
  it("returns the correct array length", () => {
    assert.equal(words.length - 1, tail(words).length);
  });
  it("does not alter the original array", () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("returns 'wordy' as the first element in the new array", () => {
    assert.strictEqual("wordy", tail(words)[0]);
  });
  it("returns 'wordiest' as the second element of the new array", () => {
    assert.strictEqual("wordiest", tail(words)[1]);
  });
  it("returns an empty array when passed an empty array", () => {
    assert.strictEqual(0, tail(empty).length);
  });
  it("returns an empty array when there is only one element in an array to start", () => {
    assert.strictEqual(0, tail(oneElement).length);
  });
  it("returns a matching array of elements", () => {
    assert.deepStrictEqual(["wordy", "wordiest"], tail(words));
  });
});