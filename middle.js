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

const middle = function(arr) {
  let result = [];
  
  if (arr.length <= 2) {
    return result;
  } else {
    if (!(arr.length % 2)) {
      result.push(arr[(arr.length / 2) - 1]);
      result.push(arr[arr.length / 2]);
    } else {
      result.push(arr[Math.floor(arr.length / 2)]);
    }
  } return result;

};


let expected = [2, 3];
let actual = middle([1, 2, 3, 4]);
assertArraysEqual(actual, expected);

expected = [3];
actual = middle([1, 2, 3, 4, 5]);
assertArraysEqual(actual, expected);

expected = [];
actual = middle([1]);
assertArraysEqual(actual, expected);

actual = middle([1, 2]);
assertArraysEqual(actual, expected);

actual = middle([]);
assertArraysEqual(actual, expected);

expected = [4, 5];
actual = middle([1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(actual, expected);

expected = [4];
actual = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(actual, expected);
