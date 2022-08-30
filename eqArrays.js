const eqArrays = function(arr1, arr2) {

  let result = true;
  if ((arr1 === undefined) && (arr2 === undefined)) {
    return result;
  } else if ((arr1 === undefined) || (arr2 === undefined)) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  }
  while (result) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        result = eqArrays(arr1[i], arr2[i]);
      } else if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
    break;
  }
  return result;

};

module.exports = eqArrays;


