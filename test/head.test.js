const _ = require("../index");
const expect = require('chai').expect;

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];


describe("testing head", () => {
  it(`should return a for ${arr1}`, () => {
    expect(_.head(arr1)).to.equal("a");
  });
  it('should return undefined for empty array', () => {
    expect(_.head(arr2)).to.be.undefined;
  });
  it(`should return a for ${arr3}`, () => {
    expect(_.head(arr3)).to.equal("a");
  });
});
