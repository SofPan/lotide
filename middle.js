// Find the middle elements if array has even length
const getMiddleElementsForEvenArray = (arr, midPoint) => {
  // return the element at the index of the midpoint and the element at the index just before
  return [arr[midPoint - 1], arr[midPoint]];
};

// Find the middle element if array has odd length
const getMiddleElementForOddArray = (arr, midPoint) => {
  // return the element at the index of the midpoint
  return [arr[midPoint]];
};

// Returns the middle element(s) of an array as a new array
const middle = (arr) => {
  const midPoint = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return getMiddleElementsForEvenArray(arr, midPoint);
  } else {
    return getMiddleElementForOddArray(arr, midPoint);
  }
};


module.exports = middle;