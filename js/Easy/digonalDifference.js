const digonalDifference = () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let digonalSum = 0,
    reverseDiagonalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    reverseDiagonalSum += arr[i][arr.length - 1 - i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        digonalSum += arr[i][j];
      }
    }
  }
  return Math.abs(digonalSum - reverseDiagonalSum);
};

export default digonalDifference;
