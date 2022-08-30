const takeUntil = require("../takeUntil");
const expect = require("chai").expect;
const eqArrays = require("../eqArrays");

describe("tesing takeUntil", () => {
  let data;
  let results;
  it("should return array up to (exclusive) the element that returns a truthy value from the callback function", () => {
    data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    results = takeUntil(data, x => x < 0);
    expect(eqArrays(results, [ 1, 2, 5, 7, 2 ])).to.be.true;
  });
  it("should return entire given array if callback function is never truthy on original array", () => {
    data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    results = takeUntil(data, item => item.length === 3);
    expect(eqArrays(data, results)).to.be.true;
  });
  it("should return an empty array if the first value of the given array is truthy", () => {
    data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    results = takeUntil(data, x => x === 1);
    expect(eqArrays(results, [])).to.be.true;
  });
});
