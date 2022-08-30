const letterPositions = require("../letterPositions");
const expect = require("chai").expect;
const eqObjects = require("../eqObjects");

describe("testing letterPositions", () => {
  let expected;
  let result;
  it("should return object with the values being where in the given string each letter appears", () => {
    expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    result = letterPositions('hello');
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should treat uppercase and lowercase the same", () => {
    expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    result = letterPositions('helLo');
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object for an empty string given", () => {
    expected = {};
    result = letterPositions("");
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object if non-string given", () => {
    expected = {};
    result = letterPositions(123456);
    expect(eqObjects(expected, result)).to.be.true;
  });
  it("should ignore non-letter items in the given string", () => {
    expected = letterPositions("this is a sentence for the test");
    result = letterPositions("this is a sentence for the test!!@#$%?><{}");
    expect(eqObjects(expected, result)).to.be.true;
  });
});
