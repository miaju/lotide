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


const eqObjects = function(ob1, ob2) {
  let keys1 = Object.keys(ob1);
  let keys2 = Object.keys(ob2);
  let equal = true;

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    while (equal) {
      for (const key of keys1) {
        if (Array.isArray(ob1[key])) {
          equal = eqArrays(ob1[key], ob2[key]);
          
        } else if (ob1[key] !== ob2[key]) {
          equal = false;
        }
      } break;
    }
  }
  return equal;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const equal = eqObjects(actual, expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = {
  a: "1",
  b: "2"
};

const abc = {
  a: "1",
  b: "2",
  c: "3"
};

const ba = {
  b: "2",
  a: "1"
};

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};


assertObjectsEqual(ab, ba);
assertObjectsEqual(abc, ab);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd2, abc);