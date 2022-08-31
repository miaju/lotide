const expect = require("chai").expect;
const _ = require("../index");

describe("testing middle", () => {
  it("should return middle two values of an even length array", () => {
    expect(_.eqArrays(_.middle([1, 2, 3, 4]),[2,3])).to.be.true;
  });
  it("should return the middle value of an odd length array", () => {
    expect(_.eqArrays(_.middle([1, 2, 3, 4, 5]),[3])).to.be.true;
  });
  it("should return an empty array for an array with length 1", () => {
    expect(_.eqArrays(_.middle([1]), [])).to.be.true;
  });
  it("should return an empty array for an empty array", () => {
    expect(_.eqArrays(_.middle([]), [])).to.be.true;
  });
});
