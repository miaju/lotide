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


const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter.toUpperCase() !== letter.toLowerCase()) {
      if (result[letter]) {
        result[letter].push(i);

      } else {
        result[letter] = [i];

      }
    }
  }
  
  return result;

};
module.exports = letterPositions;

let expected = {h: [0], e: [1], l: [2, 3], 0: [4]};
let result = letterPositions('hello');

assertArraysEqual(expected.h, result.h);
assertArraysEqual(expected.l,result.l);


let result1 = letterPositions("this is a sentence for the test");
let result2 = letterPositions("");
let result3 = letterPositions(123456);
let result4 = letterPositions("this is a sentence for the test!!@#$%?><{}");


let expected1 = {t: [0, 13, 23, 27, 30], h: [1, 24], i: [2, 5], s: [3, 6, 10, 29], a: [8],
  e: [11, 14, 17, 25, 28], n: [12, 15], c: [16], f: [19], o: [20], r: [21]};
let expected2 = {};


console.log("\nTesting with full string, no edge cases");
console.log(result1, "===?", expected1);
assertArraysEqual(result1.t, expected1.t);
assertArraysEqual(result1.e, expected1.e);
assertArraysEqual(result1.f, expected1.f);
assertArraysEqual(result1.r, expected1.r);

console.log("\nTesting with empty string given");
console.log(result2, "===?", expected2);
console.log(typeof result2.t, typeof undefined);
assertArraysEqual(result2.t, undefined);

console.log("\nTesting with non-String data type entered");
console.log(result3, "===?", expected2);
assertArraysEqual(result2.t, undefined);

console.log("\nTesting with full string with non-letters input");
console.log(result4, "===?", expected1);
assertArraysEqual(result4.t, expected1.t);
assertArraysEqual(result4.e, expected1.e);
assertArraysEqual(result4.f, expected1.f);
assertArraysEqual(result4.r, expected1.r);
assertArraysEqual(result4["!"], expected1["!"]);

