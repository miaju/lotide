
const expect = require("chai").expect;
const _ = require("../index");

describe("testing letterPositions", () => {
  let expected;
  let result;
  it("should return object with the values being where in the given string each letter appears", () => {
    expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    result = _.letterPositions('hello');
    expect(_.eqObjects(expected, result)).to.be.true;
  });
  it("should treat uppercase and lowercase the same", () => {
    expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    result = _.letterPositions('helLo');
    expect(_.eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object for an empty string given", () => {
    expected = {};
    result = _.letterPositions("");
    expect(_.eqObjects(expected, result)).to.be.true;
  });
  it("should return an empty object if non-string given", () => {
    expected = {};
    result = _.letterPositions(123456);
    expect(_.eqObjects(expected, result)).to.be.true;
  });
  it("should ignore non-letter items in the given string", () => {
    expected = _.letterPositions("this is a sentence for the test");
    result = _.letterPositions("this is a sentence for the test!!@#$%?><{}");
    expect(_.eqObjects(expected, result)).to.be.true;
  });
});
