const eqArrays = require("../eqArrays");
const expect = require("chai").expect;
const map = require("../map");

const words = ["beans", "fjord", "cable", "dictionary", "elephant"];
const mixed = [1, 'pie', 3.6, true, [1, 20]];

describe("testing map", () => {
  let actual;
  let expected;
  it('should return an array that contains the elements of the original array put through a callback function', () => {
    actual = map(words, word => word[0]);
    expected = ['b', 'f', 'c', 'd', 'e'];
    expect(eqArrays(actual, expected)).to.be.true;
  });
  it("should return all elements of an array toUpperCase if given call back is return toUpperCase", () => {
    actual = map(words, word => word.toUpperCase());
    expected = ['BEANS', 'FJORD', 'CABLE', 'DICTIONARY', 'ELEPHANT'];
    expect(eqArrays(actual, expected)).to.be.true;
  });
  it("should work on a mixed array", () => {
    actual = map(mixed, item => (Array.isArray(item)));
    expected = [false, false, false, false, true];
    expect(eqArrays(actual, expected)).to.be.true;
  });
});
