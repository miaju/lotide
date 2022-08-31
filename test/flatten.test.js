
const expect = require("chai").expect;
const _ = require("../index");

describe("testing flatten", () => {
  let expected;
  let actual;
  it("should return a 1d version of the given nested array", () => {
    expected = [1, 2, 3, 4, 5];
    actual = _.flatten([1, [2, 3, 4], 5]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
  it("should work on more than one depth nested", () => {
    expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    actual = _.flatten([[0,[1]],2,[3,[4,[5,6]]],[7,8,[9]]]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
});
