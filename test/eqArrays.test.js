const expect = require("chai").expect;
const eqArrays = require("../eqArrays");

const arr2 = [];
const arr3 = ["a"];
const arr4 = ["This", "Is", "hard", "to", "come", "up", "with", "random", "arrays"];


describe("testing eqArrays", () => {
  it("should return true for arrays with all elements strictly equal", () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });
  it("should return false if the elements aren't in the same order", () => {
    expect(eqArrays([1, 2, 3], [3, 2, 1])).to.be.false;
  });
  it("should return false if the elements are not the same type", () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.be.false;
  });
  it("should return false if the arrays are of different lengths", () => {
    expect(eqArrays(arr3, arr4)).to.be.false;
  });
  it("should return true if both are the empty array", () => {
    expect(eqArrays(arr2, [])).to.be.true;
  });
  it("should work with nested arrays being the same", () => {
    expect(eqArrays([1, [2, 3], [4, [5]]],[1, [2, 3], [4, [5]]])).to.be.true;
  });
  it("should work with nested arrays being different", () => {
    expect(eqArrays([1, [2, 3], [4, [6]]],[1, [2, 3], [4, [5]]])).to.be.false;
  });
});



