const expect = require('chai').expect;
const _ = require("../index");


describe("testing without", () => {
  let expected;
  let actual;
  it("should return array with one element removed for to remove array length of 1", () => {
    expected = [2, 3];
    actual = _.without([1, 2, 3], [1]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
  it("should just ignore elements of to the to remove array if they do not appear in the original array", () => {
    expected = ["hummus", 1];
    actual = _.without(["hummus", 1, ""], ["", "h"]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
  it("should remove all instances of an element of the to remove array if they appear more than once", () => {
    expected = [1, 3];
    actual = _.without([1, 2, 2, 2, 2, 6, 7, 3], [2, 7, 6]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
  it("should return an empty array if to remove conatins all of original array", () => {
    expected = [];
    actual = _.without([1, 2, 3], [1, 2, 3]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
  it("should return an empty array if given array is empty", () => {
    expected = [];
    actual = _.without([],[1, 2]);
    expect(_.eqArrays(expected, actual)).to.be.true;
  });
});