/**
 * Linear Search
 * Problem: Given an array of 'n' elements and a target element 't',
 * find the index of 't' in the array.
 * Return -1 if the target element is not found.
 */

const linearSearch = (targetNumber) => {
  const numbersArray = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === targetNumber) return i;
  }
  return -1;
};

export default linearSearch;

//time complexity : O(n)
