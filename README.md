# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Current Contents

| function | description|
| -------- |  --------- |
| _assertEqual_ | prints to the console whether the two given variables are equal in a plain, easy to read way |
| _head_ | returns the value in the zeroth place in the given array, returns undefined if array is empty|
| _tail_ | returns an array containing everything but the zeroth element of the given array |
| _eqArrays_ | returns whether the two given arrays are exactly equal |
| _assertArraysEqual_ | prints to the console whether the two given arrays are exactly equal |
| _without_ | returns a new array that is a subset of a given array, with given elements removed |
| _flatten_ | returns an array that is the single-level version of the given nested array |
| _middle_ | returns the middle of the given array - returns an empty array for arrays with length 2 or less. Returns the middle 2 values if the length is even, and returns the one middle value if the length is odd |
| _countOnly_ | returns an object containing the counts of the keys in itemsToCount in given array allItems |
| _countLetters_ | returns an object containing the count of how many times each letter that occurs in the given string |
| _letterPosition_ | returns an object that contains the positions where each letter in the given string appears |
| _findKeyByValue_ | returns the key of the given object that corresponds with the given value |
| _eqObjects_ | returns whether the given two objects are exactly equal |
| _assertObjectsEqual_ | prints out whether the 2 given object are exactly equal |
| _map_ | returns new array that contains all the items in the given array modified by the given callback function |
| _takeUntil_ | returns an array that is a copy of the given array up to the point where the item in the given array returns a 'truthy' value from the callback function |
| _findKey_ | returns the first key in the given object that returns a 'truthy' value from the given callback function |
