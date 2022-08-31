const expect = require("chai").expect;
const _ = require("../index");

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];
const arr4 = ["This", "Is", "hard", "to", "come", "up", "with", "random", "arrays"];

describe("testing tail", () => {
  it('returns array with last 2 elements of a 3 element array', () => {
    expect(_.eqArrays(_.tail(arr1), ["b", "c"])).to.be.true;
  });
  it("returns an empty array when given an empty array", () => {
    expect(_.eqArrays(_.tail(arr2), [])).to.be.true;
  });
  it("returns an empty array for given array of 1 element", () => {
    expect(_.eqArrays(_.tail(arr3), [])).to.be.true;
  });
  it("returns array with all but the  zeroth element of a 9 element array", () => {
    expect(_.eqArrays(_.tail(arr4),  ["Is", "hard", "to", "come", "up", "with", "random", "arrays"])).to.be.true;
  });
});
