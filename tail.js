const assertEqual = function(actual, expected) {

  let equal;

  if ((actual !== undefined) && (expected !== undefined)) {

    equal = (actual.toString() === expected.toString());

  } else {

    equal = (actual === expected);

  }
  
  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

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

assertEqual(tail(arr1), ["b", "c"]);
assertEqual(arr1, arr1);
assertEqual(tail(arr2), []);
assertEqual(tail(arr3), []);
assertEqual(tail(arr4),  ["Is", "hard", "to", "come", "up", "with", "random", "arrays"]);
assertEqual(tail(arr5),  [2, 3, 4]);