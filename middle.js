
const middle = function(arr) {
  let result = [];
  
  if (arr.length <= 2) {
    return result;
  } else {
    if (!(arr.length % 2)) {
      result.push(arr[(arr.length / 2) - 1]);
      result.push(arr[arr.length / 2]);
    } else {
      result.push(arr[Math.floor(arr.length / 2)]);
    }
  } return result;

};

module.exports = middle;
