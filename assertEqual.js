
const assertEqual = function(actual, expected) {

  let equal = (actual === expected);
  
  if (equal) {
    console.log("✅ Assertion Passed: " + String(actual) + " === " + String(expected));
  } else {
    console.log("❌ Assertion Failed: " + String(actual) +  " !== " + String(expected));
  }
  

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("", false);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(3,2);


/*
let testPassCount = 0;
let testCount = 0;
 const displayResults = function(passed, testName){
  testCount++;
  if (passed) {
    console.log("Passed test: " + testName);
    testPassCount++;
  } else {
    console.log("Failed test: " + testName);
  }
  console.log();
};


*/