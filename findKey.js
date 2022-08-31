const findKey = function(ob, cb) {
  for (let item in ob) {
    if (cb(ob[item])) {
      return item;
    }
  }
};

module.exports = findKey;
