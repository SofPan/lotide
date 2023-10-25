const map = (array, callback) => {
  const result = [];

  console.log("array :", array);
  console.log("callback :", callback);

  return result;
};

const words = ["kane", "the", "german", "shepherd", "doggy"];

const result1 = map(words, word => word[0]);

console.log(result1);
