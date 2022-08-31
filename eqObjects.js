const eqArrays = require("./eqArrays");

const eqObjects = function(ob1, ob2) {
  let keys1 = Object.keys(ob1);
  let keys2 = Object.keys(ob2);
  let equal = true;

  if (keys1.length !== keys2.length) {
    return false;
  } else {
  
    for (const key of keys1) {
      while (equal) {
        if (Array.isArray(ob1[key])) {
          equal = eqArrays(ob1[key], ob2[key]);

        } else if (typeof ob1[key] === 'object') {
          equal = eqObjects(ob1[key], ob2[key]);

        } else if (ob1[key] !== ob2[key]) {
          equal = false;

        } break;
      }
      
    }
  }
  return equal;
};

module.exports = eqObjects;
