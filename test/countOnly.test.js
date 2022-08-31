const { expect } = require("chai");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("testing countOnly", () => {
  it("should return object that contains how many times each item occurs in the given array", () => {
    expect(result["Jason"]).to.equal(1);
  });
  it("the resulting object shouldn't have any keys that do not show up in the array", () => {
    expect(result["Karima"]).to.be.undefined;
  });
  it("should count an item more than once if it appears more than once", () => {
    expect(result["Fang"]).to.equal(2);
  });
  it("the resulting object should not have any keys of items not wanted to be counted", () => {
    expect(result["Agouhanna"]).to.be.undefined;
  });

});
