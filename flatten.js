const flatten = function(arr, result = []) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      flatten(element, result);
    } else {
      result.push(element);
    }
  } return result;
};

module.exports = flatten;

