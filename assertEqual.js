
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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("", false);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(3, 2);

assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual("Lighthouse Labs", "lighthouse labs");
assertEqual([], ["a"]);
assertEqual(undefined, [undefined]);
assertEqual(undefined, undefined);