const eqArrays = function(arr1, arr2) {

  let result = true;
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  while (result) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
    break;
  }
  return result;

};

const assertArraysEqual = function(actual, expected) {

  let equal = eqArrays(actual, expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}. If these seem to be the same, check the types of the values in the arrays.`);
  }

};

const without = function(original, toRemove) {

  let result = [];
  

  for (let o of original) {
    let isIn = false;
    for (let r of toRemove) {
      if (o === r) {
        isIn = true;
      }
    }
    if (!isIn) {
      result.push(o);
    }
  }
  return result;
};

let expected;
let actual;


expected = [2, 3];
actual = without([1, 2, 3], [1]);
assertArraysEqual(expected, actual);

expected = ["1", "2"];
actual = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(expected, actual);
assertArraysEqual(actual, actual);

expected = ["hummus", 1];
actual = without(["hummus", 1, ""], ["", "h"]);
assertArraysEqual(expected, actual);


expected = [1, 3];
actual = without([1, 2, 2, 2, 2, 6, 7, 3], [2, 7, 6]);
assertArraysEqual(expected, actual);

expected = [];
actual = without([1], [1]);
assertArraysEqual(expected, actual);

