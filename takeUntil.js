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


const takeUntil = function(array, callback) {
  let result = [];
  
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

const result3 = takeUntil(data2, item => (item.length === 2));
const result4 = takeUntil(data2, item => item.length === 3);

assertArraysEqual(result3, ["I've", "been"]);
assertArraysEqual(result4, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);

const result5 = takeUntil(data1, x => Array.isArray(x));

assertArraysEqual(result5, [1, 2, 5, 7, 2, -1, 2, 4, 5]);

const result6 = takeUntil(data1, x => x === 1);

assertArraysEqual(result6, []);

const data3 = ['', '', '', '', 'BOO!', '', ''];
const result7 = takeUntil(data3, x => x);
assertArraysEqual(result7, ['', '', '', '']);