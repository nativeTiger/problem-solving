// Given an array of integers, find the sum of its elements.

const numbers = [1, 2, 3, 4, 10, 11];

const simpleArraySum = () => {
  // using for loop
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);

  // using built in reduce function
  const totalSum = numbers.reduce((number, sum) => number + sum, 0);
  console.log(totalSum);
};

export default simpleArraySum;
