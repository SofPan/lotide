// Takes two arrays as arguments and filters out the elements in the second array from the first array, then returns a new array
const without = (arr1, arr2) => {
  const filteredArray = [];

  for (const elem of arr1) {
    // if the second array does not include the current element, it should be kept as part of the filtered array
    if (!arr2.includes(elem)) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
};

module.exports = without;