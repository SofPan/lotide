const assert = require('chai').assert;
const map = require('../index').map;

describe("#map", () => {
  it("returns the first letter of each word as an array", () => {
    const words = ["kane", "the", "german", "shepherd", "doggy"];
    const result1 = map(words, word => word[0]);
    assert.deepStrictEqual(result1, ["k", "t", "g", "s", "d"]);
  });
  it("returns the square of each number", () => {
    const numbers = [1, 3, 5, 7, 9];
    const result2 = map(numbers, number => number * number);
    assert.deepStrictEqual(result2, [1, 9, 25, 49, 81]);
  });
  it("returns an empty array", () => {
    const empty = [];
    assert.deepStrictEqual(map(empty, em => em), []);
  });
  it("returns an array of pig latin translated words", () => {
    const words = ["pig", "latin", "is", "silly"];
    const pigLatin = map(words, word => word.slice(1) + word[0] + "ay");
    assert.deepStrictEqual(pigLatin, ["igpay", "atinlay", "siay", "illysay"]);
  });
});