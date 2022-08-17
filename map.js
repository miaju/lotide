const eqArrays = function(arr1, arr2) {

  let result = true;
  if ((arr1 === undefined) && (arr2 === undefined)) {
    return result;
  } else if ((arr1 === undefined) || (arr2 === undefined)) {
    return false;
  } else if (arr1.length !== arr2.length) {
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["beans", "fjord", "cable", "dictionary", "elephant"];
const mixed = [1, 'pie', 3.6, true, [1, 20]];

let actual = map(words, word => word[0]);
let expected = ['b', 'f', 'c', 'd', 'e'];
assertArraysEqual(actual, expected);

actual = map(words, word => word.length);
expected = [5, 5, 5, 10, 8];
assertArraysEqual(actual, expected);

actual = map(words, word => word[word.length - 1]);
expected = ['s', 'd', 'e', 'y', 't'];
assertArraysEqual(actual, expected);

actual = map(words, word => word.toUpperCase());
expected = ['BEANS', 'FJORD', 'CABLE', 'DICTIONARY', 'ELEPHANT'];
assertArraysEqual(actual, expected);

actual = map(mixed, item => (typeof(item)));
expected = ['number', 'string', 'number', 'boolean', 'object'];
assertArraysEqual(actual, expected);

actual = map(mixed, item => (Array.isArray(item)));
expected = [false, false, false, false, true];
assertArraysEqual(actual, expected);