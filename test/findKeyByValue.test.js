const expect = require("chai").expect;
const findKeyByValue = require("../findKeyByValue");

const alphabet = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f"
};

const empty = {};

const nums = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: "4"
};

describe("testing findKeyByValue", () => {
  it("should find the key whose value strictly equals the given value", () => {
    expect(findKeyByValue(nums, "4")).to.equal("5");
  });
  it("should return undefined if the given value doen't appear in the given object", () => {
    expect(findKeyByValue(alphabet, "m")).to.be.undefined;
  });
  it("should return undefined if the given array is empty", () => {
    expect(findKeyByValue(empty, "anything")).to.be.undefined;
  });
});

