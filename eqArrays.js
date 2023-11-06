// Takes two arrays and compares if they are a perfect match
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = false;
  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i])) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        result = true;
      }
    } else {
      result = eqArrays(arr1[i], arr2[i]);
    }
  }
  return result;
};

module.exports = eqArrays;