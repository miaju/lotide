const without = function(original, toRemove) {

  let result = [];
  

  for (let o of original) {
    let isIn = false;
    for (let r of toRemove) {
      if (o === r) {
        isIn = true;
      }
    }
    if (!isIn) {
      result.push(o);
    }
  }
  return result;
};

module.exports = without;
