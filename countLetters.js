const countLetters = function(input) {
  let counts = {};
  if ((typeof input) === "string") {
    input = input.toLowerCase();
    for (const letter of input) {
      if (letter.toUpperCase() !== letter.toLowerCase()) {
        if (counts[letter]) {
          counts[letter]++;
        } else {
          counts[letter] = 1;
        }
      }
    }
  }
  return counts;
};

module.exports = countLetters;
