const assertEqual = function(actual, expected) {

  let equal = (actual === expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(input) {
  let counts = {};
  if ((typeof input) === "string") {
    input = input.toLowerCase();
    for (const letter of input) {
      if (letter.toUpperCase() !== letter.toLowerCase()) {
        if (counts[letter]) {
          counts[letter]++;
        } else {
          counts[letter] = 1;
        }
      }
    }
  }
  return counts;
};

module.exports = countLetters;

let result1 = countLetters("this is a sentence for the test");
let result2 = countLetters("");
let result3 = countLetters(123456);
let result4 = countLetters("this is a sentence for the testTTT!!@#$%?><{}");


let expected1 = {t: 5, h: 2, i: 2, s: 4, a: 1, e: 5, n: 2, c: 1, f: 1, o: 1, r: 1};
let expected2 = {};
let expected3 = {t: 8, h: 2, i: 2, s: 4, a: 1, e: 5, n: 2, c: 1, f: 1, o: 1, r: 1};


console.log("Testing with full string, no edge cases");
console.log(result1, "===?", expected1);
assertEqual(result1.t, expected1.t);
assertEqual(result1.e, expected1.e);
assertEqual(result1.f, expected1.f);
assertEqual(result1.r, expected1.r);

console.log("Testing with empty string given");
console.log(result2, "===?", expected2);
assertEqual(result2.t, undefined);

console.log("Testing with non-String data type entered");
console.log(result3, "===?", expected2);
assertEqual(result2.t, undefined);

console.log("Testing with full string with non-letters input");
console.log(result4, "===?", expected3);
assertEqual(result4.t, expected3.t);
assertEqual(result4.e, expected3.e);
assertEqual(result4.f, expected3.f);
assertEqual(result4.r, expected3.r);
assertEqual(result4["!"], expected3["!"]);