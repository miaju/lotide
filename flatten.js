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

const flatten = function(arr, result = []) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      flatten(element, result);
    } else {
      result.push(element);
    }
  } return result;
};

module.exports = flatten;


let expected = [1, 2, 3, 4, 5];
let actual = flatten([1, [2, 3, 4], 5]);
assertArraysEqual(expected, actual);

expected = [1, 2, 3, 4, 5];
actual = flatten([1, [2], [3, 4], 5]);
assertArraysEqual(actual, expected);

expected = [0, 1, 2, 3];
actual = flatten([[0, 1], [2, [3]]]);
assertArraysEqual(actual, expected);

expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
actual = flatten([[0,[1]],2,[3,[4,[5,6]]],[7,8,[9]]]);
assertArraysEqual(actual, expected);