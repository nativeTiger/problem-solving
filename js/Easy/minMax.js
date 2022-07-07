/**
 *
 * Given five positive integers,
 * find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as
 * a single line of two space-separated long integers.
 *
 */

const minMax = (numbers) => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const sum = numbers.reduce(
    (previousNumber, currentNumber) => previousNumber + currentNumber,
    0
  );
  return { minSum: sum - max, maxSum: sum - min };
};

export default minMax;
