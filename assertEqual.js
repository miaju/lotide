
const assertEqual = function(actual, expected) {

  let equal = (actual === expected);
  
  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("", false);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(3,2);

