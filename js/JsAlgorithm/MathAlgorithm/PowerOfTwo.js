/** Power of Two */

/**
 * Give a positive integer "n", determine if the numbers is a power of 2 or not
 * An integer is a power of two , if there exists an integer "x" such that "n" === 2^x
 */

const isPowerOfTwo = (number) => {
  if (number === 0) return false;
  return Math.ceil(Math.log2(number)) === Math.floor(Math.log2(number));
};

export default isPowerOfTwo;
