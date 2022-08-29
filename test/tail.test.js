const assertEqual = require('../assertEqual');
const tail = require("../tail");
const eqArrays = require("../eqArrays");

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];
const arr4 = ["This", "Is", "hard", "to", "come", "up", "with", "random", "arrays"];
const arr5 = [1, 2, 3, 4];

assertEqual(eqArrays(tail(arr1), ["b", "c"]), true);
assertEqual(eqArrays(tail(arr2), []), true);
assertEqual(eqArrays(tail(arr3), []), true);
assertEqual(eqArrays(tail(arr4),  ["Is", "hard", "to", "come", "up", "with", "random", "arrays"]), true);
assertEqual(eqArrays(tail(arr5),  [2, 3, 4]), true);