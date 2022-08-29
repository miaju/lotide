const head = require('../head');
const assertEqual = require('../assertEqual');

const arr1 = ["a","b","c"];
const arr2 = [];
const arr3 = ["a"];

assertEqual(head(arr1), "a");
assertEqual(head(arr2), undefined);
assertEqual(head(arr3), "a");