/** Power of Two */

/**
 * Give a positive integer "n", determine if the numbers is a power of 2 or not
 * An integer is a power of two , if there exists an integer "x" such that "n" === 2^x
 */

const isPowerOfTwo = (number) => {
  let value;
  for (let i = 0; i <= 9; i++) {
    if (number === Math.pow(2, i)) {
      console.log(number === Math.pow(2, i));
      value = true;
    } else {
      value = false;
    }
  }
  return value;
};

export default isPowerOfTwo;
