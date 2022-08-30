
const assertEqual = function(actual, expected) {

  let equal = (actual === expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKeyByValue = function(lookIn, toFind) {
  let result;
  const keys = Object.keys(lookIn);
  for (const item of keys) {
    if (lookIn[item] === toFind) {
      result = item;
    }
  }
  
  return result;

};
module.exports = findKeyByValue;

const alphabet = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f"
};

const empty = {

};

const nums = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: "4"
};


assertEqual(findKeyByValue(alphabet, "b"), "2");
assertEqual(findKeyByValue(alphabet, "m"), undefined);
assertEqual(findKeyByValue(empty, "anything"), undefined);
assertEqual(findKeyByValue(alphabet, "c"), "3");
assertEqual(findKeyByValue(nums, 4), "4");
assertEqual(findKeyByValue(nums, "4"), "5");


