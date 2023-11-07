# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sofpan/lotide`

**Require it:**

`const _ = require('@sofpan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Takes in a string and returns the total of each letter in that string
* `countOnly(array, object)`: Takes an array of strings and an object of items to count, then returns the total for the specified subset of those items
* `eqArrays(array1, array2)`: compares two arrays for equality
* `eqObjects(object1, object2)`: compares two objects for equality
* `findKey(object, callback)`: Takes two arguments, an object and a callback, then returns the first truthy key, or undefined if no key is found
* `findKeyByValue(object, string)`: Takes in an object and a value and returns the matching key
* `flatten(array)`: Takes an array of mixed elements and nested arrays as argument and returns it as a single flattened array
* `head(array)`: Takes in an array and returns the first element of the array
* `letterPositions(string)`: Takes in a string and returns the indexed positions of each occurrence of each letter in the string
* `map(array, callback)`: Takes in an array and a callback function as arguments, applies the callback to each element of the array, then returns a new array with the results
* `middle(array)`: Takes an array and returns the middle element(s) as a new array
* `tail(array)`: Takes an array and returns every element except the first one
* `takeUntil(array, callback)`: Takes an array and a callback and returns a new array with elements taken from the beginning until the callback condition is met, or the entire array if the condition is never met
* `without(array1, array2)`: Takes two arrays and filters out the elements in the second array from the first array, then returns a new array