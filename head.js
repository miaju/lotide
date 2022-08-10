
const assertEqual = function(actual, expected) {

  let equal = (actual === expected);
  
  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};


const head = function(arr) {
  return arr[0];
};

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];

assertEqual(head(arr1), "a");
assertEqual(head(arr2), undefined);
assertEqual(head(arr3), "a");