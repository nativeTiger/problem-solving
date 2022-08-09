/** Factorail of a number */

/**
 * In mathematics, the factorial of a non-negative integer "n", denoted n!,
 * is the product of all positive integers less than or equal to "n"
 */

const factorialOfNumber = (number) => {
  let factorial = 1;
  while (number > 0) {
    factorial *= number;
    number--;
  }
  return factorial;
};

/** Factorial of the number using recursion */

const recursiveFactorialOfNumber = (number) =>
  number > 0 ? number * recursiveFactorialOfNumber(number - 1) : 1;

const factorial = {
  factorialOfNumber,
  recursiveFactorialOfNumber,
};
export default factorial;
