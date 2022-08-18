const assertEqual = function(actual, expected) {

  let equal = (actual === expected);

  if (equal) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKey = function(ob, cb) {
  for (let item in ob) {
    if (cb(ob[item])) {
      return item;
    }
  }
};



const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result1, "noma");


const result2 = findKey({
  paid: true,
  amount: 13.87,
  cardType: 'Visa'
}, x => x === 'Visa');

assertEqual(result2, 'cardType');


const result3 = findKey({
  paid: true,
  amount: 13.87,
  cardType: 'Visa'
}, x => x === false);

assertEqual(result3, undefined);


