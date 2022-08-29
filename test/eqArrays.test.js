const assertEqual = require('../assertEqual');
const eqArrays = require("../eqArrays");

const arr2 = [];
const arr3 = ["a"];
const arr4 = ["This", "Is", "hard", "to", "come", "up", "with", "random", "arrays"];


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(arr3, arr4), false);
assertEqual(eqArrays(arr2, []), true);