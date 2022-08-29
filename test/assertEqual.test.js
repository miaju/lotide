const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("", false);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(3, 2);

assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual("Lighthouse Labs", "lighthouse labs");
assertEqual([], ["a"]);
assertEqual(undefined, [undefined]);
assertEqual(undefined, undefined);