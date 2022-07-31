const fibonacciSeq = (n) => {
  const fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
};

export default fibonacciSeq;
