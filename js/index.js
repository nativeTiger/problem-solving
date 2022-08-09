import {
  simpleArraySum,
  prime,
  stairCase,
  minMax,
  noOfTallestCandles,
  plusMinusRatio,
  digonalDifference,
  gradingStudents,
} from "./Easy/index.js";

import {
  factorial,
  isPowerOfTwo,
  fibonacci,
} from "./JsAlgorithm/MathAlgorithm/index.js";

// simpleArraySum();

// console.log(prime.primeArray);

// stairCase(10);

// const { minSum, maxSum } = minMax([1, 2, 3, 4, 5]);

// console.log(minSum, maxSum);

// console.log(noOfTallestCandles([1, 2, 3, 4, 5, 6, 6, 6]));

// plusMinusRatio([1, 1, 0, -1, -1]);

// console.log(digonalDifference());

// gradingStudents();
const { fibonacciSeq, fibonacciNumberAtGivenIndex } = fibonacci;
console.log(fibonacciSeq(7), fibonacciNumberAtGivenIndex(9));
//console.log(factorialOfNumber(0));

//console.log(isPowerOfTwo(1));

// factorial

const { factorialOfNumber, recursiveFactorialOfNumber } = factorial;
console.log(factorialOfNumber(1), recursiveFactorialOfNumber(0));
