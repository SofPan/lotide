// A function that takes two arrays as arguments and compares if they are a perfect match
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// A function that prints the result of eqArrays to the console
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) ? `💅 Assertion passed: ${arr1} === ${arr2}` : `💔 Assertion failed: ${arr1} !== ${arr2}`);
};

// A function that takes an array as argument and re-modulates it into a single array
/*
  Flatten function:
    Const flatArray = empty array
    Loop for each element in the input array:
      if the element is an array:
        Loop for each element in this array:
          push element into flat array
        End loop
      Otherwise
        push element into flat array
    End loop
    Return flatArray
  End function
*/
const flatten = (arr) => {
  const flatArray = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      for (const el of elem) {
        flatArray.push(el);
      }
    } else {
      flatArray.push(elem);
    }
  }
  return flatArray;
};

// TESTS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([[1, 2, 3], ["a", "b", "c"]]), [1, 2, 3, "a", "b", "c"]); // => [1, 2, 3, "a", "b", "c"]
assertArraysEqual(flatten([[], [""]]), [""]); // => [""]
assertArraysEqual(flatten([[], []]), []); // => []


