// Takes an array of mixed elements and nested arrays as argument and returns it as a single flattened array

const flatten = (arr) => {
  let flatArray = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      flatArray = flatArray.concat(elem);
    } else {
      flatArray.push(elem);
    }
  }
  return flatArray;
};

module.exports = flatten;
