// Takes in an array and a callback function as arguments
// It applies a callback function to each element of the array
// then returns a new array with the results
const map = (array, callback) => {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};

module.exports = map;