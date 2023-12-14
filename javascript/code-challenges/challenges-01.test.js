'use strict';

const addOne = (arr) => {
  const output = [];
  arr.forEach((element) => {
    const plusOne = element + 1;
    output.push(plusOne);
  });
  return output;
};

const addExclamation = (arr) => {
  const output = [];
  arr.forEach((element) => {
    const plusExclamation = element + '!';
    output.push(plusExclamation);
  });
  return output;
};

const allUpperCase = (arr) => {
  const output = [];
  arr.forEach((element) => {
    const plusUpperCase = element.toUpperCase();
    output.push(plusUpperCase);
  });
  return output;
};

const greeting = (word) => {
  return word.toUpperCase() + '!';
};

const speaker = (words, greeting) => {
  const output = [];
  words.forEach((element) => {
    const modified = greeting(element);
    output.push(modified);
  });
  return output;
};

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};

const createList = (availableItems) => {
  const groceryList = [];
  availableItems.forEach((element) => {
    if (element.available === true) {
      groceryList.push(element.name);
    }
  });
  return groceryList;
};

const fizzbuzz = (arr) => {
  const output = [];
  arr.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      output.push('Fizz Buzz');
    } else if (element % 3 === 0) {
      output.push('Fizz');
    } else if (element % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(element);
    }
  });
  return output;
};

module.exports = {
  addOne,
  addExclamation,
  allUpperCase,
  greeting,
  speaker,
  addValues,
  addNumbers,
  createList,
  fizzbuzz,
};
