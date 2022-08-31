const findKeyByValue = function(lookIn, toFind) {
  let result;
  for (const item in lookIn) {
    if (lookIn[item] === toFind) {
      result = item;
    }
  }
  
  return result;

};
module.exports = findKeyByValue;
