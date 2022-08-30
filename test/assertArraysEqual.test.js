const assertArraysEqual = require("../assertArraysEqual");
const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];
const arr5 = [1, 2, 3, 4];

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr1, arr1);
assertArraysEqual(arr5, [1, "2", 3, 4]);
assertArraysEqual(arr3, ['a']);