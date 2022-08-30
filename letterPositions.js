
const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i].toLowerCase();
    if (letter.toUpperCase() !== letter.toLowerCase()) {
      if (result[letter]) {
        result[letter].push(i);

      } else {
        result[letter] = [i];

      }
    }
  }
  
  return result;

};
module.exports = letterPositions;
