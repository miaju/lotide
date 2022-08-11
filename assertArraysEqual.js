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
    console.log(`✅Assertion Passed`);
  } else {
    console.log(`❌ Assertion Failed`);
  }

};

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];
const arr5 = [1, 2, 3, 4];

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr1, arr1);
assertArraysEqual(arr5, [1, "2", 3, 4])
assertArraysEqual(arr3, ['a']);