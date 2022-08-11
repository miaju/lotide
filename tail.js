const assertEqual = function(actual, expected) {

  let equal = (actual === expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {

  result = true;
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  while(result) {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        result = false;
      }
    }
    break;
  }
  return result;

};

const tail = function(arr) {
  let result = [];
  result = arr.slice(1);
  return result;

};

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];
const arr4 = ["This", "Is", "hard", "to", "come", "up", "with", "random", "arrays"];
const arr5 = [1, 2, 3, 4];

assertEqual(eqArrays(tail(arr1), ["b", "c"]), true);
assertEqual(eqArrays(tail(arr2), []), true);
assertEqual(eqArrays(tail(arr3), []), true);
assertEqual(eqArrays(tail(arr4),  ["Is", "hard", "to", "come", "up", "with", "random", "arrays"]), true);
assertEqual(eqArrays(tail(arr5),  [2, 3, 4]), true);