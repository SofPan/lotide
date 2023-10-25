const map = (array, callback) => {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};

const words = ["kane", "the", "german", "shepherd", "doggy"];

const result1 = map(words, word => word[0]);

console.log(result1);
