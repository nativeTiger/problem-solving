/**
   Bubble Sort:
 * Starting from the first index, compare the first and the second elements.
 * If the first element is greater than the second element, they are swapped.
 * Now, compare the second and the third elements. Swap them if they are not in order.
 * The above process goes on until the last element.

 */

const bubbleSort = (numberArray) => {
  let swapped;
  do {
    swapped = false;
    let temp = 0;
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] > numberArray[i + 1]) {
        temp = numberArray[i];
        numberArray[i] = numberArray[i + 1];
        numberArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return numberArray;
};

export default bubbleSort;

/**
 * Worst case complexity = 0(n^2)
 * space complexity = 0(1)
 */
