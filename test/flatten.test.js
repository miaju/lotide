const flatten = require("../flatten");
const expect = require("chai").expect;
const eqArrays = require("../eqArrays");

describe("testing flatten", () => {
  let expected;
  let actual;
  it("should return a 1d version of the given nested array", () => {
    expected = [1, 2, 3, 4, 5];
    actual = flatten([1, [2, 3, 4], 5]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
  it("should work on more than one depth nested", () => {
    expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    actual = flatten([[0,[1]],2,[3,[4,[5,6]]],[7,8,[9]]]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
});
