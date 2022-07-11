/**
 *
 * Given an array of integers,
 * calculate the ratios of its elements that are positive, negative, and zero.
 * print the decimal value of each fraction on a new line with 6 places after the decimal.
 */

const plusMinusRatio = (numbers) => {
  const positiveNumbers = [...numbers.filter((number) => number > 0)].length;
  const negativeNumbers = [...numbers.filter((number) => number < 0)].length;
  const zeroNumbers = [...numbers.filter((number) => number === 0)].length;
  const numberSize = numbers.length;
  console.log(
    positiveNumbers / numberSize,
    negativeNumbers / numberSize,
    zeroNumbers / numberSize
  );
};

export default plusMinusRatio;
