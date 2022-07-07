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
