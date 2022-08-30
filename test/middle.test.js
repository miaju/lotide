const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

let expected = [2, 3];
let actual = middle([1, 2, 3, 4]);
assertArraysEqual(actual, expected);

expected = [3];
actual = middle([1, 2, 3, 4, 5]);
assertArraysEqual(actual, expected);

expected = [];
actual = middle([1]);
assertArraysEqual(actual, expected);

actual = middle([1, 2]);
assertArraysEqual(actual, expected);

actual = middle([]);
assertArraysEqual(actual, expected);

expected = [4, 5];
actual = middle([1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(actual, expected);

expected = [4];
actual = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(actual, expected);
