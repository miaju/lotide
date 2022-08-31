const countLetters = require("../countLetters");
const expect = require("chai").expect;
const eqObjects = require("../eqObjects");

describe("testing countLetters", () => {
  let expected;
  let result;
  it("should return object with the values being how many times each letter appears", () => {
    expected = {t: 5, h: 2, i: 2, s: 4, a: 1, e: 5, n: 2, c: 1, f: 1, o: 1, r: 1};
    result = countLetters("this is a sentence for the test");
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should treat uppercase and lowercase the same", () => {
    expected = {t: 5, h: 2, i: 2, s: 4, a: 1, e: 5, n: 2, c: 1, f: 1, o: 1, r: 1};
    result = countLetters("this is a senTencE for the tEst");
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object for an empty string given", () => {
    expected = {};
    result = countLetters("");
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object if non-string given", () => {
    expected = {};
    result = countLetters(123456);
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should ignore non-letter items in the given string", () => {
    expected = countLetters("this is a sentence for the test");
    result = countLetters("this is a sentence for the test!!@#$%?><{}");
    expect(eqObjects(expected, result)).to.be.true;
  });
});
