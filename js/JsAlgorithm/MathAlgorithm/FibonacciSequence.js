/** Fibonnacci Sequence */
const fibonacciSeq = (n) => {
  const fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
};

/** Fibonacci Number at Given Index using recursion */
const fibonacciNumberAtGivenIndex = (index) => {
  if (index < 2) return index;
  return (
    fibonacciNumberAtGivenIndex(index - 1) +
    fibonacciNumberAtGivenIndex(index - 2)
  );
};

const fibonacci = {
  fibonacciSeq,
  fibonacciNumberAtGivenIndex,
};

export default fibonacci;
