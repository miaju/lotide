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

/*

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

const und = {
  1: undefined,
  2: "2"
};

const und2 = {
  2: "2",
  1: undefined
};

const gh = {
  g: {
    id: 'g',
    position: 7
  },

  h: {
    id: "h",
    position: 8
  }
};

const hg = {
  h: {
    id: "h",
    position: 8
  },
  g: {
    id: 'g',
    position: 7
  }
};

const gh2 = {
  g: "g",
  h: {
    id: "h",
    position: 8
  }
};

const long = {
  a: {
    b: {
      c: "c"
    }
  },
  d: {
    e: {
      f: 'f'
    }
  }
};

const long2 = {
  a: {
    b: {
      c: "c"
    }
  },
  d: {
    e: {
      f: 'h'
    }
  }
};

let expected = false;
let actual = eqObjects(ab, abc);
assertEqual(actual, expected);

expected = true;
actual = eqObjects(ab, ba);
assertEqual(actual, expected);

expected = true;
actual = eqObjects(cd, dc);
assertEqual(actual, expected);

expected = false;
actual = eqObjects(cd, cd2);
assertEqual(actual, expected);

expected = false;
actual = eqObjects(dc, cd2);
assertEqual(actual, expected);

expected = true;
actual = eqObjects(und, und2);
assertEqual(actual, expected);

expected  = true;
actual = eqObjects(gh, hg);
assertEqual(actual, expected);

expected = false;
actual = eqObjects(gh, gh2);
assertEqual(actual, expected);

expected = false;
actual = eqObjects(gh2, gh);
assertEqual(actual, expected);

expected = false;
actual = eqObjects(long, long2);
assertEqual(actual, expected);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
*/