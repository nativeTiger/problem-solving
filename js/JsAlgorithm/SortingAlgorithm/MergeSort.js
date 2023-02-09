/**
 *
 * @param {*} array
 * @returns sorted array
 * @description Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays,
 *  sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
 */
export default function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    leftArray[0] <= rightArray[0]
      ? sortedArray.push(leftArray.shift())
      : sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
