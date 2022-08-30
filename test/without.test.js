const expect = require('chai').expect;
const without = require("../without");
const eqArrays = require("../eqArrays");


describe("testing without", () => {
  let expected;
  let actual;
  it("should return array with one element removed for to remove array length of 1", () => {
    expected = [2, 3];
    actual = without([1, 2, 3], [1]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
  it("should just ignore elements of to the to remove array if they do not appear in the original array", () => {
    expected = ["hummus", 1];
    actual = without(["hummus", 1, ""], ["", "h"]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
  it("should remove all instances of an element of the to remove array if they appear more than once", () => {
    expected = [1, 3];
    actual = without([1, 2, 2, 2, 2, 6, 7, 3], [2, 7, 6]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
  it("should return an empty array if to remove conatins all of original array", () => {
    expected = [];
    actual = without([1, 2, 3], [1, 2, 3]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
  it("should return an empty array if given array is empty", () => {
    expected = [];
    actual = without([],[1, 2]);
    expect(eqArrays(expected, actual)).to.be.true;
  });
});